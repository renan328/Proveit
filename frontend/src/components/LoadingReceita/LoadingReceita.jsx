import React from 'react';
import { View, StyleSheet, ActivityIndicator, useColorScheme, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export function LoadingReceita({ message }) {

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            <LottieView
                source={require('../../assets/lottie/recipesBook.json')} // Caminho para o arquivo JSON do Lottie
                autoPlay
                loop
                style={{ height: 250, alignSelf: 'center' }}
            />
        </View>
    );
};

const stylesLight = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    message: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

const stylesDark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    indicatorColor: '#fff',
    message: {
        marginTop: 16,
        fontSize: 16,
        color: '#fff',
    },
});
