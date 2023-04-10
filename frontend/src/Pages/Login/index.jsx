import React from 'react';
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

const schema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    senha: yup.string().min(8, 'Mínimo de 8 caracteres').required('Campo obrigatório'),
});

const CampoFormulario = ({ control, fieldName, placeholder, secureTextEntry, errors }) => {
    return (
        <View>
            <Controller
                control={control}
                name={fieldName}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[
                            styles.input, {
                                borderWidth: errors[fieldName] && 1,
                                borderColor: errors[fieldName] && '#ff375b'
                            }]}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                    />
                )}
            />
            {errors[fieldName] && <Text style={styles.textError}>{errors[fieldName].message}</Text>}
        </View>
    );
};

export default function Login({ navigation }) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        //resolver: yupResolver(schema)
    })

    function handleSingIn(data) {
        console.log(data);
        navigation.navigate('Main')
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

                        <CampoFormulario control={control} fieldName="email" placeholder="E-mail" errors={errors} />
                        <CampoFormulario control={control} fieldName="senha" placeholder="Senha" secureTextEntry errors={errors} />


                    </View>

                    {/* Botão */}
                    {/* onPress={() => navigation.navigate('Main')} */}
                    <TouchableOpacity onPress={handleSubmit(handleSingIn)}>
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
