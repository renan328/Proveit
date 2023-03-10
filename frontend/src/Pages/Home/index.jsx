import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Raleway_100Thin, Raleway_500Medium, Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import CarrosselCategorias from '../../components/CartaoCategoria/CartaoCategoria';
import CartaoReceita from '../../components/CartaoReceita/CartaoReceita';


export default function Home() {

    const username = "Convidado";
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <LinearGradient colors={['#FF7152', '#FFB649']} style={[styles.header, styles.shadowProp]}>
                    <View>
                        <Image
                            style={{ width: 100, height: 70 }}
                            source={require('../../assets/proveitLogo.png')}
                        />
                    </View>
                    <View>
                        <Text style={styles.TextoSecundario}>Bem-vindo(a)</Text>
                        <Text style={styles.Text}>{username}</Text>
                    </View>
                    <CarrosselCategorias></CarrosselCategorias>
                </LinearGradient>
            </View>
            <View style={styles.listamento}>
                <Text style={styles.categoria}>O que há de novo?</Text>
            </View>
            <View style ={{display: 'flex', flexDirection: 'row'}}>
                <CartaoReceita></CartaoReceita>
                <CartaoReceita></CartaoReceita>
                <CartaoReceita></CartaoReceita>
                <CartaoReceita></CartaoReceita>
                <CartaoReceita></CartaoReceita>
                <CartaoReceita></CartaoReceita>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        fontFamily: 'Raleway_700Bold',
        backgroundColor: '#fff',
        alignSelf: 'stretch'
    },
    Text: {
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 700,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },

    TextoSecundario: {
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.8)',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: 432,
        left: 0,
        top: 0,
        borderBottomLeftRadius: 65,
        borderBottomRightRadius: 65,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        // backgroundColor: linear-gradient(180deg, #FF7152 23.3%, #FFB649 100%)
    },

    shadowProp: {
        paddingTop: '20px',
        paddingBottom: '30px',
        shadowOffset: { largura: 100, altura: 100 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    listamento: {
        textAlign: 'center',
        margin: '40px',
    },

    categoria: {
        fontWeight: '700',
        fontSize: '20px',
        color: '#505050',
    },

    logoMini: {
        height: '70px',
        backgroundColor: 'red'
    }
});
