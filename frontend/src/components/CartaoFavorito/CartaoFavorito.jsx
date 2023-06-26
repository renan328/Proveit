import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Appearance, useColorScheme } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faSeedling, faClock } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from "expo-blur";

export default function CartaoReceita({ dadosReceita }) {
    const navigation = useNavigation();

    const handleCardPress = (id) => {
        navigation.navigate('ReceitaSingle', { id: dadosReceita?.receita.idReceita });
    };

    const stars = dadosReceita.mediaEstrelas;
    function StarCounter() {
        const starsBox = [];
        for (let index = 0; index < stars; index++) {
            starsBox.push(
                <View key={index}>
                    <FontAwesomeIcon style={styles.star} icon={faStar} size={10} color={'#FF7152'} />
                </View>
            );
        }
        return (
            <View style={{ display: 'flex', flexDirection: 'row', marginStart: 5, marginTop: 5, }}>{starsBox}</View>
        )
    }

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <TouchableOpacity onPress={handleCardPress}>
            <ImageBackground source={{ uri: dadosReceita?.receita.foto }} imageStyle={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32, borderTopLeftRadius: 32, borderTopRightRadius: 32, }} style={styles.caixaPrincipal}>

                <View style={styles.header}>
                    {
                        dadosReceita.receita?.aproveitamento == true &&
                        <View style={styles.AproveitamentoTrue}>
                            <FontAwesomeIcon icon={faSeedling} size={18} color="#FFF" />
                        </View>
                    }
                </View>

                {/* Container de imagem e texto */}

                <View style={styles.containerTexto} >
                    <View style={styles.containerTextoWhite}>
                        {StarCounter()}
                        <View style={{ width: '100%', alignSelf: 'center' }}>
                            <Text style={styles.titulo}>{dadosReceita?.receita.nomeReceita}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity >
    )
}

const stylesLight = StyleSheet.create({

    caixaPrincipal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 6,
        width: 160,
        height: 210,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 4,
    },

    header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    AproveitamentoTrue: {
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: '#52FF6E',
        paddingHorizontal: 25,
        paddingVertical: 5,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    containerTexto: {
        width: '100%',
        height: 78,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        border: 0,
    },

    containerTextoWhite: {
        flexWrap: 'wrap',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },

    titulo: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        fontSize: 13,
        marginVertical: 10,
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        color: '#505050',
        textTransform: 'capitalize'
    },


});

const stylesDark = StyleSheet.create({

    caixaPrincipal: {
        display: 'flex',
        alignItems: 'center',
        margin: 6,
        justifyContent: 'space-between',
        width: 160,
        height: 210,
        backgroundColor: '#303030',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 4,
    },

    header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    AproveitamentoTrue: {
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: '#52FF6E',
        paddingHorizontal: 22,
        paddingVertical: 3,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    containerTexto: {
        width: '100%',
        height: 78,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    },

    containerTextoWhite: {
        flexWrap: 'wrap',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'rgba(20,20,20,0.8)',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    titulo: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        fontSize: 13,
        marginVertical: 10,
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        color: '#FFF',
        textTransform: 'capitalize'
    },


});

