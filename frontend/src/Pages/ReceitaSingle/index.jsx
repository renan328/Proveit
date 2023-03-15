import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
    return (
        <View style={styles.container}>

            {/* Imagem de fundo */}
            <ImageBackground source={require('../../assets/cat_aves.jpg')} style={styles.background}>

                {/* View Principal com gradiente */}
                <LinearGradient colors={['#FF7152', '#FFB649']} style={styles.linearGradient}>
                    {/* Logo */}
                    <View style={styles.logo}>
                        <Image
                            style={{ width: 100, height: 250 }}
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
                        <TouchableOpacity style={styles.button}>
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

    background: {
        height: '100%'
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
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowRadius: 3
    },


    logo: {
        flex: 1,
        width: '100%',
        marginTop: '80px',
        flexDirection: 'row',
        textAlign: 'center',
        alignItens: 'center',
        justifyContent: 'center'
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

    loginText: {
        backgroundColor: '#777',
        color: '#000',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },

    containerInput: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
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