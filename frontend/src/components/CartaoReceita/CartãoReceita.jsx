import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Appearance, useColorScheme } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from "expo-blur";

export default function CartaoReceita({ receita }) {
    const navigation = useNavigation();

    const handleCardPress = (id) => {
        navigation.navigate('ReceitaSingle', { id: receita.receita?.idReceita });
    };

    const stars = receita.mediaEstrelas;
    function StarCounter() {
        const starsBox = [];
        for (let index = 0; index < stars; index++) {
            starsBox.push(
                <View key={index}>
                    <FontAwesomeIcon style={styles.star} icon={faStar} size={15} color={'#FF7152'} />
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
        <TouchableOpacity key={receita.id} onPress={() => handleCardPress(receita.id)}>
            <ImageBackground source={{ uri: !receita.receita?.foto ?  '../../assets/proveitLogo.png' : receita.receita?.foto}} imageStyle={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32, borderTopLeftRadius: 32, borderTopRightRadius: 32, }} style={styles.caixaPrincipal}>

                <View style={styles.header}>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faBookmark} size={20} style={styles.bookmarkIcon} />
                    </TouchableOpacity>
                </View>

                {/* Container de imagem e texto */}
                <View style={styles.containerTexto} >
                    <View style={styles.containerTextoWhite}>
                        {StarCounter()}
                        <Text style={styles.titulo}>{receita.receita?.nomeReceita}</Text>
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
        width: 230,
        height: 350,
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
    },

    header: {
        padding: 7,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    bookmarkIcon: {
        padding: 8,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 10,
        color: '#505050',
    },

    timeBadge: {

    },

    containerTexto: {
        width: '100%',
        height: 111,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        border: 0,
        alignSelf: 'baseline',
    },

    containerTextoWhite: {
        border: 0,
        flexWrap: 'wrap',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: 8,
        backgroundColor: 'rgba(255,255,255,0.90)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignSelf: 'baseline',

    },

    titulo: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        fontSize: 16,
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
        width: 230,
        height: 350,
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
    },

    header: {
        padding: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    bookmarkIcon: {
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 13,
        color: '#fff',

    },
    
    containerTexto: {
        width: '100%',
        height: 111,
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
        fontSize: 17,
        marginVertical: 7,
        fontFamily: 'Raleway_700Bold',
        textAlign: 'left',
        color: '#fff',
        textTransform: 'capitalize'
    },


});
