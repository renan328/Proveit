import React from "react";
import { View, StyleSheet, useColorScheme } from 'react-native';
import { BlurView } from "expo-blur";

export default function CartaoReceitaBlank() {

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <View>
            <View style={styles.caixaPrincipal}>

                <View style={styles.header}>
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

const stylesLight = StyleSheet.create({

    caixaPrincipal: {
        display: 'flex',
        alignItems: 'center',
        margin: 6,
        justifyContent: 'space-between',
        width: 210,
        height: 330,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
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
        height: 111,
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

const stylesDark = StyleSheet.create({

    caixaPrincipal: {
        display: 'flex',
        alignItems: 'center',
        margin: 6,
        justifyContent: 'space-between',
        width: 230,
        height: 350,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.15)'
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
        backgroundColor: 'rgba(0,0,0,0.15)',
        borderRadius: 10,
    },

    containerTexto: {
        width: '100%',
        height: 111,
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
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

});
