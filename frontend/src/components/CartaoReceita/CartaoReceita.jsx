import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const tituloReceita = props => {

    return (
        <Text style={styles.titulo}>{props.name}</Text>
    );
};

function CartaoReceita() {
    return (
        <View style={styles.caixaPrincipal}>
            <Image style={styles.imgReceita} source={require('../../assets/cat_aves.jpg')} />
            <tituloReceita style = {styles.titulo} name="Aves" />
        </View>
    );
};

export default CartaoReceita;

const styles = StyleSheet.create({

    caixaPrincipal: {
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: '6px',
        width: '131.15px',
        height: '171px',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.29,
        shadowRadius: 2,
    },

    imgReceita: {
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        height: '62%',
        width: '100%',
        marginBottom: '2px'
    },

    titulo: {
        fontSize: '12',
        fontWeight: '700'
    }


});