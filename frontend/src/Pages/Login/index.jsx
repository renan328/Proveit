import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity, Dimensions, useColorScheme, Appearance } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, width } from '@fortawesome/free-solid-svg-icons/faUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import stylesLight from './login.module';
import stylesDark from './login.moduleDark';
import { BlurView } from 'expo-blur';

const screenHeight = Dimensions.get('window').height;

export default function Login({ navigation }) {

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight

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
        } else if (senha.length < 8) {
            errors.senha = "Senha deve ter pelo menos 8 caracteres";
        }
        setErrors(errors);

        const body = { email, senha };

        if (Object.keys(errors).length === 0) {

        }
        console.log(body)
        navigation.navigate('Main')
    }

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
                        <TouchableOpacity onPress={() => navigation.navigate("EsqueciMinhaSenhaStack")}>
                            <Text style={{ fontFamily: 'Raleway_500Medium', color: 'rgba(255,255,255,0.55)', textDecorationLine: 'underline', marginLeft: 6 }}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                    </View>
                    <ImageBackground source={require('../../assets/bemVindo.png')} style={styles.buttons}>
                        {/* Botão */}
                        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
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
        </ImageBackground >

    )
}
