import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import styles from './configuracoes.module';

export default function Configuracoes() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>Seta</TouchableOpacity>
                <Text style={styles.text}>Configurações</Text>
            </View>

            {/* Linha Horizontal */}
            <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: '330px', height: '5px',
                    marginTop: '15px'
                }}
            />

            {/* Lista de opções */}
            <View style={styles.opcoes}>

                <View style={styles.containeropcoes}>
                    <Text style={styles.textOpcoes}>Editar Perfil</Text>
                    <TouchableOpacity>Seta</TouchableOpacity>
                </View>

                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '330px', height: '5px',
                        marginTop: '15px'
                    }}
                />

                <View style={styles.containeropcoes}>
                    <Text style={styles.textOpcoes}>Editar Receita</Text>
                    <TouchableOpacity>Seta</TouchableOpacity>
                </View>

                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '330px', height: '5px',
                        marginTop: '15px'
                    }}
                />

                <View style={styles.containeropcoes}>
                    <Text style={styles.textOpcoes}>Temas</Text>
                    <TouchableOpacity>Seta</TouchableOpacity>
                </View>

                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '330px', height: '5px',
                        marginTop: '15px'
                    }}
                />

                <View style={styles.containeropcoes}>
                    <Text style={styles.textOpcoes}>Central de Ajuda</Text>
                    <TouchableOpacity>Seta</TouchableOpacity>
                </View>

                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '330px', height: '5px',
                        marginTop: '15px'
                    }}
                />

                <View style={styles.containeropcoes}>
                    <Text style={styles.textOpcoes}>Termos e Condições</Text>
                    <TouchableOpacity>Seta</TouchableOpacity>
                </View>

                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '330px', height: '5px',
                        marginTop: '15px'
                    }}
                />

                <View style={styles.containeropcoes}>
                    <Text style={styles.textOpcoes}>Políticas de Privacidade</Text>
                    <TouchableOpacity>Seta</TouchableOpacity>
                </View>

                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '330px', height: '5px',
                        marginTop: '15px'
                    }}
                />

                <View style={styles.containeropcoes}>
                    <Text style={styles.textOpcoes}>Sair da Conta</Text>
                    <TouchableOpacity>Seta</TouchableOpacity>
                </View>

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