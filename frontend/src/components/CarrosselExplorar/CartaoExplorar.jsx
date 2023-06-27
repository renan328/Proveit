import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CartaoExplorar({ categoriaExplorar }) {
    const navigation = useNavigation();

    const handleCardPress = (nome) => {
        navigation.navigate('Explore', { nomeExplorar: categoriaExplorar?.nomeExplorar });
    };

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;


    return (
        <TouchableOpacity key={categoriaExplorar.id} onPress={() => handleCardPress(categoriaExplorar?.nomeExplorar)}>
            <View style={styles.caixaPrincipal}>
                <View style={styles.imageContainer}>
                    <Image source={categoriaExplorar?.image} style={styles.image} resizeMode='contain' />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titulo}>{categoriaExplorar?.title}</Text>
                </View>
            </View>
        </TouchableOpacity >

    )
}

const stylesLight = StyleSheet.create({

    caixaPrincipal: {
        margin: 20,
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        width: 126,
        height: 116,
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
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },

    imageContainer: {
        flex: 50
    },

    image: {
        width: 130,
        height: 135,
        left: 40,
        margin: 0,
        top: -50,
    },

    textContainer: {
        flex: 50,
        marginLeft: 7,
        top: 10
    },

    titulo: {
        textAlign: 'left',
        fontSize: 15,
        color: '#505050',
        maxWidth: '90%',
        textTransform: 'uppercase',
        fontFamily: 'Raleway_800ExtraBold',
    },

});

const stylesDark = StyleSheet.create({

    caixaPrincipal: {
        margin: 20,
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        width: 126,
        height: 116,
        backgroundColor: '#303030',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },

    imageContainer: {
        flex: 50
    },

    image: {
        width: 130,
        height: 135,
        left: 40,
        margin: 0,
        top: -50,
    },

    textContainer: {
        flex: 50,
        marginLeft: 7,
        top: 10
    },

    titulo: {
        textAlign: 'left',
        fontSize: 15,
        color: '#fff',
        maxWidth: '90%',
        textTransform: 'uppercase',
        fontFamily: 'Raleway_800ExtraBold',
    },

});

