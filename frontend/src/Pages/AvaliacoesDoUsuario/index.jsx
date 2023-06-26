import React, { useState, useEffect } from "react";
import { View, Text, useColorScheme, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import stylesLight from "./avaliacoesdousuario.module";
import stylesDark from "./avaliacoesdousuario.moduleDark";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CartaoAvalicaoDoUsuario from "../../components/CartaoAvaliacaoDousuario/CartaoAvaliacaoDoUsuario";
import { DadosUsuario } from "../../AuthContext";
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import showToast from '../../../hooks/toasts';
import LottieView from 'lottie-react-native';

export default function AvaliacoesDoUsuario() {

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [dadosAvaliacao, setDadosAvaliacao] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    async function ListarAvaliacoes() {
        
        const headers = await HeaderRequisicao(navigation);
        const userDataJWT = await DadosUsuario();
        
        setLoading(true);

        fetch("https://serverproveit.azurewebsites.net/api/avaliacao/usuario/" + userDataJWT.ID, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosAvaliacao(json);
                setLoading(false);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar suas avaliações, tente novamente mais tarde.', 'error');
                setLoading(false);
            });
    }

    useEffect(() => {
        ListarAvaliacoes();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao} >
                    <FontAwesomeIcon icon={faChevronLeft} color="#FF7152" size={30} />
                </TouchableOpacity>

                <View style={styles.header}> 
                    <Text style={styles.firstText}>Minhas</Text>
                    <Text style={styles.subText}>Avaliações</Text>
                    <View
                        style={{
                            borderBottomColor: '#505050',
                            opacity: 0.4,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: "80%", height: 5,
                            marginTop: 15,
                            marginBottom: 30
                        }}
                    />
                </View>

                <LottieView
                    source={require('../../assets/lottie/comment.json')} // Caminho para o arquivo JSON do Lottie
                    autoPlay
                    loop
                    style={{ height: 50, alignSelf: 'center', marginBottom: 10}}
                />

                <View style={styles.CardsList}>

                    {loading ? (
                        <View style={{ display: "flex", alignSelf: "center" }}>
                            <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium' }}>Um momento, estamos buscando!</Text>
                            <ActivityIndicator size="large" color="#FF7152" style={{ marginTop: 10 }} />
                        </View>
                    ) : (
                        <>
                            {dadosAvaliacao.length > 0 ? (
                                <>
                                    {
                                        dadosAvaliacao.map((avaliacao, index) => (
                                            <CartaoAvalicaoDoUsuario avaliacao={avaliacao} key={index} />
                                        ))
                                    }
                                </>
                            ) : null}
                        </>
                    )}
                    {dadosAvaliacao.length === 0 && !loading && <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium' }}>Nenhum resultado encontrado.</Text>}

                </View>
                <View style={{ paddingVertical: 40 }} />
            </ScrollView>
        </View>
    )
}