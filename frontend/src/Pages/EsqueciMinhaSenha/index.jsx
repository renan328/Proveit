import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, Image, TextInput, StatusBar, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import validator from 'validator';
import styles from './esqueciminhasenha.module';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const screenHeight = Dimensions.get('window').height;

export default function EsqueciMinhaSenha({ navigation }) {

    return (

        <View style={{ maxHeight: screenHeight }}>
            {/* Imagem fundo */}
            <View style={styles.imageContainer}>
                <ImageBackground source={require('../../assets/headerBG4v2.jpg')} style={{ height: screenHeight * 0.6 }}>
                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon
                            style={styles.arrowleft}
                            color={'#fff'}
                            size={30}
                            icon={faChevronLeft}></FontAwesomeIcon>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            {/* Container de componentes */}
            <View style={styles.main}>
                <View style={styles.main2}>
                    <View style={styles.circuloIcon}>
                        <View style={styles.IconCad}>
                            <Image
                                style={{ width: 89, height: 86 }}
                                source={require('../../assets/IconCad.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.main3}>
                        <View style={styles.Texts}>
                            <View>
                                <Text style={styles.Qualeoseu}>Qual é o seu</Text>
                                <Text style={styles.Email}>email?</Text>
                            </View>
                            <Text style={styles.Desc}>Digite o email cadastrado para que enviaremos um código de autenticação.</Text>
                        </View>

                        {/* Input */}
                        <View style={styles.inputSingle}>
                            <TextInput style={styles.defaultInput} placeholder='E-mail'></TextInput>
                        </View>

                        {/* Botão */}
                        <View style={styles.botoes}>
                            <TouchableOpacity onPress={() => navigation.navigate('Cod_EsqueciMinhaSenha')} >
                                <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                                    end={{ x: 2, y: 1 }} style={styles.button} >
                                    <Text style={styles.buttonText}>Pronto</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Image
                    style={styles.balls}
                    source={require('../../assets/homeBalls.png')}
                />
            </View>
        </View>
    );
}