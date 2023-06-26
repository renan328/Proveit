import React, { useState, useEffect } from "react";
import { View, Text, useColorScheme, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import stylesLight from "./receitasdousuario.module";
import stylesDark from "./receitasdousuario.moduleDark";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CartaoReceitaDoUsuario from "../../components/CartaoReceitaDoUsuario/CartaoReceitaDoUsuario";
import { DadosUsuario } from "../../AuthContext";
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import showToast from '../../../hooks/toasts';

export default function ReceitasDoUsuario() {

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [dadosReceita, setDadosReceita] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    async function ListarReceitas() {
        const headers = await HeaderRequisicao(navigation);
        const userDataJWT = await DadosUsuario();

        setLoading(true);

        fetch("https://serverproveit.azurewebsites.net/api/receita/usuario/" + userDataJWT.ID, {
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
        ListarReceitas();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao} >
                    <FontAwesomeIcon icon={faChevronLeft} color="#FF7152" size={30} />
                </TouchableOpacity>

                <View style={styles.header}>

                    <Text style={styles.firstText}>Minhas</Text>
                    <Text style={styles.subText}>Receitas</Text>
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
                        <View style={{ display: "flex", alignSelf: "center" }}>
                            <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium' }}>Um momento, estamos buscando!</Text>
                            <ActivityIndicator size="large" color="#FF7152" style={{ marginTop: 10 }} />
                        </View>
                    ) : (
                        <>
                            {dadosReceita.length > 0 ? (
                                <>
                                    {
                                        dadosReceita.map((receita, index) => (
                                            <CartaoReceitaDoUsuario receita={receita} key={index} />
                                        ))
                                    }
                                </>
                            ) : null}
                        </>
                    )}
                    {dadosReceita.length === 0 && !loading && <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium', alignSelf: 'center' }}>Nenhum resultado encontrado.</Text>}

                </View>
            </ScrollView>
            <View style={{ paddingVertical: 40 }} />
        </View>
    )
}