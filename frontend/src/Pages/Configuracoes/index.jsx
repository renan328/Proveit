import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Appearance, useColorScheme, ScrollView } from "react-native";
import { Raleway_800ExtraBold, Raleway_500Medium } from "@expo-google-fonts/raleway";
import LottieView from 'lottie-react-native';
import stylesDark from './configuracoes.moduleDark';
import stylesLight from './configuracoes.module';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faUser, faRightFromBracket, faQuestionCircle, faPencil, faStar, faScroll, faBroom } from '@fortawesome/free-solid-svg-icons';
import '../../AuthContext';
import { Logout } from "../../AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Configuracoes({ navigation }) {

    const [save, setSave] = useState(true);
    const animation = useRef(null);
    const firstRun = useRef(true);

    const scheme = useColorScheme();
    var styles = scheme === 'dark' ? stylesDark : stylesLight;

    async function SairDaConta() {
        await Logout();
        navigation.navigate('Login');
    }

    async function LimparHistorico() {
        await AsyncStorage.removeItem("historicoReceitas");
        alert("Limpo com sucesso")
    }

    useEffect(() => {
        // if (firstRun.current) {
        //     if (save) {
        //         animation.current.play(20, 20);
        //     } else {
        //         animation.current.play(0, 0);
        //     }

        //     firstRun.current = false;
        // } else if (save) {
        //     animation.current.play(0, 95);
        //     styles = stylesDark;
        // } else {
        //     animation.current.play(95, 180);
        //     styles = stylesLight;
        // }
    });

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

                {/* <View style={[styles.containerOpcoes, { backgroundColor: '#252525' }]}>
                    <Text style={styles.textOpcoes}>Temas</Text>
                    <TouchableOpacity onPress={() => setSave(!save)} style={{ height: 100, width: 100 }}>
                        {/* <LottieView
                            source={require('../../assets/lottie/switchTheme.json')} // Caminho para o arquivo JSON do Lottie
                            autoPlay={false}
                            ref={animation}
                            loop={false}
                        /> 
                    </TouchableOpacity>
                </View> */}

                <TouchableOpacity style={styles.containerOpcoes} onPress={() => navigation.navigate('EditarUsuario')}>
                    <Text style={styles.textOpcoes}>Editar perfil</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faUser} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes} onPress={() => navigation.navigate('ReceitasDoUsuario')}>
                    <Text style={styles.textOpcoes}>Editar receitas</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faPencil} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes} onPress={() => navigation.navigate('AvaliacoesDoUsuario')}>
                    <Text style={styles.textOpcoes}>Editar avaliações</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faStar} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes} onPress={LimparHistorico}>
                    <Text style={styles.textOpcoes}>Limpar histórico</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faBroom} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Central de Ajuda</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faQuestionCircle} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Termos e condições</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faScroll} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Política de privacidade</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faScroll} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes} onPress={SairDaConta}>
                    <Text style={styles.textOpcoesSair}>Sair da conta</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faRightFromBracket} size={25} color="#ff7152" />
                </TouchableOpacity>

            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>© 2023-2023 Proveit.inc</Text>
            </View>
            <View style={{ paddingVertical: 40 }} />
        </ScrollView>
    );
}