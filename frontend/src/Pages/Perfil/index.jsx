import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity, Dimension, Appearance, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import { Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, useFonts } from '@expo-google-fonts/raleway';
import stylesLight from './perfil.module';
import stylesDark from './perfil.moduleDark';
import LottieView from 'lottie-react-native';


export default function Perfil({ navigation }) {

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        // Container Geral
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
                    <FontAwesomeIcon icon={faGear} size={32} style={styles.configIcon} />
                </TouchableOpacity>
            </View>
            <View>
                {/* Imagem do Usuário e Dados */}
                <View style={styles.userImage}>
                    <FontAwesomeIcon icon={faUser} size={50} style={styles.userIcon} color='#606060' />
                </View>
                <Text style={styles.name}>User</Text>
                <Text style={styles.userName}>@userName</Text>
            </View>
            <Text style={styles.text}>Adicionados</Text>

            {/* Linha horizontal */}
            <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: 330, height: 5,
                    marginTop: 15
                }}
            />

            <View styles={styles.recipes}>
                <Text style={styles.textUnder}>Você ainda não adicionou nehuma receita, <Text style={{ color: '#FF7152' }}>que tal publicar uma nova?</Text></Text>
            </View>
            <LottieView
                    source={require('../../assets/lottie/heart.json')}
                    autoPlay
                    loop
                    style={{ height: 15, alignSelf: 'center' }}
                />
            <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: 330, height: 5,
                    marginTop: 15
                }}
            />
        </View>
    );
}
