import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Raleway_800ExtraBold, Raleway_500Medium } from "@expo-google-fonts/raleway";
import styles from './configuracoes.module';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Configuracoes() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.botao}><FontAwesomeIcon icon={faArrowLeft} color="#FF7152" size={'30px'} /></TouchableOpacity>

                <Text style={styles.title}>Configurações</Text>
                <View style={styles.linha}/>
            </View>

            {/* Lista de opções */}
            <View style={styles.opcoes}>
                <View style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Editar Perfil</Text>
                    <TouchableOpacity style={styles.botaoOpcoes}><FontAwesomeIcon icon={faChevronRight} size={'25px'} /></TouchableOpacity>
                </View>

                <View style={styles.linhaOpcoes}/>

                <View style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Editar Receita</Text>
                    <TouchableOpacity style={styles.botaoOpcoes}><FontAwesomeIcon icon={faChevronRight} size={'25px'} /></TouchableOpacity>
                </View>

                <View style={styles.linhaOpcoes}/>

                <View style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Temas</Text>
                    <TouchableOpacity style={styles.botaoOpcoes}><FontAwesomeIcon icon={faChevronRight} size={'25px'} /></TouchableOpacity>
                </View>

                <View style={styles.linhaOpcoes}/>

                <View style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Central de Ajuda</Text>
                    <TouchableOpacity style={styles.botaoOpcoes}><FontAwesomeIcon icon={faChevronRight} size={'25px'} /></TouchableOpacity>
                </View>

                <View style={styles.linhaOpcoes}/>

                <View style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Termos e Condições</Text>
                    <TouchableOpacity style={styles.botaoOpcoes}><FontAwesomeIcon icon={faChevronRight} size={'25px'} /></TouchableOpacity>
                </View>

                <View style={styles.linhaOpcoes}/>

                <View style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Políticas de Privacidade</Text>
                    <TouchableOpacity style={styles.botaoOpcoes}><FontAwesomeIcon icon={faChevronRight} size={'25px'} /></TouchableOpacity>
                </View>

                <View style={styles.linhaOpcoes}/>

                <View style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoesSair}>Sair da Conta</Text>
                    <TouchableOpacity style={styles.botaoOpcoes}><FontAwesomeIcon icon={faChevronRight} color="#FF7152" size={'25px'} /></TouchableOpacity>
                </View>

                <View style={styles.linhaOpcoes}/>
            </View>
        </View>
    );
}