import {StyleSheet, View} from "react-native";
import Header from "../components/Header";
import MemoListItem from "../components/MemoListItem";
import CircleButton from "../components/CircleButton";

const Index = () => {
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
      <CircleButton>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});

export default Index;
