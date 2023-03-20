import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity, Dimension } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'

export default function Perfil( { navigation } ) {
    return (
        <View style={styles.container}>

            {/* Imagem de fundo */}
           {/* <Text>Tela de perfil</Text> */}
            
                <View style={styles.header}>
                        <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('Login')}>
                            <LinearGradient colors={['#FF7152', '#FFB649']} style={styles.gradient}>
                                <FontAwesomeIcon size={30} icon={faRightFromBracket} style={{ color: '#fff' }} />
                            </LinearGradient>
                        </TouchableOpacity>
                </View>
           <View style={styles.user}>
                <Image 
                    style={{ width: '250px', height: '220px' }}
                    source={require('../../assets/usuario96.png')}
                ></Image>
                <Text style={styles.titulo}>Nome</Text>
                <Text style={styles.subtitulo}>@nomedeusuario</Text>
           </View>
           <View style={styles.botoes}>
                <TouchableOpacity onPress={() => navigation.navigate('Historico')}>Histórico</TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Adicionados')}>Adicionados</TouchableOpacity>
           </View>
           <View
            style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}
            />
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        width: '100%',
        padding: '40px'
    },
    gradient:{
        display: 'flex',
        flexDirection: 'row-reverse',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65
    },
    voltar:{
        flexDirection: 'row-reverse'
    }

});