import React, { useState } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, useFonts } from '@expo-google-fonts/raleway';

import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import { width } from "@fortawesome/free-solid-svg-icons/faUser";




export default function CartaoFavorito({ titulo, text, stars }) {

    const truncatedTitulo = titulo.length > 35 ? `${titulo.slice(0, 35)}...` : titulo;
    const truncatedText = text.length > 55 ? `${text.slice(0, 55)}...` : text;


    const [saved, setSaved] = useState(false);




    const addSave = () => {

        setSaved(!saved);

    };


    function StarCounter() {




        const starsBox = [];




        for (let index = 0; index < stars; index++) {

            starsBox.push(

                <View key={index}>

                    <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>

                </View>

            );

        }




        return (

            <View style={styles.starsBox}>{starsBox}</View>

        );

    };




    return (

        <View style={styles.card}>

            <View style={styles.cardContent}>

                <View style={styles.header}>

                    <View style={styles.titleContainer}>

                        <Text style={styles.titulo}>{truncatedTitulo}</Text>

                    </View>

                    <TouchableOpacity onPress={() => addSave()}>

                        <FontAwesomeIcon icon={faBookmark} size={35} color={saved ? '#FF7152' : '#505050'} />

                    </TouchableOpacity>

                </View>

                <View>
                    <Text style={styles.text} verticalAlign={'top'}>{truncatedText}</Text>
                </View>

                <View style={styles.footer}>
                    <StarCounter style={styles.starsBox}></StarCounter>
                </View>


            </View>

            <View style={styles.imageContainer}>

                <Image source={require('../../assets/cat_salgados.jpg')} style={styles.image} />

            </View>

        </View>

    );

};




const styles = StyleSheet.create({

    card: {

        backgroundColor: '#fff',

        borderRadius: 8,

        shadowColor: '#000',

        shadowOffset: { width: 2, height: 2 },

        shadowOpacity: 0.3,

        shadowRadius: 4,

        width: '92%',

        minHeight: 125,

        maxHeight: 200,

        marginTop: 29,

        flexDirection: 'row',

        display: 'flex',

        flexGrow: 1,

        flexShrink: 1,
    },

    cardContent: {

        display: 'flex',

        marginHorizontal: 10,

        flexDirection: 'column',

        justifyContent: 'space-between',

        width: '50%',

        flexGrow: 1,

        paddingBottom: 10,

    },


    header: {

        flexDirection: 'row',

        justifyContent: 'space-between',

        marginBottom: 12,

    },

    imageContainer: {

        flex: 50,

        height: '100%',

    },

    titleContainer: {

        flex: 80,

    },

    titulo: {

        fontFamily: 'Raleway_700Bold',

        color: '#505050',

        marginTop: 10,

        fontSize: 17,

    },

    text: {

        width: '100%',

        fontsize: 8,

        color: '#505050',

        fontWeight: 300,

        display: 'flex',

    },

    image: {

        width: '100%',

        height: '100%',

        display: 'flex',

        borderTopRightRadius: 8,

        borderBottomEndRadius: 8,


    },

    footer: {

        display: 'flex',

        height: '20%',

        alignItems: 'flex-start',

    },

    starsBox: {

        flexDirection: "row",

    }

})