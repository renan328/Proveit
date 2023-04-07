import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
    ;
const screenHeight = Dimensions.get('window').height;

export default function Pesquisar() {
    return (
        // <View style={styles.container}>
        <LinearGradient start={{ x: 2, y: -1 }}
            end={{ x: -5, y: 3 }} colors={['#FF7152', '#FFB649']} style={styles.container}>

            <View style={styles.logo}>
                <Image
                    style={{ width: '209px', height: '209px' }}
                    source={require('../../assets/proveitLogo.png')}
                />
            </View>

            <View>
                {/* icon rodando */}
            </View>
        </LinearGradient>

        // </View>
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
        margin: '100px'
    }
});