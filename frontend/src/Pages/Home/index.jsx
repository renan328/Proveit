import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home() {
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <LinearGradient colors={['#FF7152', '#FFB649']} style={[styles.header, styles.shadowProp]}>
                    <Text style={styles.Text}>Bem-vindo(a), Usuário</Text>
                </LinearGradient>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff'

    },
    Text: {
        textAlign: 'center',
        width: 328,
        marginTop: 150,
        fontSize: 36,
        fontWeight: 700,
        color: '#fff',
    },
    header: {
        position: 'absolute',
        width: 360,
        height: 432,
        left: 0,
        top: 0,
        // borderRadius: '0, 0, 60, 60'
        // backgroundColor: linear-gradient(180deg, #FF7152 23.3%, #FFB649 100%)
    },

    shadowProp: {  
        shadowOffset: {largura: 100 , altura:  100 },  
        shadowColor:  'rgba(0, 0, 0, 0.25)' ,  
        shadowOpacity:  0.2 ,  
        shadowRadius:  3 ,  
      }, 
});
