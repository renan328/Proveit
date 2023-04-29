import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function IngredienteReceita({ ID, nome, quantidade, medida }) {

    const id = { ID };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>• {quantidade}</Text>
            <Text style={styles.text}> {medida} de </Text>
            <Text style={styles.text}>{nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '10px',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        textAlign: 'left',
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        fontSize: '15px'
    }


});