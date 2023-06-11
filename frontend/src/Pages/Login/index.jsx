import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity, Dimensions, useColorScheme, Appearance } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, width } from '@fortawesome/free-solid-svg-icons/faUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import stylesLight from './login.module';
import stylesDark from './login.moduleDark';
import { BlurView } from 'expo-blur';
import '../../AuthContext';
import jwtDecode from "jwt-decode";
import { ChecarLoginUsuario, SalvarJWT } from "../../AuthContext";
import showToast from '../../../hooks/toasts';
import axios from 'axios';

const screenHeight = Dimensions.get('window').height;

export default function Login({ navigation }) {

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errors, setErrors] = useState({});

    async function verificarLogin() {
        // debugger;
        const usuarioLogado = await ChecarLoginUsuario();
        console.log(usuarioLogado);
        if (usuarioLogado) {
            navigation.navigate("Main");
        }
    };

    async function Login() {
        const errors = {};

        if (!email.trim()) {
            errors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            // errors.email = "Email inválido";
        }
        if (!senha) {
            errors.senha = "Senha é obrigatória";
        } else if (senha.length < 8) {
            // errors.senha = "Senha deve ter pelo menos 8 caracteres";
        }
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        const formData = new URLSearchParams();
        formData.append('email', email);
        formData.append('senha', senha);

        axios.post("https://cloudproveit.azurewebsites.net/api/auth/login", formData.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((response) => {
                // debugger;
                SalvarJWT(response.data.token);
            })
            .then(() => navigation.navigate("Main"))
            .then(() => {
                alert("Login Efetuado com sucesso!")
            })
            .catch((err) => {
                console.log(err);
                showToast('Foi mal!', 'Erro ao fazer login, tente novamente mais tarde.', 'error');
            })

    }

    let inputStyle = [styles.input];
    if (scheme === 'dark') {
        inputStyle.push(styles.inputDark);
    }

    useEffect(() => {
        verificarLogin();
    });

    return (
        <ImageBackground source={scheme == 'dark' ? require('../../assets/headerBG.jpg') : require('../../assets/headerBGLight.jpg')} style={styles.container} resizeMode='cover' >

            <BlurView style={styles.main} intensity={80}>
                <View style={styles.tint}>

                    <Image source={scheme == 'dark' ? require('../../assets/proveitWhiteFade.png') : require('../../assets/proveitGrey.png')} style={styles.logo} />

                    <Image source={scheme == 'dark' ? require('../../assets/sabores.png') : require('../../assets/saboresLight.png')} style={styles.saboresImg} />

                    <View style={styles.containerInput}>

                        <View style={styles.inputSingle}>
                            <TextInput
                                style={[styles.input, errors.email && styles.inputError]}
                                placeholder="E-mail"
                                placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                                keyboardType="email-address"
                                value={email}
                                onChangeText={(texto) => setEmail(texto)}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            {errors.email && <Text style={styles.textError}>{errors.email}</Text>}
                        </View>


                        <View style={styles.inputSingle}>
                            <TextInput
                                style={[styles.input, errors.senha && styles.inputError]}
                                placeholder="Senha"
                                placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                                value={senha}
                                onChangeText={(text) => setSenha(text)}
                                secureTextEntry={true}
                            />
                            {errors.senha && <Text style={styles.textError}>{errors.senha}</Text>}
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("EsqueciMinhaSenhaStack")}>
                            <Text style={{ fontFamily: 'Raleway_600SemiBold', color: '#505050', textDecorationLine: 'underline', alignSelf: 'center' }}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                    </View>
                    <ImageBackground source={require('../../assets/bemVindo.png')} style={styles.buttons}>
                        {/* Botão */}
                        <TouchableOpacity onPress={Login}>
                            <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                                end={{ x: 2, y: 1 }} style={styles.button} >
                                <Text style={styles.buttonText}>Entrar</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <Text style={styles.ou}>OU</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.googleButton}>
                            <Image source={require('../../assets/googleIcon.png')} style={{ width: 27, height: 27 }} /><Text style={styles.googleButtonText}>Entrar com Google</Text>
                        </TouchableOpacity>

                        <Text style={styles.headerSignText}>Ainda não tem uma conta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("CadastroDeUsuario")} style={styles.signUpButton}>
                            <Text style={{ fontFamily: 'Raleway_700Bold', color: '#FF7152' }}>Cadastrar</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </BlurView >
            <View style={{ paddingVertical: 30 }} />
        </ImageBackground >
    )
}
