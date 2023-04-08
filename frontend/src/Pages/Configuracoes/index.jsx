import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import styles from './configuracoes.module';

export default function Configuracoes(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity></TouchableOpacity>
                <Text>Configurações</Text>
            </View>
            <Text>Configurações</Text>
        </View>
    );
}