import React, { Component, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, Image, TextInput, StatusBar, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import validator from 'validator';
import styles from './esqueciminhasenha.module';

const screenHeight = Dimensions.get('window').height;

export default function EsqueciMinhaSenha() {

    return (

        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground source={require('../../assets/headerBG.jpg')} style={{ height: screenHeight * 0.6 }}> </ImageBackground>
            </View>
            <View style={styles.main}>
                <View style={styles.circuloIcon}>
                    <View style={styles.IconCad}>
                        <Image
                            style={{ width: '89px', height: '86px' }}
                            source={require('../../assets/IconCad.png')}
                        />
                    </View>
                </View>
                <View style={styles.TextEmail}>
                    <Text style={styles.Qualeoseu}>Qual é o seu</Text>
                    <Text style={styles.Email}>Email?</Text>
                </View>
            </View>
        </View>
    );
}