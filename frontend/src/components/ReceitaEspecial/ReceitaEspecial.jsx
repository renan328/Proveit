import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, useColorScheme, Appearance } from 'react-native';
import LottieView from 'lottie-react-native';
import { faUtensils, faStar, faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function ReceitaEspecial() {

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;
    return (
        <TouchableOpacity>
            <ImageBackground style={styles.containerReceita}
                source={require('../../assets/xeggGourmet.jpg')} imageStyle={{ borderRadius: 25 }}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.tituloReceita}>X-Egg gourmet (não, essa receita não existe).</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
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