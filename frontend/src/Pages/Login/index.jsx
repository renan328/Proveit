import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './login.module';

const screenHeight = Dimensions.get('window').height;

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errors, setErrors] = useState({});

    function handleSingIn() {
        const errors = {};

        if (!email.trim()) {
            errors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email inválido";
        }
        if (!senha) {
            errors.senha = "Senha é obrigatória";
        } else if (senha.length < 6) {
            errors.senha = "Senha deve ter pelo menos 6 caracteres";
        }
        setErrors(errors);

        const body = { email, senha };

        if (Object.keys(errors).length === 0) {

            console.log(body)
            navigation.navigate('Main')

        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground source={require('../../assets/headerBG.jpg')} style={{ height: screenHeight * 0.5 }} />
            </View>

            <View style={styles.main}>

                {/* Logo */}
                <View style={styles.logo}>
                    <Image
                        style={{ width: '230px', height: '220px' }}
                        source={require('../../assets/PROVEITLOGObgless.png')}
                    />
                </View>

                {/* View Login e inputs */}
                <View style={styles.containerLogin}>
                    <View style={styles.loginHeader}>
                        <Text style={styles.loginText}>Login</Text>
                    </View>

                    <View style={styles.containerInput}>

                        <View style={styles.inputSingle}>
                            <TextInput
                                style={[styles.input, errors.email && styles.inputError]}
                                placeholder="E-mail"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            {errors.email && <Text style={styles.textError}>{errors.email}</Text>}
                        </View>


                        <View style={styles.inputSingle}>
                            <TextInput
                                style={[styles.input, errors.senha && styles.inputError]}
                                placeholder="Senha"
                                value={senha}
                                onChangeText={(text) => setSenha(text)}
                                secureTextEntry={true}
                            />
                            {errors.senha && <Text style={styles.textError}>{errors.senha}</Text>}
                        </View>

                    </View>

                    {/* Botão */}
                    {/* onPress={() => navigation.navigate('Main')} */}
                    <TouchableOpacity onPress={handleSingIn}>
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
        </View>

    )
}
