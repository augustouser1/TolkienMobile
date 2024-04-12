import React from "react";
import { ImageBackground, Image, View,Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "../../screens/Pag2/styles";
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/button";
import {ButtonPage2} from "../../components/ButtonDark"
export function Pag2({ setpageI }: Ipagina) {
    const tani = require('../../assets/Tani.png')
    const logo = require('../../assets/logo.png')
    return (
        <ImageBackground source={tani} style={styleContainer.container}>
            <View style={styles.Image}>
                <View style={styles.Logo}>
                <Image source={logo}></Image>
                </View>

            </View>
            <View style={styles.viewtext}>
            <Text style={styles.Text}>
            Bem-vindo ao Tolkien Gate- o portal para os reinos épicos e as terras mágicas criadas pelo renomado autor J.R.R. Tolkien. Este fórum é um refúgio para todos os amantes da fantasia e aqueles que se encantaram com os mundos maravilhosos concebidos pelo mestre da literatura fantástica. 



              </Text>
            </View>
            
            <View style={styles.button}>
            <ButtonPage onPressI={() => setpageI(1)} />
            <ButtonPage2 onPressI={() => setpageI(2)} />
            <ButtonPage onPressI={() => setpageI(3)} />
            <ButtonPage onPressI={() => setpageI(4)} />
            </View>
        </ImageBackground>


    )
}