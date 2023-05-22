import React from "react";
import { View, StyleSheet, Image, Dimensions, ActivityIndicator } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
    ;
const screenHeight = Dimensions.get('window').height;

export default function Pesquisar() {
    return (
        <LinearGradient start={{ x: 2, y: -1 }}
            end={{ x: -5, y: 3 }} colors={['#FF7152', '#FFB649']} style={styles.container}>

            <View style={styles.logo}>
                <Image
                    style={{ width: 240, height: 215 }}
                    source={require('../../assets/proveitLogo.png')}
                />
            </View>

            <View style={styles.circle}>
                <ActivityIndicator size="large" color="#FFF" />
            </View>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    logo: {
        margin: 100
    },
    circle: {
        display: 'flex',
        alignSelf: 'center'
    }
});