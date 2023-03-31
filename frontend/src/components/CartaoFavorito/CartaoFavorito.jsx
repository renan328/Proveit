import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import styles from "./pesquisa.module";

export default function CartaoFavorito() {
    return (
        <View style={styles.container}>
            <Text>Raul</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        display: 'flex'
    }
});
