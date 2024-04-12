import { TouchableOpacity, TouchableHighlightProps } from "react-native";
import { styles } from "../button/styles";
import { ImageBackground, Image, View, Text } from "react-native";

interface Ibuttom extends TouchableHighlightProps {
    onPressI: () => void

}
export function ButtonPage({ onPressI }: Ibuttom) {
    const ring = require('../../assets/claro.png')
    return (
        <TouchableOpacity style={styles.button} onPress={onPressI} >
      <Image source={ring} />
        </TouchableOpacity>
             
 )
}