import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, useColorScheme, ScrollView, TouchableOpacity } from "react-native";
import stylesLight from "./historico.module";
import stylesDark from "./historico.moduleDark";
import CartaoFavorito from "../../components/CartaoFavorito/CartaoFavorito";
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import showToast from '../../../hooks/toasts';

export default function Historico() {
    const navigation = useNavigation();

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [dadosReceita, setDadosReceita] = useState([]);
    const [loading, setLoading] = useState(false);

    async function BuscarReceitas() {
        const headers = await HeaderRequisicao(navigation);
        setLoading(true);

        try {
            // Obtenhe o histórico do AsyncStorage
            const historico = await AsyncStorage.getItem('historicoReceitas');

            if (historico !== null) {
                const historicoReceitas = JSON.parse(historico);

                const historicoReceitasString = historicoReceitas.join(',');
                const url = `https://serverproveit.azurewebsites.net/api/receita/historico?idReceitas=${historicoReceitasString}`;

                fetch(url, {
                    method: 'GET',
                    headers
                })
                    .then(response => response.json())
                    .then(json => {
                        setDadosReceita(json);
                        setLoading(false);

                    })
                    .catch(error => {
                        showToast('Foi mal!', 'Erro ao buscar receitas, tente novamente mais tarde.', 'error');
                        setLoading(false);
                    });
            }
        } catch (error) {
            console.log(error);
            showToast('Foi mal!', 'Erro ao buscar receitas, tente novamente mais tarde.', 'error');
            setLoading(false);
        }
    };

    useEffect(() => {
        BuscarReceitas();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.firstText}>Meu</Text>
                    <Text style={styles.subText}>Histórico</Text>
                </View>
            </View>
            <View style={styles.ScreenSelect}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#505050', fontFamily: 'Raleway_700Bold' }}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ color: '#FF7152', fontFamily: 'Raleway_700Bold' }}>Histórico</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.SubHeader}>
                <Text style={{ fontSize: 18, fontFamily: 'Raleway_800ExtraBold', color: '#606060', marginVertical: 18 }}>Visto recentemente</Text>
            </View>
            {loading ? (
                <View style={{ display: "flex", alignSelf: "center" }}>
                    <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium' }}>Um momento, estamos buscando!</Text>
                    <ActivityIndicator size="large" color="#FF7152" style={{ marginTop: 10 }} />
                </View>
            ) : (
                <View style={styles.CardsList}>
                    {dadosReceita.length > 0 ? (
                        <>
                            {
                                dadosReceita.map((receita, index) =>
                                    <CartaoFavorito dadosReceita={receita} key={index} />
                                )
                            }
                        </>
                    ) : null}
                </View>
            )}
            {dadosReceita.length === 0 && !loading && <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium', alignSelf: 'center' }}>Nenhum resultado encontrado.</Text>}

            <View style={{ paddingVertical: 50 }} />
        </ScrollView >
    )
}