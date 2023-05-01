import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from "expo-blur";

export default function CartaoReceita({ receita }) {
    const navigation = useNavigation();

    const handleCardPress = (id) => {
        navigation.navigate('ReceitaSingle', { id: receita.idReceita });
    };

    const stars = receita.mediaEstrelas;

    function StarCounter() {

        const starsBox = [];

        for (let index = 0; index < stars; index++) {
            starsBox.push(
                <View key={index}>
                    <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} />
                </View>
            );
        }
    }

    return (
        <TouchableOpacity key={receita.id} onPress={() => handleCardPress(receita.id)}>
            <ImageBackground source={{ uri: receita.foto }} imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, }} style={styles.caixaPrincipal}>

                <View style={styles.header}>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faBookmark} size={20} color="#505050" style={styles.bookmarkIcon} />
                    </TouchableOpacity>
                </View>

                {/* Container de imagem e texto */}
                <BlurView style={styles.containerTexto} intensity={14}>
                    <View style={styles.containerTextoWhite}>
                        {StarCounter()}
                        <Text style={styles.titulo}>{receita.nomeReceita}</Text>
                    </View>
                </BlurView>

            </ImageBackground>
        </TouchableOpacity >

    )
}

const styles = StyleSheet.create({

    caixaPrincipal: {
        display: 'flex',
        alignItems: 'center',
        margin: 6,
        justifyContent: 'space-between',
        width: 175,
        height: 240,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
    },

    containerTexto: {
        width: '100%',
        height: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    containerTextoWhite: {
        flexWrap: 'wrap',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingHorizontal: 8,
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    titulo: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        fontSize: 13,
        marginBottom: 3,
        fontFamily: 'Raleway_700Bold',
        textAlign: 'left',
        color: '#505050',
        textTransform: 'capitalize'
    },


});
