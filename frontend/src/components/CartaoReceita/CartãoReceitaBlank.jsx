import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { BlurView } from "expo-blur";

export default function CartaoReceitaBlank() {

    return (
        <View>
            <View style={styles.caixaPrincipal}>

                <View style={styles.header}>
                    <FontAwesomeIcon icon={faBookmark} size={20} color="rgba(0,0,0,0.1)" style={styles.bookmarkIcon} />
                </View>

                {/* Container de imagem e texto */}
                <BlurView style={styles.containerTexto} intensity={14}>
                    <View style={styles.containerTextoWhite}>
                    </View>
                </BlurView>

            </View>
        </View >

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

        backgroundColor: 'rgba(0,0,0,0.1)'
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

});
