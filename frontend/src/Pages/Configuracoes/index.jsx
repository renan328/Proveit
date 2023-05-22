import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Appearance, useColorScheme } from "react-native";
import { Raleway_800ExtraBold, Raleway_500Medium } from "@expo-google-fonts/raleway";
import stylesDark from './configuracoes.moduleDark';
import stylesLight from './configuracoes.module';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faUser, faRightFromBracket, faQuestionCircle, faPencil, faBrush, faScroll } from '@fortawesome/free-solid-svg-icons';

export default function Configuracoes({ navigation }) {

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <View style={styles.container}>
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
                <TouchableOpacity style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Editar Perfil</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faUser} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Editar receita</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faPencil} size={25} color="#606060" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.containerOpcoes}>
                    <Text style={styles.textOpcoes}>Temas</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faBrush} size={25} color="#606060" />
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


                <TouchableOpacity style={styles.containerOpcoes} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textOpcoesSair}>Sair da conta</Text>
                    <FontAwesomeIcon style={styles.botaoOpcoes} icon={faRightFromBracket} size={25} color="#ff7152" />
                </TouchableOpacity>

            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>© 2023-2023 Proveit.inc</Text>
            </View>
        </View>
    );
}