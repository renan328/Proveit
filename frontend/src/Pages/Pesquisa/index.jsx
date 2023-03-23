import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Pesquisar() {
    return (
        <View style={styles.header}>
            <View style={styles.textContainer}>
                <Text style={styles.subText}>Buscar</Text>
                <TextInput style={styles.input} placeholder='Email ou nome de usuário'></TextInput>
                <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: '330px', height: '5px',
                    marginTop: '15px'
                }}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textContainer: {
        marginTop: '20px',
        textAlign: 'center',
    },  

    subText: { 
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        fontSize: 40
    },

    input: {
        marginVertical: '5px',
        marginHorizontal: '5px',
        paddingHorizontal: '7px',
        fontSize: '13px',
        fontFamily: 'Raleway_700Bold',
        color: '#505050',
        height: '45px',
        minWidth: '265px',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

});
