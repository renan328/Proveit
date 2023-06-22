import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, Image, TextInput, Appearance, useColorScheme, StatusBar, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
import stylesLight from './esqueciminhasenhasimple.module';
import stylesDark from './esqueciminhasenhasimple.moduleDark';
import headerBG4v2 from '../../assets/headerBG4v2.jpg';
import headerBG2 from '../../assets/headerBG2.png';
import Clipboard from '@react-native-clipboard/clipboard';

const screenHeight = Dimensions.get('window').height;

export default function EsqueciMinhaSenhaSimple({ navigation }) {

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
                            color={'rgba(255,255,255)'}
                            size={30}
                            icon={faChevronLeft}
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </View>

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
                                <Text style={styles.Esqueceusua}>Esqueceu sua</Text>
                                <Text style={styles.Senha}>senha?</Text>
                            </View>
                            <Text style={styles.Desc}>Contate nosso suporte via email para podermos analisar sua situação.</Text>
                        </View>
                        <View style={styles.inputSingle}>
                            <TextInput style={styles.defaultInput}
                                value="admproveit@gmail.com"
                                editable={false}
                            />
                            <TouchableOpacity onPress={() => Clipboard.setString('admproveit@gmail.com')}>
                                <FontAwesomeIcon
                                    style={styles.IconCopy}
                                    color={'#FF7152'}
                                    size={30}
                                    icon={faCopy}
                                />
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
    )
}