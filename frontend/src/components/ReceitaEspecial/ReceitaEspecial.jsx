import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, useColorScheme, Appearance } from 'react-native';
import LottieView from 'lottie-react-native';
import { faUtensils, faStar, faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';

function ReceitaEspecial() {
    const navigation = useNavigation();

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [dadosReceita, setDadosReceita] = useState([]);

    const handleCardPress = (id) => {
        navigation.navigate('ReceitaSingle', { id: dadosReceita?.receita.idReceita });
    };

    async function BuscarReceita() {
        const headers = await HeaderRequisicao(navigation);

        fetch("https://serverproveit.azurewebsites.net/api/receita/proveit/34", {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar a receita, tente novamente mais tarde.', 'error');
            })
    }

    useEffect(() => {
        BuscarReceita();
    }, []);

    return (
        <TouchableOpacity onPress={handleCardPress}>
            <ImageBackground style={styles.containerReceita}
                source={{ uri: dadosReceita.receita?.foto }} imageStyle={{ borderRadius: 25 }}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.tituloReceita}>{dadosReceita.receita?.nomeReceita}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity >
    )

}

export default ReceitaEspecial;

const stylesLight = StyleSheet.create({



    containerReceita: {
        minWidth: '90%',
        maxWidth: '90%',
        height: 200,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 4,
        alignSelf: 'center'

    },

    containerTitulo: {
        width: '45%',
        fontFamily: 'Raleway_700Bold',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.90)',
        borderRadius: 12
    },

    tituloReceita: {
        textAlign: 'right',
        fontFamily: 'Raleway_700Bold',
        fontSize: 20,
        color: '#3a3a3a',
    },

    imagemReceita: {}

});


const stylesDark = StyleSheet.create({



    containerReceita: {
        minWidth: '90%',
        maxWidth: '90%',
        height: 200,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 4,
        alignSelf: 'center'

    },

    containerTitulo: {
        width: '45%',
        fontFamily: 'Raleway_700Bold',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'rgba(20,20,20,0.95)',
        borderRadius: 12
    },

    tituloReceita: {
        textAlign: 'right',
        fontFamily: 'Raleway_700Bold',
        fontSize: 20,
        color: '#fff',
    },

    imagemReceita: {}

});