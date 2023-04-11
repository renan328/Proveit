import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import styles from './configuracoes.module';

export default function Configuracoes() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.botao}>Seta</TouchableOpacity>
                
                <Text style={styles.text}>Configurações</Text>
            </View>

            {/* Linha Horizontal */}
            {/* <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: '330px', height: '5px',
                    marginTop: '15px'
                }}
            /> */}

            {/* Lista de opções */}
            <View style={styles.opcoes}>
                <Text style={styles.textOpcoes}>Editar Perfil</Text>
                <TouchableOpacity style={styles.botaoOpcoes}>Seta</TouchableOpacity>

                <Text style={styles.textOpcoes}>Editar Receita</Text>
                <TouchableOpacity style={styles.botaoOpcoes}>Seta</TouchableOpacity>

                <Text style={styles.textOpcoes}>Temas</Text>
                <TouchableOpacity style={styles.botaoOpcoes}>Seta</TouchableOpacity>

                <Text style={styles.textOpcoes}>Central de Ajuda</Text>
                <TouchableOpacity style={styles.botaoOpcoes}>Seta</TouchableOpacity>

                <Text style={styles.textOpcoes}>Termos e Condições</Text>
                <TouchableOpacity style={styles.botaoOpcoes}>Seta</TouchableOpacity>

                <Text style={styles.textOpcoes}>Políticas de Privacidade</Text>
                <TouchableOpacity style={styles.botaoOpcoes}>Seta</TouchableOpacity>

                <Text style={styles.textOpcoes}>Sair da Conta</Text>
                <TouchableOpacity style={styles.botaoOpcoes}>Seta</TouchableOpacity>
            </View>
        </View>
    );
}