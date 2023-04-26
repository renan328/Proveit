import React, { Component, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, Image, TextInput, StatusBar, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import validator from 'validator';
import styles from './red_esqueciminhasenha.module';

const screenHeight = Dimensions.get('window').height;

export default function Red_EsqueciMinhaSenha ({ navigation }) {

    return (

        <View style={{maxHeight: screenHeight}}>
            {/* Imagem fundo */}
            <View style={styles.imageContainer}>
                <ImageBackground source={require('../../assets/headerBG4v2.jpg')} style={{ height: screenHeight * 0.6 }}> </ImageBackground>
            </View>
            {/* Container de componentes */}
            <View style={styles.main}>
                <View style={styles.main2}>
                    <View style={styles.circuloIcon}>
                        <View style={styles.IconCad}>
                            <Image
                                style={{ width: '89px', height: '86px' }}
                                source={require('../../assets/IconCad.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.main3}>
                        <View style={styles.Texts}>
                            <View style={styles.Texts2}>
                                <Text style={styles.Redefinasua}>Redefina sua</Text>
                                <Text style={styles.Senha}>senha</Text>
                            </View>
                            <Text style={styles.Desc}>Escreva sua nova senha, não se esqueça de usar letras, numeros e caracteres.</Text>
                        </View>

                        {/* Inputs */}
                        <View style={styles.inputSingle}>
                            <TextInput style={styles.defaultInput} placeholder='Nova senha'></TextInput>
                        </View>
                        <View style={styles.inputSingle}>
                            <TextInput style={styles.defaultInput} placeholder='Confirmar senha'></TextInput>
                        </View>
                        

                        {/* Botão */}
                        <View style={styles.botoes}>
                            <TouchableOpacity onPress={() => navigation.navigate('')} >
                                <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                                    end={{ x: 2, y: 1 }} style={styles.button} >
                                    <Text style={styles.buttonText}>Salvar</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}