import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, useColorScheme, ScrollView, TouchableOpacity } from "react-native";
import stylesLight from "./favoritos.module";
import stylesDark from "./favoritos.moduleDark";
import CartaoFavorito from "../../components/CartaoFavorito/CartaoFavorito";
import CartaoReceita from "../../components/CartaoReceita/CartaoReceita";
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import showToast from '../../../hooks/toasts';

export default function Favoritos() {
    const navigation = useNavigation();

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [dadosReceita, setDadosReceita] = useState([]);
    const [loading, setLoading] = useState(false);

    async function BuscarReceitas() {
        const userDataJWT = await DadosUsuario();
        const headers = await HeaderRequisicao(navigation);

        setLoading(true);

        fetch("https://serverproveit.azurewebsites.net/api/ReceitaFavorita/usuario/" + userDataJWT.ID, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
                setLoading(false);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar suas receitas, tente novamente mais tarde.', 'error');
                setLoading(false);
            });
    }

    useEffect(() => {
        BuscarReceitas();
    }, []);

    return (
        <ScrollView style={styles.container}>
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

                {loading ? (
                    <View style={{ display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium' }}>Um momento, estamos buscando!</Text>
                        <ActivityIndicator size="large" color="#FF7152" style={{ marginTop: 10 }} />
                    </View>
                ) : (
                    <>
                        {dadosReceita.length > 0 ? (
                            <>
                                {
                                    dadosReceita.map((receita, index) =>
                                        <CartaoFavorito dadosReceita={receita} key={index} />
                                    )
                                }
                            </>
                        ) : null}
                    </>
                )}
                {dadosReceita.length === 0 && !loading && <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium', alignSelf: 'center' }}>Nenhum resultado encontrado.</Text>}

            </View>
            <View style={{ paddingVertical: 50 }} />
        </ScrollView>
    )
}