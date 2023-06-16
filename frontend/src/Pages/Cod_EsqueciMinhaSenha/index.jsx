import React, { Component, useState, useRef } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Appearance, useColorScheme, ImageBackground, Image, TextInput, StatusBar, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import styles from './cod_esqueciminhasenha.module';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import stylesLight from './cod_esqueciminhasenha.module';
import stylesDark from './cod_esqueciminhasenha.moduleDark';
import headerBG4v2 from '../../assets/headerBG4v2.jpg';
import headerBG2 from '../../assets/headerBG2.png';

const screenHeight = Dimensions.get('window').height;

export default function Cod_EsqueciMinhaSenha({ navigation }) {

 /* Tema escuro */
    const scheme = useColorScheme();
    const backgroundImage = scheme === 'dark' ? headerBG2 : headerBG4v2;
    var styles = scheme === 'dark' ? stylesDark : stylesLight;

/* Função para verificar se os 4 inputs estão preenchidos */
    const checkInputsFilled = () => {
        if (code[0] && code[1] && code[2] && code[3]) {
            navigation.navigate('Red_EsqueciMinhaSenha');
        }
    };

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
        <View style={{ maxHeight: screenHeight }}>
            <View style={styles.imageContainer}>
                <ImageBackground source={backgroundImage} style={{ height: screenHeight * 0.6 }}>
                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon
                            style={styles.arrowleft}
                            color={'#fff'}
                            size={30}
                            icon={faChevronLeft} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>

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

                        <View style={styles.Inputs_container}>
                            <View style={styles.Inputs}>
                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code[0]}
                                    onChangeText={(value) => handleCodeChange(0, value, setCode, checkInputsFilled())}
                                    ref={input1}
                                />

                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code[1]}
                                    onChangeText={(value) => handleCodeChange(1, value, setCode, checkInputsFilled())}
                                    ref={input2}
                                />

                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code[2]}
                                    onChangeText={(value) => handleCodeChange(2, value, setCode, checkInputsFilled())}
                                    ref={input3}
                                />

                                <TextInput
                                    style={styles.Input_Styles}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={code[3]}
                                    onChangeText={(value) => handleCodeChange(3, value, setCode, checkInputsFilled())}
                                    ref={input4}
                                />
                            </View>
                        </View>
                        <View style={styles.resend_code}>
                            <Text style={styles.code}>Reenviar código</Text>
                        </View>
                    </View>
                </View>
                <Image
                    style={styles.balls}
                    source={require('../../assets/homeBalls.png')}
                />
            </View>
        </View>
    )
}