import React from "react";
import { ImageBackground, Image, View,Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "../Pag3/styles";
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/button";
import {ButtonPage2} from "../../components/ButtonDark"

export function Pag3({ setpageI }: Ipagina) {
    const home = require('../../assets/Gondolin.png')
    
    return (
        <ImageBackground source={home} style={styleContainer.container}>
            <View style={styles.Image}>
            <View style={styles.viewtext}>
            <Text style={styles.Text}>
            Este fórum não é apenas um ponto de encontro para discutir os livros aclamados como "O Senhor dos Anéis" e "O Hobbit", mas também um espaço para desvendar os mistérios dos Contos Inacabados e explorar os apêndices que ampliam ainda mais o vasto universo de Tolkien.
            </Text>
            </View>
            </View>
            <View style={styles.button}>
            <ButtonPage onPressI={() => setpageI(1)} />
            <ButtonPage onPressI={() => setpageI(2)} />
            <ButtonPage2 onPressI={() => setpageI(3)} />
            <ButtonPage onPressI={() => setpageI(4)} />
            </View>
        </ImageBackground>


    )
}