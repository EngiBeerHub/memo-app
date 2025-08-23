import {createIconSetFromIcoMoon} from "@expo/vector-icons";
import fontData from '../../assets/fonts/icomoon.ttf';
import fontSelection from '../../assets/fonts/selection.json';
import {useFonts} from "expo-font";

const CustomIcon = createIconSetFromIcoMoon(
  fontSelection,
  'IcoMoon',
  'icomoon.ttf'
);

const Icon = () => {
  const [fontLoaded] = useFonts({
    IcoMoon: fontData
  })
  if (!fontLoaded) {
    return null;
  }
  return (
    <CustomIcon name={'plus'} size={40} color={'red'}/>
  );
};

export default Icon;
