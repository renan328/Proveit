import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import styles from "./pesquisa.module";

export default function Pesquisar() {
    return (
        <View style={styles.header}>
            <View style={styles.textContainer}>
                <Text style={styles.subText}>Buscar</Text>
                <TextInput style={styles.input} placeholder='Email ou nome de usuário'></TextInput>
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
        </View>
    );
}
