import React from "react";
import { ImageBackground, Image, View, Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "../Pag4/styles";
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/button";
import {ButtonPage2} from "../../components/ButtonDark"

export function Pag4({ setpageI }: Ipagina) {
    const home = require('../../assets/Mordor.png')
    const book = require('../../assets/SIL.jpg')
    return (
        <ImageBackground source={home} style={styleContainer.container}>
            <View style={styles.Image}>
           
            <View style={styles.viewtext}>
            <Text style={styles.Text2}>Então, prepare-se para uma jornada épica. Pegue sua capa de viajante, afie sua espada élfica e entre neste portal para explorar os reinos de fantasia que cativaram os corações e mentes de inúmeros viajantes ao longo dos tempos.</Text>
            </View>
            </View>
           
            
            <View style={styles.button}>
                <ButtonPage onPressI={() => setpageI(1)} />
                <ButtonPage onPressI={() => setpageI(2)} />
                <ButtonPage onPressI={() => setpageI(3)} />
                <ButtonPage2 onPressI={() => setpageI(4)} />
            </View>
        </ImageBackground>

    )
    
}