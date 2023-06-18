import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, button, useColorScheme, Appearance, TouchableOpacity } from "react-native";
import stylesLight from "./favoritos.module";
import stylesDark from "./favoritos.moduleDark";
import CartaoFavorito from "../../components/CartaoFavorito/CartaoFavorito";
import CartaoReceita from "../../components/CartaoReceita/CartaoReceita";
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Favoritos() {
    const navigation = useNavigation();

    const [dadosReceita, setDadosReceita] = useState([]);
    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    async function BuscarReceitas() {
        const userDataJWT = await DadosUsuario();
        const headers = await HeaderRequisicao(navigation);

        fetch("https://localhost:7219/api/ReceitaFavorita/usuario/" + userDataJWT.ID, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar suas receitas, tente novamente mais tarde.', 'error');
            });
    }

    useEffect(() => {
        BuscarReceitas();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.firstText}>Meus</Text>
                    <Text style={styles.subText}>Favoritos</Text>
                </View>
            </View>
            <View style={styles.ScreenSelect}>
                <TouchableOpacity>
                    <Text style={{ color: '#FF7152', fontFamily: 'Raleway_700Bold' }}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Historico')}>
                    <Text style={{ color: '#505050', fontFamily: 'Raleway_700Bold' }}>Histórico</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.SubHeader}>
                <Text style={{ fontSize: 18, fontFamily: 'Raleway_800ExtraBold', color: '#606060', marginVertical: 18 }}>Favoritos</Text>
            </View>
            <View style={styles.CardsList}>
                {
                    dadosReceita.map((receita, index) =>
                        <CartaoFavorito dadosReceita={receita} key={index} />
                    )
                }
            </View>
            <View style={{ paddingVertical: 50 }} />
        </View>
    )
}