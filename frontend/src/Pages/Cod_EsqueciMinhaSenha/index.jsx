import React, { Component, useState, useRef } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, Image, TextInput, StatusBar, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import validator from 'validator';
import styles from './cod_esqueciminhasenha.module';
import { text } from '@fortawesome/fontawesome-svg-core';

const screenHeight = Dimensions.get('window').height;

export default function Cod_EsqueciMinhaSenha() {

    const [code, setCode] = useState(['', '', '', '']);
    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);

    const handleCodeChange = (index, text, value) => {
        // Remove qualquer caractere que não seja número
        const cleanedText = text.replace(/[^0-9]/g, '');
        const newCode = [...code];
        newCode[index] = cleanedText;
        setCode(newCode);

        // Se o texto não estiver vazio, move o foco para o próximo TextInput

        if (cleanedText !== '' && index < 3) {
            switch (index) {
                case 0:
                    input2.current.focus();
                    break;
                case 1:
                    input3.current.focus();
                    break;
                case 2:
                    input4.current.focus();
                    break;
                default:
                    break;
            }
        } else if (index > 0 && cleanedText === '') {
            // Se o texto estiver vazio e não for o primeiro campo, move o foco para o campo anterior
            switch (index) {
                case 1:
                    input1.current.focus();
                    break;
                case 2:
                    input2.current.focus();
                    break;
                case 3:
                    input3.current.focus();
                    break;
                default:
                    break;
            }
        }
    }  

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
                        <View style={styles.IconDocu}>
                            <Image
                                style={{ width: 75, height: 73 }}
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
                        <View style={styles.Inputs_container}>
                            <View style={styles.Inputs}>
                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code[0]}
                                    onChangeText={(value) => handleCodeChange(0, value, setCode)}
                                    ref={input1}
                                />
                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code[1]}
                                    onChangeText={(value) => handleCodeChange(1, value, setCode)}
                                    ref={input2}
                                />
                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code[2]}
                                    onChangeText={(value) => handleCodeChange(2, value, setCode)}
                                    ref={input3}
                                />
                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code[3]}
                                    onChangeText={(value) => handleCodeChange(3, value, setCode)}
                                    ref={input4}
                                />
                            </View>
                        </View>

                        {/* Reenviar código */}
                        <View style={styles.resend_code}>
                            <Text style={styles.code}>Reenviar código</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}