import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Favoritos() {
    return (
        <View style={styles.header}>
            <View style={styles.textContainer}>
                <Text style={styles.firstText}>Meus</Text>
                <Text style={styles.subText}>Favoritos</Text>
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

    firstText: {
        fontFamily: 'Raleway_700Bold',
        color: '#505050',
        fontSize: 20
    },

    subText: { 
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        fontSize: 40
    },

});
