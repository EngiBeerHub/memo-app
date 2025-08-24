import {FlatList, StyleSheet, View} from "react-native";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/icon";
import {router, useNavigation} from "expo-router";
import {useEffect, useState} from "react";
import LogOutButton from "../../components/LogOutButton";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {auth, db} from "../../config";
import {Memo} from "../../../types/memo";

const handlePress = (): void => {
  router.push('/memo/create');
};

const List = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
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
      const remoteMemos: Memo[] = [];
      snapshot.forEach(doc => {
        console.log(doc.data());
        const {bodyText, updatedAt} = doc.data();
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        });
      });
      setMemos(remoteMemos);
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/*list*/}
      <FlatList data={memos} renderItem={({item}) => <MemoListItem memo={item}/>}/>

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
