import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, button, useColorScheme, Appearance, TouchableOpacity } from "react-native";
import stylesLight from "./historico.module";
import stylesDark from "./historico.moduleDark";
import CartaoFavorito from "../../components/CartaoFavorito/CartaoFavorito";
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Historico() {
    const navigation = useNavigation();

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [dadosReceita, setDadosReceita] = useState([]);

    async function BuscarReceitas() {
        const headers = await HeaderRequisicao(navigation);

        try {
            // Obtenhe o histórico do AsyncStorage
            const historico = await AsyncStorage.getItem('historicoReceitas');

            if (historico !== null) {
                const historicoReceitas = JSON.parse(historico);

                // Constrói a string do filtro
                const filtro = `WHERE idReceita IN (${historicoReceitas.join(',')})`;

                // Faz a solicitação à API usando o filtro
                fetch(`https://localhost:7219/api/receita/filtro/${filtro}`, {
                    method: 'GET',
                    headers
                })
                    .then(response => response.json())
                    .then(json => {
                        setDadosReceita(json);
                    })
                    .catch(error => {
                        alert('Erro ao buscar receita');
                    });
                    
            }
        } catch (error) {
            console.log(error);
            showToast('Foi mal!', 'Erro ao buscar receitas, tente novamente mais tarde.', 'error');
        }
    };

    useEffect(() => {
        BuscarReceitas();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.firstText}>Meu</Text>
                    <Text style={styles.subText}>Hitórico</Text>
                </View>
            </View>
            <View style={styles.ScreenSelect}>
                <TouchableOpacity>
                    <Text style={{ color: '#FF7152', fontFamily: 'Raleway_700Bold' }}>Histórico</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#505050', fontFamily: 'Raleway_700Bold' }}>Favoritos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.SubHeader}>
                <Text style={{ fontSize: 18, fontFamily: 'Raleway_800ExtraBold', color: '#606060', marginVertical: 18 }}>Visto recentemente</Text>
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