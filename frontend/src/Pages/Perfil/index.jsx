import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity, Dimension } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, width } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import { Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, useFonts } from '@expo-google-fonts/raleway';

export default function Perfil( { navigation } ) {
    return (
        // Container Geral
        <View style={styles.container}>
            {/* Imagem do Usuário e Dados */}
            <Image 
            source={require('../../assets/proveitLogo.png')}
            style={styles.userImage}
            />
            <Text style={styles.name}>User</Text>
            <Text style={styles.userName}>@userName</Text>
            <Text style={styles.text}>Adicionados</Text>
            {/* Linha horizontal */}
            <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: '330px', height: '5px',
                    marginTop: '15px'
                }}
            />
            <Text style={styles.textUnder}>Você ainda não adicionou nehuma receita, <Text style={{ color: '#FF7152' }}>que tal publicar uma nova?</Text></Text>
            <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: '330px', height: '5px',
                    marginTop: '15px'
                }}
            />
         </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        textAlign: 'center',
        alignItems: 'center'
    },
    userImage:{
        marginTop: '15px',
        width: 100,
        height: 100,
        maxWidth: '500px'
    },
    name:{
        fontFamily: 'Raleway_800ExtraBold',
        marginTop: '15px',
        color: '#FF7152',
        fontSize: 28,
    },
    userName:{
        fontFamily: 'Raleway_700Bold',
        color: '#858585',
        fontSize: 12,
    },
    text:{
        fontFamily: 'Raleway_700Bold',
        marginTop: '50px',
        color: '#FF7152',
    },
    textUnder:{
        width: '350px',
        fontFamily: 'Raleway_700Bold',
        marginTop: '15px',
        color: '#000',
        textAlign: 'justify'
    }

});