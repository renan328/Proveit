import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function PassoReceita( {step, text} ) {
   
    return(
        <View style={styles.container}>
            <Text style={styles.step}>{step}</Text>
            <Text style={styles.text}>{text}</Text>
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
        justifyContent: 'center'
    },

    step: {
        fontFamily: 'Raleway_900Black',
        color: '#505050',
        fontSize: '40px',
        marginRight: '15px'
    },
    
    text: {
        textAlign: 'justify',
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        fontSize: '15px'
    }    


});