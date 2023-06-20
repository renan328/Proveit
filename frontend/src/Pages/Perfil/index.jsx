import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, Alert, TouchableOpacity, Dimension, ActivityIndicator, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import { Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, useFonts } from '@expo-google-fonts/raleway';
import stylesLight from './perfil.module';
import stylesDark from './perfil.moduleDark';
import LottieView from 'lottie-react-native';
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from '../../AuthContext';
import CartaoReceita from '../../components/CartaoReceita/CartaoReceita';
import showToast from '../../../hooks/toasts';

export default function Perfil({ navigation }) {

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;
    const [usuario, setUsuario] = useState();
    const [dadosReceita, setDadosReceita] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [loading, setLoading] = useState(false);

    async function Adicionados() {
        const userDataJWT = await DadosUsuario();
        const headers = await HeaderRequisicao(navigation);

        setLoading(true);

        fetch("https://cloudproveit.azurewebsites.net/api/receita/usuario/" + userDataJWT.ID, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
                setMostrarMensagem(json.length === 0);
                setLoading(false);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar suas receitas, tente novamente mais tarde.', 'error');
                setLoading(false);
            });
    }

    async function BuscarUsuario() {

        const userDataJWT = await DadosUsuario();
        const headers = await HeaderRequisicao(navigation);

        fetch("https://cloudproveit.azurewebsites.net/api/usuario/" + userDataJWT.ID, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setUsuario(json);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar seu perfil, tente novamente mais tarde.', 'error');
            });
    }

    useEffect(() => {
        BuscarUsuario();
    });

    return (
        // Container Geral
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
                    <FontAwesomeIcon icon={faGear} size={32} style={styles.configIcon} />
                </TouchableOpacity>
            </View>
            <View>
                {/* Imagem do Usuário e Dados */}
                <View style={styles.userImage}>
                    <Image source={{ uri: usuario?.foto }} style={styles.imagemUsu} />
                </View>
                <Text style={styles.name}>{usuario?.nome}</Text>
                <Text style={styles.userName}>@{usuario?.nomeTag}</Text>
            </View>
            <TouchableOpacity onPress={Adicionados}>
                <Text style={styles.text}>Adicionados</Text>
            </TouchableOpacity>

            {/* Linha horizontal */}
            <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: 330, height: 5,
                    marginTop: 15
                }}
            />
            <ScrollView style={{ marginLeft: 10 }}>

                {loading ? (
                    <View style={{ display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium' }}>Um momento, estamos buscando!</Text>
                        <ActivityIndicator size="large" color="#FF7152" style={{ marginTop: 10 }} />
                    </View>
                ) : (
                    <>
                        {dadosReceita.length > 0 ? (
                            <>
                                {!mostrarMensagem && (
                                    dadosReceita.map((receita, index) => (
                                        <CartaoReceita receita={receita} key={index} />
                                    ))
                                )}
                            </>
                        ) : null}
                    </>
                )}
            </ScrollView>

            {mostrarMensagem &&
                <Text style={styles.textUnder}>Você ainda não adicionou nehuma receita,
                    <TouchableOpacity onPress={() => navigation.navigate('Adicionar')}>
                        <Text style={{ color: '#FF7152' }}>que tal publicar uma nova?</Text>
                    </TouchableOpacity>
                </Text>}

            {/* <LottieView
                source={require('../../assets/lottie/heart.json')}
                autoPlay
                loop
                style={{ height: 15, alignSelf: 'center' }}
            /> */}
            <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: 330, height: 5,
                    marginTop: 15
                }}
            />
            <View style={{ paddingVertical: 30}} />
        </View>
    );
}
