import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'

const screenHeight = Dimensions.get('window').height;

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/cat_bolos.jpg')} style={{ height: screenHeight * 0.5 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesomeIcon style={styles.goBackIcon} icon={faAngleLeft} size={28} /></TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={styles.mainContainer}>
                <View style={styles.starsContainer}>

                    <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>
                    <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>
                    <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>
                    <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>
                    <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>

                </View>

                <View style={styles.mainTexts}>
                    <Text style={styles.mainTitle}>Bolo de chocolate</Text>
                    <Text style={styles.description}>Bolo de chocolate com cobertura de chocolate branco</Text>
                </View>


                <View style={styles.caloryContainer}>
                    <LinearGradient start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.caloryCounter}>
                        <Text style={styles.caloryText}>Valor calórico: <Text style={{fontFamily: 'Raleway_700Bold'}}>100 g / 274 kcal</Text></Text>
                    </LinearGradient>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff'
    },

    goBackIcon: {
        color: '#fff',
        marginVertical: '20px',
        marginHorizontal: '12px',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        top: -60,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },

    starsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '15px'
    },

    star: {
        margin: 0
    },

    mainTexts: {
        flex: 1,
        alignItems: 'center'
    },

    mainTitle: {
        color: '#505050',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: '25px',
        textAlign: 'center',
        width: '85%',
    },

    description: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.4)',
        fontFamily: 'Raleway_500Medium',
        width: '70%',
        textAlign: 'center'
    },

    caloryCounter:  {
        paddingHorizontal: '12px',
        paddingVertical: '2px',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        top: 30
    },

    caloryText: {
        fontSize: 11,
        color: '#fff',
        fontFamily: 'Raleway_500Medium'
    }


});