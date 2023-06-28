import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TextInput, Alert, TouchableOpacity, Dimensions, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import stylesLight from './login.module';
import stylesDark from './login.moduleDark';
import { BlurView } from 'expo-blur';
import '../../AuthContext';
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
            errors.email = "Email inválido";
        }
        if (!senha) {
            errors.senha = "Senha é obrigatória";
        } else if (senha.length < 6) {
            errors.senha = "Senha deve ter pelo menos 6 caracteres";
        }
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        const formData = new URLSearchParams();
        formData.append('email', email);
        formData.append('senha', senha);

        axios.post("https://serverproveit.azurewebsites.net/api/Auth/Login", formData.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((response) => {
                SalvarJWT(response.data.token);
            })
            .then(() => navigation.navigate("Main"))
            .then(() => {
                showToast('Sucesso!', 'Login efetuado com sucesso! Aproveite o app!', 'success');
            })
            .catch((error) => {
                console.log(error);
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
        <ImageBackground source={scheme == 'dark' ? require('../../assets/headerBGsided.jpg') : require('../../assets/headerBGLight.jpg')} style={styles.container} resizeMode='cover' >
            <BlurView style={styles.main} intensity={90}>
                <View style={styles.tint}>

                    <Image source={scheme == 'dark' ? require('../../assets/proveitWhiteFade.png') : require('../../assets/proveitGrey.png')} style={styles.logo} />

                    <Image source={scheme == 'dark' ? require('../../assets/sabores.png') : require('../../assets/saboresLight.png')} style={styles.saboresImg} />

                    <View style={styles.containerInput}>
                        <View>
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

                        <View>
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

                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("EsqueciMinhaSenhaSimple")} style={{ marginVertical: 5 }}>
                        <Text style={{ fontFamily: 'Raleway_600SemiBold', color: '#505050', textDecorationLine: 'underline', alignSelf: 'center', }}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Login}>
                        <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                            end={{ x: 2, y: 1 }} style={styles.button} >
                            <Text style={styles.buttonText}>Entrar</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <ImageBackground source={require('../../assets/bemVindo.png')} style={styles.buttons}>
                        <Text style={styles.headerSignText}>Ainda não tem uma conta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("CadastroDeUsuario")} style={styles.signUpButton}>
                            <Text style={{ fontFamily: 'Raleway_700Bold', color: '#FF7152' }}>Cadastrar</Text>
                        </TouchableOpacity>

                        <View style={styles.footer}>
                            <Text style={styles.textBy}>By</Text>
                            <View style={{width: '100%', alignItems: 'center'}}>
                                <Image source={require('../../assets/devlare.png')} style={styles.logoDevlare} />
                            </View>
                            <View style={styles.footerContent}>
                                <Text style={styles.textBeta}>Beta 0.8</Text>
                                <Text style={styles.textPronuncia}>*Sim, se pronuncia <Text style={{ fontSize: 14, color: scheme === 'dark' ? '#rgba(255, 255, 255, 0.8)' : '#303030' }}>Provêit!</Text></Text>
                            </View>
                        </View>

                    </ImageBackground>

                </View>


            </BlurView>
        </ImageBackground>
    )
}
