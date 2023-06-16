import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Appearance, useColorScheme, ImageBackground, Image, TextInput, StatusBar, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import stylesLight from './red_esqueciminhasenha.module';
import stylesDark from './red_esqueciminhasenha.moduleDark';
import headerBG4v2 from '../../assets/headerBG4v2.jpg';
import headerBG2 from '../../assets/headerBG2.png';

const screenHeight = Dimensions.get('window').height;

export default function Red_EsqueciMinhaSenha({ navigation }) {

    const scheme = useColorScheme();
    const backgroundImage = scheme === 'dark' ? headerBG2 : headerBG4v2;
    var styles = scheme === 'dark' ? stylesDark : stylesLight;

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
                        <View style={styles.IconCad}>
                            <Image
                                style={{ width: 89, height: 86 }}
                                source={require('../../assets/IconOpenCad.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.main3}>
                        <View style={styles.Texts}>
                            <View style={styles.Texts2}>
                                <Text style={styles.Redefinasua}>Redefina sua<Text style={{ color: '#ff7152' }}> senha</Text></Text>
                            </View>
                            <Text style={styles.Desc}>Escreva sua nova senha, não se esqueça de usar letras, numeros e caracteres.</Text>
                        </View>

                        <View style={styles.InputsButton}>
                            <View style={styles.inputSingle}>
                                <TextInput style={styles.defaultInput} placeholder='Nova senha'></TextInput>
                            </View>

                            <View style={styles.inputSingle}>
                                <TextInput style={styles.defaultInput} placeholder='Confirmar senha'></TextInput>
                            </View>

                            <View style={styles.botoes}>
                                <TouchableOpacity onPress={() => navigation.navigate('Main')} >
                                    <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                                        end={{ x: 2, y: 1 }} style={styles.button} >
                                        <Text style={styles.buttonText}>Salvar</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
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