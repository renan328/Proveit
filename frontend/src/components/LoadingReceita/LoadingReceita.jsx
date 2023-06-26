import React from 'react';
import { View, StyleSheet, ActivityIndicator, useColorScheme, Text } from 'react-native';

export function LoadingReceita({ message }) {

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#FF7152" />
            <Text style={styles.message}>{message}</Text>
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
