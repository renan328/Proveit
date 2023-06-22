import React from "react"
import { View, Text, useColorScheme } from "react-native"
import stylesLight from "../PesquisaPorReceita/pesquisa.module"
import stylesDark from "../PesquisaPorReceita/pesquisa.moduleDark"
import { TopTabNavigatorPesquisas } from '../../Routes';

export default function Pesquisas() {

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <View style={{ backgroundColor: scheme === 'dark' ? '#fff' : '#202020', height: '100%' }}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.subText}>Buscar <Text style={[styles.subText, { color: scheme === 'dark' ? '#fff' : '#505050' }]}>por</Text></Text>
                </View>
            </View>

            <TopTabNavigatorPesquisas />
        </View>
    )
}