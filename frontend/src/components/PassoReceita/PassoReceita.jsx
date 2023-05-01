import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function PassoReceita({ passoTexto, numPasso }) {

    return (
        <View style={styles.container}>
            <Text style={styles.step}>{numPasso}</Text>
            <Text style={styles.text}>{passoTexto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    step: {
        fontFamily: 'Raleway_900Black',
        color: '#505050',
        fontSize: 40,
        marginRight: 15
    },

    text: {
        textAlign: 'justify',
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        fontSize: 15
    }


});