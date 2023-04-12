import React, { Component, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, Image, TextInput, StatusBar, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import validator from 'validator';
import { QuizInput } from 'react-native-quiz-input';
import styles from './cod_esqueciminhasenha.module';

const screenHeight = Dimensions.get('window').height;

export default function Cod_EsqueciMinhaSenha() {

    const onChange = ( data ) => {
        console.log(data);
        // your code goes here
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
                            <QuizInput
                            wordStructure={[true, true, true, false, true, true, true]}
                            onChange={onChange}
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