import {StyleSheet, View} from "react-native";
import Header from "../../components/Header";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/icon";

const List = () => {
  return (
    <View style={styles.container}>
      {/*header*/}
      <Header/>

      {/*list*/}
      <View>
        {/*item*/}
        <MemoListItem/>
        <MemoListItem/>
        <MemoListItem/>
      </View>

      {/*FAB*/}
      <CircleButton>
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
