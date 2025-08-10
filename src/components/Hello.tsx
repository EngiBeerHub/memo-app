import {StyleSheet, Text, TextStyle, View} from "react-native";

interface Props {
  children: string;
  bang?: boolean;
  style: TextStyle;
}

export const Hello = (props: Props) => {
  const {children, bang, style} = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children}{bang ? '!' : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
});
