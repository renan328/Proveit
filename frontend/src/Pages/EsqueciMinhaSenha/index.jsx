import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import validator from 'validator';
import styles from './esqueciminhasenha.module';

export default function EsqueciMinhaSenha() {
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <ImageBackground source={require('../../assets/headerBG.jpg')}/>
            </View>
            <View style={styles.main}>
        
          
            </View>
        </View>
    );
}