import React, { Component, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, Image, TextInput, StatusBar, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import validator from 'validator';
import styles from './cod_esqueciminhasenha.module';

const screenHeight = Dimensions.get('window').height;

export default function Cod_EsqueciMinhaSenha() {


    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');
    
    const [firstTextInput, setFirstTextInput] = useState(null);
    const [secondTextInput, setSecondTextInput] = useState(null);
    const [thirdTextInput, setThirdTextInput] = useState(null);
    const [fourthTextInput, setFourthTextInput] = useState(null);

    const handleCodeChange = (text, setState, nextInput) => {
        // Remove qualquer caractere que não seja número
        const cleanedText = text.replace(/[^0-9]/g, '');
        setState(cleanedText);

        // Se o texto não estiver vazio, move o foco para o próximo TextInput
        if (text !== '') {
            nextInput.focus();
        }
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
                        <View style={styles.Inputs_container}>
                            <View style={styles.Inputs}>
                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code1}
                                    onChangeText={(text) => handleCodeChange(text, setCode1, firstTextInput)}
                                    ref={(input) => { setSecondTextInput = input; }}
                                />
                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code2}
                                    onChangeText={(text) => handleCodeChange(text, setCode2, secondTextInput)}
                                    ref={(input) => { setThirdTextInput = input; }}
                                />
                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code3}
                                    onChangeText={(text) => handleCodeChange(text, setCode3, thirdTextInput)}
                                    ref={(input) => { setFourthTextInput = input; }}
                                />
                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code4}
                                    onChangeText={(text) => handleCodeChange(text, setCode4, null)}
                                    ref={(input) => { setFourthTextInput = input; }}
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