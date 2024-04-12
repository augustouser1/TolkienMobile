import { TouchableOpacity, TouchableHighlightProps } from "react-native";
import { styles } from "../ButtonDark/styles";
import { ImageBackground, Image, View, Text } from "react-native";

interface Ibuttom extends TouchableHighlightProps {
    onPressI: () => void

}
export function ButtonPage2({ onPressI }: Ibuttom) {
    const ring = require('../../assets/escuro.png')
    return (
        <TouchableOpacity style={styles.button} onPress={onPressI} >
      <Image source={ring} />
        </TouchableOpacity>
             
 )
}