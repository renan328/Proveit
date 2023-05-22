import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import styles from "./pesquisa.module";
import CartaoFavorito from "../../components/CartaoFavorito/CartaoFavorito";

export default function Pesquisar() {

    const results = '1';
    const footerText = '1';

    if (results == '') {
        const footerText = 'Não encontramos nada';
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.subText}>Buscar</Text>
                    <TextInput style={styles.input} placeholder='Email ou nome de usuário'></TextInput>
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
                <CartaoFavorito titulo={'Comida'} text={'comidinhas hmmmm'} Image={'/workspaces/ProveIt/frontend/src/assets/cat_salgados.jpg'} stars={5} />

                <CartaoFavorito titulo={'Comida'} text={'comidinhas hmmmm'} Image={'/workspaces/ProveIt/frontend/src/assets/cat_salgados.jpg'} stars={5} />

            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>{footerText}</Text>
                <View
                    style={{
                        borderBottomColor: 'rgba(0,0,0,0.3)',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: 330, height: 5,
                        marginTop: 15
                    }}
                />
            </View>

        </View>

    );

}
