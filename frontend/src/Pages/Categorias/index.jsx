import React, { useState, useEffect } from "react";
import { View, Text, useColorScheme, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import stylesLight from "./categorias.module";
import stylesDark from "./categorias.moduleDark";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CartaoReceita from "../../components/CartaoReceita/CartaoReceita";
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import showToast from '../../../hooks/toasts';
import { useRoute } from '@react-navigation/native';

export default function ListagemCategoria({ categoria }) {
    const navigation = useNavigation();

    const route = useRoute();
    const { nomeCategoria } = route.params;

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [dadosReceita, setDadosReceita] = useState([]);

    async function ListarReceitas() {
        const headers = await HeaderRequisicao(navigation);

        fetch("https://localhost:7219/api/receita/categoria/" + nomeCategoria, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar as receitas, tente novamente mais tarde.', 'error');
            });
    }

    useEffect(() => {
        ListarReceitas();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao} >
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
                    {
                        dadosReceita.map((receita, index) => (
                            <CartaoReceita receita={receita} key={index} />
                        ))
                    }
                </View>
                <View style={{ paddingVertical: 40 }} />
            </ScrollView>
        </View>
    )
}