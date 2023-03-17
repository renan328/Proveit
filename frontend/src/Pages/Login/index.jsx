import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Toast } from "react-native-toast-message";

export default function Login( {navigation} ) {
    return (
        <View style={styles.container}>

            {/* Imagem de fundo */}
            <ImageBackground source={require('../../assets/cat_aves.jpg')} style={styles.background}>

                {/* View Principal com gradiente */}
                <LinearGradient  colors={['#FF7152', '#FFB649']} style={styles.linearGradient}>
                        {/* Logo */}
                        <View style={styles.logo}>
                            <Image
                                style={{ width: '250px', height: '220px' }}
                                source={require('../../assets/proveitLogo.png')}
                            />
                        </View>

                        {/* View Login e inputs */}
                        <View style={styles.containerLogin}>
                            <Text style={styles.loginText}>Login</Text>

                            <View style={styles.containerInput}>
                                <TextInput style={styles.input} placeholder='Email ou nome de usuário'></TextInput>
                                <TextInput style={styles.input} placeholder='Senha'></TextInput>
                            </View>
                            {/* Botão */}
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
                                <Text style={styles.buttonText}>Entrar</Text>
                            </TouchableOpacity>

                            <View style={styles.texts}>
                                <Text>Esqueci minha senha</Text>
                                <Text>Ainda não tem uma conta?</Text>
                                <Text>Cadastrar</Text>
                            </View>
                        </View>
                    </LinearGradient>
            </ImageBackground>
            {/* comentário */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: '100%',
        height: '100%'
    },
    loginText: {
        color: '#505050',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
        fontFamily: 'Raleway_800ExtraBold'
    },
    background: {
        height: '100%',
    },
    linearGradient: {
        backgroundColor: 'orange',
        width: '100%',
        height: '95%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        shadowRadius: 3
    },
    containerLogin: {
        width: '85%',
        height: '350px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowRadius: 3
    },
    logo: {
        flex: 1,
        width: '100%',
        height: '300px',
        marginTop: '80px',
        flexDirection: 'row',
        textAlign: 'center',
        alignItens: 'center',
        justifyContent: 'center'
    },
    containerInput: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 80,
        position: 'absolute',
        backgroundColor: 'orange',
        color: '#FFF',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
        bottom: '15%'
    },
    buttonText: {
        color: '#FFF'
    }
})