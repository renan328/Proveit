import React, { useState, useEffect } from "react";
import { View, Text, useColorScheme, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import stylesLight from "./categorias.module";
import stylesDark from "./categorias.moduleDark";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CartaoReceita from '../../components/CartaoFavorito/CartaoFavorito'
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import showToast from '../../../hooks/toasts';
import LottieView from 'lottie-react-native';
import { useRoute } from '@react-navigation/native';

export default function ListagemCategoria({ categoria }) {
    const navigation = useNavigation();

    const route = useRoute();
    const { nomeCategoria } = route.params;

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [dadosReceita, setDadosReceita] = useState([]);
    const [loading, setLoading] = useState(false);

    async function ListarReceitas() {
        const headers = await HeaderRequisicao(navigation);
        setLoading(true);

        fetch("https://serverproveit.azurewebsites.net/api/receita/categoria/" + nomeCategoria, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
                setLoading(false);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar as receitas, tente novamente mais tarde.', 'error');
                setLoading(false);
            });
    }

    useEffect(() => {
        ListarReceitas();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, marginLeft: 20 }} >
                    <FontAwesomeIcon icon={faChevronLeft} color="#FF7152" size={30} />
                </TouchableOpacity>

                <View style={styles.header}>

                    <Text style={styles.subText}>{nomeCategoria}</Text>
                    <View
                        style={{
                            borderBottomColor: '#505050',
                            opacity: 0.4,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: "80%", height: 5,
                            marginTop: 15
                        }}
                    />
                </View>

                <View style={styles.CardsList}>
                    {loading ? (
                        <View style={{ display: "flex", alignSelf: "center", marginTop: 20 }}>
                            <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium' }}>Um momento, estamos buscando!</Text>
                            <LottieView
                                source={require('../../assets/lottie/search.json')} // Caminho para o arquivo JSON do Lottie
                                autoPlay
                                loop
                                style={{ height: 150, alignSelf: 'center' }}
                            />
                        </View>
                    ) : (
                        <>
                            {dadosReceita.length > 0 ? (
                                <>
                                    {
                                        dadosReceita.map((receita, index) => (
                                            <CartaoReceita dadosReceita={receita} key={index} />
                                        ))
                                    }
                                </>
                            ) : null}
                        </>
                    )}
                    {dadosReceita.length === 0 && !loading && <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium', alignSelf: 'center' }}>Nenhum resultado encontrado.</Text>}

                </View>
                <View style={{ paddingVertical: 40 }} />
            </ScrollView>
        </View>
    )
}