import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./favoritos.module";

export default function Favoritos() {
    return (
        <View style={styles.header}>
            <View style={styles.textContainer}>
                <Text style={styles.firstText}>Meus</Text>
                <Text style={styles.subText}>Favoritos</Text>
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
