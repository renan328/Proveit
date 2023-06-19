import React from "react";
import { View, Text, StyleSheet, Appearance, useColorScheme } from 'react-native'

export default function IngredienteReceita({ ID, nome, quantidade, medida }) {

    const id = { ID };
    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    let texto = '';

    if (medida === '1/2 xícara (chá)' || medida === '1/4 xícara (chá)' || medida === '1/4' || medida === '1/2') {
        texto = `${medida} de ${nome}`
    } else if (medida === 'a gosto'){
        texto = `${nome} ${medida}`
    } else {
        texto = `${quantidade} ${medida} de ${nome}`
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>• {texto}</Text>
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
    text: {
        textAlign: 'left',
        fontFamily: 'Raleway_600SemiBold',
        color: '#fff',
        fontSize: 15
    }


});