import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Image, useColorScheme, TouchableOpacity, ActivityIndicator } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import stylesLight from "./pesquisa.module";
import stylesDark from "./pesquisa.moduleDark";
import CartaoFavorito from "../../components/CartaoFavorito/CartaoFavorito";
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import showToast from '../../../hooks/toasts';

export default function Pesquisar() {
    const navigation = useNavigation();

    const [dadosReceita, setDadosReceita] = useState([]);
    const [textoPesquisa, setTextoPesquisa] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    async function Pesquisar() {
        const errors = {};
        setLoading(true);

        if (!textoPesquisa.trim()) {
            errors.textoPesquisa = "Preencha o campo corretamente"
        }
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            setLoading(false); // Define o estado de carregamento como falso
            return;
        }

        const headers = await HeaderRequisicao(navigation);

        fetch("https://serverproveit.azurewebsites.net/api/Receita/pesquisa/" + textoPesquisa, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
                setLoading(false);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar receitas, tente novamente mais tarde.', 'error');
                setLoading(false);
            });
    }


    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight

    let inputStyle = [styles.input];
    if (scheme === 'dark') {
        inputStyle.push(styles.inputDark);
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.subText}>Buscar <Text style={[styles.subText, { color: scheme === 'dark' ? '#fff' : '#505050' }]}>por</Text></Text>

                    <View style={styles.ScreenSelect}>
                        <TouchableOpacity>
                            <Text style={{ color: '#FF7152', fontFamily: 'Raleway_700Bold' }}>Receitas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('PesquisaPorIngrediente')}>
                            <Text style={{ color: '#505050', fontFamily: 'Raleway_700Bold' }}>Ingredientes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input, errors.textoPesquisa && styles.inputError]}
                            placeholder='Qual é a sua fome?'
                            placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                            value={textoPesquisa}
                            onChangeText={(texto) => setTextoPesquisa(texto)}
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{
                            color: '#505050'
                        }} size={20} />
                    </View>
                    {errors.textoPesquisa && <Text style={styles.textError}>{errors.textoPesquisa}</Text>}
                    <View
                        style={{
                            borderBottomColor: '#505050',
                            opacity: 0.4,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: 330, height: 5,
                            marginTop: 15
                        }}
                    />
                </View>
            </View>
            <View style={styles.botoes}>
                <TouchableOpacity onPress={Pesquisar} >
                    <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 2 }} style={styles.button} >
                        <Text style={styles.buttonText}>Pesquisar</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.CardsList}>

                {loading ? (
                    <View style={{ display: "flex", alignSelf: "center" }}>
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
                                {/* <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium' }}>Resultados:</Text> */}
                                {
                                    dadosReceita.map((receita, index) => (
                                        <CartaoFavorito dadosReceita={receita} key={index} />
                                    ))
                                }
                            </>
                        ) : null}
                    </>
                )}
                {dadosReceita.length === 0 && !loading && <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium', alignSelf: 'center' }}>Nenhum resultado encontrado.</Text>}
            </View>
            <View style={{ paddingVertical: 50 }} />

        </ScrollView>

    );

}
