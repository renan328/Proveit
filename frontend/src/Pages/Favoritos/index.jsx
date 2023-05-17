import React from "react";
import { View, Text, StyleSheet, button, useColorScheme, Appearance } from "react-native";
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
                    <View
                        style={{
                            borderBottomColor: '#505050',
                            opacity: 0.4,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: 330, height: 5,
                            marginTop: 15
                        }}
                    />
                </View>
            </View>
            <View style={styles.ScreenSelect}>
                <Text>Histórico</Text>
                <Text>Favoritos</Text>
            </View>
            <View style={styles.SubHeader}>
                <Text style={{ fontSize: 18, fontFamily: 'Raleway_800ExtraBold', color: '#505050' }}>Favoritos</Text>
            </View>
            <View style={styles.CardsList}>
                <CartaoFavorito />
            </View>
            <View style={{ paddingVertical: 50 }} />
        </View>
    )
}