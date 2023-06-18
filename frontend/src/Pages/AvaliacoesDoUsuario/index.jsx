import React, { useState, useEffect } from "react";
import { View, Text, useColorScheme, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import stylesLight from "./avaliacoesdousuario.module";
import stylesDark from "./avaliacoesdousuario.moduleDark";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CartaoAvalicaoDoUsuario from "../../components/CartaoAvaliacaoDousuario/CartaoAvaliacaoDoUsuario";
import { DadosUsuario } from "../../AuthContext";
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import showToast from '../../../hooks/toasts';

export default function AvaliacoesDoUsuario() {

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [dadosAvaliacao, setDadosAvaliacao] = useState([]);
    const navigation = useNavigation();

    async function ListarAvaliacoes() {
        const headers = await HeaderRequisicao(navigation);
        const userDataJWT = await DadosUsuario();

        fetch("https://localhost:7219/api/avaliacao/usuario/" + userDataJWT.ID, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosAvaliacao(json);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar suas avaliações, tente novamente mais tarde.', 'error');
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
                            marginTop: 15
                        }}
                    />
                </View>

                <View style={styles.CardsList}>
                    {
                        dadosAvaliacao.map((avaliacao, index) => (
                            <CartaoAvalicaoDoUsuario avaliacao={avaliacao} key={index} />
                        ))
                    }
                </View>
                <View style={{ paddingVertical: 40 }} />
            </ScrollView>
        </View>
    )
}