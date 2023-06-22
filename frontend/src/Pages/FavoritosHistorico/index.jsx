import React from "react"
import { View, Text, useColorScheme } from "react-native"
import stylesLight from "../Favoritos/favoritos.module"
import stylesDark from "../Favoritos/favoritos.moduleDark"
import { TopTabNavigator } from '../../Routes';

export default function HeaderFavoritos() {

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <View style={{ backgroundColor: scheme === 'dark' ? '#fff' : '#202020', height: '100%' }}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.firstText}>Meus</Text>
                    <Text style={styles.subText}>Favoritos</Text>
                </View>
            </View>

            <TopTabNavigator />
        </View>
    )
}