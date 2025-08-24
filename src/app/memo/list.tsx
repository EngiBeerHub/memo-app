import {StyleSheet, View} from "react-native";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/icon";
import {router, useNavigation} from "expo-router";
import {useEffect} from "react";
import LogOutButton from "../../components/LogOutButton";
import {collection, onSnapshot, query, orderBy} from "firebase/firestore";
import {auth, db} from "../../config";

const handlePress = (): void => {
  router.push('/memo/create');
};

const List = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton/>
    });
  }, []);

  useEffect(() => {
    if (auth.currentUser == null) return;
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
    const q = query(ref, orderBy('updatedAt', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      snapshot.forEach(doc => console.log(doc.data()));
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/*list*/}
      <View>
        {/*item*/}
        <MemoListItem/>
        <MemoListItem/>
        <MemoListItem/>
      </View>

      {/*FAB*/}
      <CircleButton onPress={handlePress}>
        <Icon name={'plus'} size={40} color={'#ffffff'}/>
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});

export default List;
