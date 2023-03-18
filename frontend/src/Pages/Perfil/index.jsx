import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Perfil( { navigation } ) {
    return (
        <View style={styles.container}>

            {/* Imagem de fundo */}
           <Text>Tela de perfil</Text>
           <TouchableOpacity onPress={() => navigation.navigate('Login')}>Voltar ao login</TouchableOpacity>
            {/* comentário */}
        </View>
    );
}

const styles = StyleSheet.create({
});