import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Appearance, useColorScheme, ScrollView } from "react-native";
import { Raleway_800ExtraBold, Raleway_500Medium } from "@expo-google-fonts/raleway";
import LottieView from 'lottie-react-native';
import stylesDark from './configuracoes.moduleDark';
import stylesLight from './configuracoes.module';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faUser, faRightFromBracket, faQuestionCircle, faPencil, faStar, faScroll, faBroom, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import '../../AuthContext';
import { Logout } from "../../AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Configuracoes({ navigation }) {

    const [save, setSave] = useState(true);
    const animation = useRef(null);
    const firstRun = useRef(true);

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    async function SairDaConta() {
        await Logout();
        navigation.navigate('Login');
    }

    async function LimparHistorico() {
        await AsyncStorage.removeItem("historicoReceitas");
        showToast('Limpo!', 'Seu histórico foi limpo!', 'success');
    }

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao} >
                    <FontAwesomeIcon icon={faChevronLeft} color="#FF7152" size={30} />
                </TouchableOpacity>

                <Text style={styles.title}>Configurações</Text>
            </View>
            <View style={styles.linha} />

            {/* Lista de opções */}
            <View style={styles.opcoes}>

                <TouchableOpacity style={styles.containerOpcoes} onPress={() => navigation.navigate('EditarUsuario')}>
                    <Text style={styles.textOpcoes}>Editar perfil</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faUser} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes} onPress={() => navigation.navigate('ReceitasDoUsuario')}>
                    <Text style={styles.textOpcoes}>Minhas receitas</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faBowlFood} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes} onPress={() => navigation.navigate('AvaliacoesDoUsuario')}>
                    <Text style={styles.textOpcoes}>Minhas avaliações</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faStar} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes} onPress={LimparHistorico}>
                    <Text style={styles.textOpcoes}>Limpar histórico</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faBroom} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes} onPress={() => navigation.navigate('EsqueciMinhaSenhaSimple')}>
                    <Text style={styles.textOpcoes}>Central de Ajuda</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faQuestionCircle} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes} onPress={SairDaConta}>
                    <Text style={styles.textOpcoesSair}>Sair da conta</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faRightFromBracket} size={25} color="#ff7152" />
                </TouchableOpacity>

            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>© 2023-2023 Devlare</Text>
            </View>
            <View style={{ paddingVertical: 40 }} />
        </ScrollView>
    );
}