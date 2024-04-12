import React from "react";
import { ImageBackground, Image, View, Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "../../screens/Home/styles";
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/button";
import {ButtonPage2} from "../../components/ButtonDark"
 
export function Home({ setpageI }: Ipagina) {
    const home = require('../../assets/Moria.png')
    const tolkiengate = require('../../assets/Tolkien Gate.png')
    return (
        <ImageBackground source={home} style={styleContainer.container}>
            <View style={styles.Image}>
                <View style={styles.Tolkienstyle}>
                <Image source={tolkiengate} >
               </Image>
                </View>
               
            </View>
            <View style={styles.button}>
            <ButtonPage2 onPressI={() => setpageI(1)} />
            <ButtonPage onPressI={() => setpageI(2)} />
            <ButtonPage onPressI={() => setpageI(3)} />
            <ButtonPage onPressI={() => setpageI(4)} />
            </View>
        </ImageBackground>


    )
}


