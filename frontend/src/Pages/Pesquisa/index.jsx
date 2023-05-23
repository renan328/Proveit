import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Image, useColorScheme, Appearance } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import stylesLight from "./pesquisa.module";
import stylesDark from "./pesquisa.moduleDark";
import CartaoFavorito from "../../components/CartaoFavorito/CartaoFavorito";

export default function Pesquisar() {

    const results = '1';
    const footerText = '1';

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight

    if (results == '') {
        const footerText = 'Não encontramos nada, foi mal!';
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.subText}>Buscar</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Qual é a sua fome?'></TextInput>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{
                            color: '#505050'
                        }} size={20} />
                    </View>
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

            <View style={styles.cardList}>
                <CartaoFavorito />
                <CartaoFavorito />
                <CartaoFavorito />
                <CartaoFavorito />
                <CartaoFavorito />
                <CartaoFavorito />
                <CartaoFavorito />
                <CartaoFavorito />
                <CartaoFavorito />

            </View>

            <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: 330, height: 5,
                    marginTop: 15,
                    alignSelf: 'center',
                    marginBottom: 20

                }} />
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Text style={{ color: '#50505060', fontFamily: 'Raleway_500Medium' }}>Por enquanto é só!</Text>
                <Image
                    style={{ width: 52, height: 46, top: 15, marginBottom: 100 }}
                    source={require('../../assets/proveitGrey.png')}
                />
            </View>
        </ScrollView>

    );

}
