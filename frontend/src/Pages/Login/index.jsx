import React, {useState} from 'react'; 
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert } from 'react-native';
import {RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Login(){

    let [email, setEmail] = useState();
    let [senha, setSenha] = useState();

    const navigation = useNavigation();

    function handleNavigationToRegister(){
        navigation.navigate('Register');
    }

    function goLogin(){
        Alert("Login efetuado com sucesso!");
        navigation.navigate('Home')
    }

    return (
        <View>
            <Image></Image>
            <View>
                <Image></Image>
            </View>
                <View>
                    <Text>Icon</Text>
                    <Text>Login</Text>

                    <TextInput>Email ou nome de usuário</TextInput>
                    <TextInput>Senha</TextInput>

                    <Text>Esqueci minha senha</Text>
                    <Text>Ainda não tem uma conta?</Text> <Text>Cadastrar</Text>
                </View>
        </View>    
)};
const styles = Stylesheet.create({
    main:{

    }

})