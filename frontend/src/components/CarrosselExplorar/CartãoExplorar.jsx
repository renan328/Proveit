import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from "expo-blur";

export default function CartaoExplorar({ title, image  }) {

    return (
            <TouchableOpacity>
                <View style={styles.caixaPrincipal}>
                    <View style={styles.imageContainer}>
                        <Image source={image} style={styles.image} resizeMode='contain' />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titulo}>{title}</Text>
                    </View>
                </View>
            </TouchableOpacity >

    )
}

const styles = StyleSheet.create({

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
