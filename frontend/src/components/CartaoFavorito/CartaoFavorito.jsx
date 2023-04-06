import React, { useState } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, useFonts } from '@expo-google-fonts/raleway';

import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';




export default function CartaoFavorito({ titulo, text, buttonText }) {



    const [saved, setSaved] = useState(false);




    const addSave = () => {

        setSaved(!saved);

    };




    const stars = 5;




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

                <View style={styles.contentContainer}>

                    <View style={styles.header}>

                        <Text style={styles.titulo}>{titulo}</Text>

                        <TouchableOpacity onPress={() => addSave()}>

                            <FontAwesomeIcon icon={faBookmark} style={styles.markIcon} size={35} color={saved ? '#FF7152' : '#505050'} verticalAlign={'top'} />

                        </TouchableOpacity>

                    </View>

                    <Text style={styles.text}>{text} uyguigiu</Text>

                    <StarCounter style={styles.starsBox}></StarCounter>

                </View>

                <View style={styles.imageContainer}>

                    <Image source={require('/workspaces/ProveIt/frontend/src/assets/cat_salgados.jpg')} style={styles.image} />

                </View>

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

        height: '125px',

        marginTop: '29px',

        overflow: '',

    },

    cardContent: {

        flexDirection: 'row',

        display: 'flex',

    },

    contentContainer: {

        height: '100%',

        flex: 50,

    },

    header: {

        display: 'flex',

        flexDirection: 'row',

        justifyContent: 'space-between',

        margin: '5px',

        height: '100%',

    },

    imageContainer: {

        flex: 50,

        height: '100%',

    },

    titulo: {

        fontSize: 20,

        fontFamily: 'Raleway_700Bold',

        color: '#505050',



    },

    text: {

        flexWrap: 'wrap',

        flexGrow: 1,

        alignItems: 'start',

        fontsize: '8px',

        lineheight: '9px',

        color: '#505050',

        fontWeight: '300',

        display: 'flex',

    },

    image: {

        width: '100%',

        height: '100%',

        display: 'flex',

        borderTopRightRadius: 8,

        borderBottomEndRadius: 8,


    },

    starsBox: {

        display: 'flex',

        flexDirection: 'row',

        alignContent: 'flex-start'

    }

})