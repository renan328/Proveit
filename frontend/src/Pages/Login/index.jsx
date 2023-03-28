import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './login.module';


export default function Login({ navigation }) {
    return (
        <View style={styles.container}>

            {/* Imagem de fundo */}
            <ImageBackground source={require('../../assets/cat_aves.jpg')} style={styles.background}>

                {/* View Principal com gradiente */}
                <View colors={['#FFF', '#FFF']} style={styles.linearGradient}>
                    {/* Logo */}
                    <View style={styles.logo}>
                        <Image
                            style={{ width: '230px', height: '220px' }}
                            source={require('../../assets/PROVEITLOGOdarkbgless.png')}
                        />
                    </View>

                    {/* View Login e inputs */}
                    <View style={styles.containerLogin}>
                        <View style={styles.loginHeader}>
                            <Text style={styles.loginText}>Login</Text>
                        </View>

                        <View style={styles.containerInput}>
                            <TextInput style={styles.input} placeholder='Email ou nome de usuário'></TextInput>
                            <TextInput style={styles.input} placeholder='Senha'></TextInput>
                        </View>

                        {/* Botão */}
                        <TouchableOpacity onPress={() => navigation.navigate('Main')} >
                            <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                                end={{ x: 2, y: 1 }} style={styles.button} >
                                <Text style={styles.buttonText}>Entrar</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.texts}>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Raleway_600SemiBold' }}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Raleway_600SemiBold' }}>Ainda não tem uma conta?</Text>
                        <Text style={{ fontFamily: 'Raleway_700Bold', textDecorationLine: 'underline', color: '#FF7152' }} onPress={() => navigation.navigate('CadastroDeUsuario')}>Cadastrar</Text>
                    </View>

                </View>
            </ImageBackground>
            {/* comentário */}
        </View>
    );
}
