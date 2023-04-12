import React, { Component, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, Image, TextInput, StatusBar, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import validator from 'validator';
import styles from './cod_esqueciminhasenha.module';

const screenHeight = Dimensions.get('window').height;

export default function Cod_EsqueciMinhaSenha() {

    const [code, setCode] = useState('');

    const handleCodeChange = (text) => {
        // Remove qualquer caractere que não seja número
        const cleanedText = text.replace(/[^0-9]/g, '');
        setCode(cleanedText);
    };

    return (

        <View style={styles.container}>
            {/* Imagem fundo */}
            <View style={styles.imageContainer}>
                <ImageBackground source={require('../../assets/headerBG4v2.jpg')} style={{ height: screenHeight * 0.6 }}> </ImageBackground>
            </View>
            {/* Container de componentes */}
            <View style={styles.main}>
                <View style={styles.main2}>
                    <View style={styles.circuloIcon}>
                        <View style={styles.IconDocu}>
                            <Image
                                style={{ width: '75px', height: '73px' }}
                                source={require('../../assets/IconDocu.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.main3}>
                        <View style={styles.Texts}>
                            <View style={styles.Texts1}>
                                <Text style={styles.Digiteo}>Digite o</Text>
                                <Text style={styles.codigo}>código</Text>
                            </View>
                            <Text style={styles.Desc}>Digite o código enviado para o seu email.</Text>
                        </View>

                        {/* Input */}
                        <View style={styles.inputSingle}>
                            <TextInput style={styles.defaultInput} placeholder='E-mail'></TextInput>
                        </View>

                        <View style={styles.testecontainer}>
                            <TextInput
                                style={styles.testeinput}
                                keyboardType="numeric"
                                maxLength={1}
                                value={code}
                                onChangeText={handleCodeChange}
                            />
                        </View>

                        {/* Botão */}
                        <View style={styles.botoes}>
                            <TouchableOpacity onPress={() => navigation.navigate('Main')} >
                                <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                                    end={{ x: 2, y: 1 }} style={styles.button} >
                                    <Text style={styles.buttonText}>Pronto</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}