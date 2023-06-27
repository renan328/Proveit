import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TextInput, useColorScheme, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
import stylesLight from './esqueciminhasenhasimple.module';
import stylesDark from './esqueciminhasenhasimple.moduleDark';
import headerBG4v2 from '../../assets/headerBG4v2.jpg';
import headerBG2 from '../../assets/headerBG2.png';
import Clipboard from '@react-native-clipboard/clipboard';
import showToast from '../../../hooks/toasts';

const screenHeight = Dimensions.get('window').height;

export default function EsqueciMinhaSenhaSimple({ navigation }) {

    const scheme = useColorScheme();
    const backgroundImage = scheme === 'dark' ? headerBG2 : headerBG4v2;
    var styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <View style={{ maxHeight: screenHeight, width: '100%' }}>
            <View style={styles.imageContainer}>
                <ImageBackground source={backgroundImage} style={{ height: screenHeight * 1, width: '100%' }}>
                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon
                            style={styles.arrowleft}
                            color={'#FFF'}
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
                                <Text style={styles.Esqueceusua}>Central de</Text>
                                <Text style={styles.Senha}>Ajuda</Text>
                            </View>
                            <Text style={styles.Desc}>Contate nosso suporte via email para podermos analisar sua situação.</Text>
                        </View>
                        <View style={styles.inputSingle}>
                            <TextInput style={styles.defaultInput}
                                value="admproveit@gmail.com"
                                editable={false}
                            />
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