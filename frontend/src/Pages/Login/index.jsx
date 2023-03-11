import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert } from 'react-native';

export default function Login(){
    return (
        <View>
            <Image></Image>
            <View>
                <Image> </Image>
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