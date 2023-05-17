import React from "react";
import { View, Text, StyleSheet, button, useColorScheme, Appearance, TouchableOpacity } from "react-native";
import stylesLight from "./favoritos.module";
import stylesDark from "./favoritos.moduleDark";
import CartaoFavorito from "../../components/CartaoFavorito/CartaoFavorito";
import CartaoReceita from "../../components/CartaoReceita/CartãoReceita";

export default function Favoritos() {

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.firstText}>Meus</Text>
                    <Text style={styles.subText}>Favoritos</Text>
                </View>
            </View>
            <View style={styles.ScreenSelect}>
                <TouchableOpacity><Text style={{color: '#505050', fontFamily: 'Raleway_700Bold'}}>Histórico</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{color: '#FF7152', fontFamily: 'Raleway_700Bold'}}>Favoritos</Text></TouchableOpacity>
            </View>
            <View style={styles.SubHeader}>
                <Text style={{ fontSize: 18, fontFamily: 'Raleway_800ExtraBold', color: '#606060', marginVertical: 18 }}>Favoritos</Text>
            </View>
            <View style={styles.CardsList}>
                <CartaoFavorito />
                <CartaoFavorito />
                <CartaoFavorito />
                <CartaoFavorito />
            </View>
            <View style={{ paddingVertical: 50 }} />
        </View>
    )
}