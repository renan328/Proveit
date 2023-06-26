import React from "react";
import { View, Text, StyleSheet, Appearance, useColorScheme } from 'react-native'

export default function PassoReceita({ passoTexto, numPasso }) {

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <View style={styles.container}>
            <Text style={styles.step}>{numPasso}</Text>
            <Text style={styles.text}>{passoTexto}</Text>
        </View>
    );
}

const stylesLight = StyleSheet.create({

    container: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    step: {
        fontFamily: 'Raleway_900Black',
        color: '#505050',
        fontSize: 40,
        marginRight: 15
    },

    text: {
        textAlign: 'left',
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        fontSize: 15
    }


});

const stylesDark = StyleSheet.create({

    container: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    step: {
        fontFamily: 'Raleway_900Black',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 40,
        marginRight: 15
    },

    text: {
        textAlign: 'left',
        fontFamily: 'Raleway_600SemiBold',
        color: '#fff',
        fontSize: 15
    }


});