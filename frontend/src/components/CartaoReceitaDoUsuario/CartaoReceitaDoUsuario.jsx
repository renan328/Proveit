import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, useColorScheme } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from "expo-blur";
import { DadosUsuario } from "../../AuthContext";
import { HeaderRequisicao } from '../../AuthContext';
import { ActionModal } from '../../components/ActionModal/ActionModal'
import showToast from '../../../hooks/toasts';

export default function CartaoReceitaDoUsuario({ receita }) {
    const navigation = useNavigation();
    const [visibleModal, setVisibleModal] = useState(false);

    const GoToEdit = (id) => {
        navigation.navigate('EditarReceita', { id: receita.receita?.idReceita });
    };

    async function RemoverReceita() {
        const headers = await HeaderRequisicao();

        fetch("https://serverproveit.azurewebsites.net/api/receita/" + receita.receita?.idReceita, {
            method: "DELETE",
            headers
        })
            .then((response) => {
                if (response.ok) {
                    showToast('Receita removida!', 'Você removeu essa receita!', 'success');
                }
                else {
                    showToast('Foi mal!', 'Erro ao remover a receita, tente novamente mais tarde.', 'error');
                }
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao remover a receita, tente novamente mais tarde.', 'error');
            });
    }

    const stars = receita.mediaEstrelas;
    function StarCounter() {
        const starsBox = [];
        for (let index = 0; index < stars; index++) {
            starsBox.push(
                <View key={index}>
                    <FontAwesomeIcon style={styles.star} icon={faStar} size={10} color={'#FF7152'} />
                </View>
            );
        }
        return (
            <View style={{ display: 'flex', flexDirection: 'row', marginStart: 5, marginTop: 5, }}>{starsBox}</View>
        )
    }

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <View style={styles.opcoes}>
            <View style={styles.wrapper}>
                {/* onPress={() => handleCardPress(receita.id)} */}
                <TouchableOpacity key={receita.id}>
                    <ImageBackground source={{ uri: !receita.receita?.foto ? '../../assets/proveitLogo.png' : receita.receita?.foto }} imageStyle={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32, borderTopLeftRadius: 32, borderTopRightRadius: 32, }} style={styles.caixaPrincipal}>

                        <View style={styles.header}>
                        </View>

                        {/* Container de imagem e texto */}
                        <View style={styles.containerTexto} >
                            <View style={styles.containerTextoWhite}>
                                {StarCounter()}
                                <Text style={styles.titulo}>{receita.receita?.nomeReceita}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity >

                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.containerOpcoes} onPress={GoToEdit}>
                        <FontAwesomeIcon style={styles.botaoOpcoes} icon={faPencil} size={25} color="#606060" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerOpcoesDelete} onPress={() => setVisibleModal(true)}>
                        <FontAwesomeIcon style={styles.botaoOpcoes} icon={faTrashCan} size={25} color="#eeeeee5e" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingTop: 50 }} />
            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
            >
                <ActionModal
                    handleClose={() => setVisibleModal(false)}
                    handleAction={() => RemoverReceita()}
                    status={'deleteReceita'}
                />
            </Modal>
        </View>
    )
}


const stylesDark = StyleSheet.create({

    caixaPrincipal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 350,
        height: 170,
        backgroundColor: '#303030',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 4,
    },

    header: {
        padding: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    bookmarkIcon: {
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 13,
        color: '#fff',

    },

    containerTexto: {
        width: '100%',
        height: 70,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    },

    containerTextoWhite: {
        flexWrap: 'wrap',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'rgba(20,20,20,0.8)',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    titulo: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        fontSize: 12,
        width: '100%',
        marginVertical: 7,
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        color: '#fff',
        textTransform: 'capitalize',
        alignSelf: 'center'
    },

    optionsContainer: {
        flexDirection: 'row',
        display: 'flex',
        width: 340,
        justifyContent: 'space-between'
       },

    containerOpcoes: {
        width: '60%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#303030',
        marginTop: 20,
    },


    containerOpcoesDelete: {
        width: '30%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff4848d1',
        color: '#fff',
        marginTop: 20,
    },

    botaoOpcoes: {
        alignSelf: 'flex-end',
    },

    opcoes: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 15,
        width: '80%'
    },
});
const stylesLight = StyleSheet.create({

    caixaPrincipal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 350,
        height: 170,
        backgroundColor: '#303030',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 4,
    },

    header: {
        padding: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    bookmarkIcon: {
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 13,
        color: '#fff',

    },

    containerTexto: {
        width: '100%',
        height: 70,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    },

    containerTextoWhite: {
        flexWrap: 'wrap',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    titulo: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        fontSize: 12,
        marginVertical: 7,
        width: '100%',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        color: '#303030',
        textTransform: 'capitalize',
        alignSelf: 'center'
    },

    optionsContainer: {
        flexDirection: 'row',
        display: 'flex',
        width: 340,
        justifyContent: 'space-between'
       },

    containerOpcoes: {
        width: '60%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        marginTop: 20,
    },


    containerOpcoesDelete: {
        width: '30%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff4848d1',
        color: '#fff',
        marginTop: 20,
    },

    botaoOpcoes: {
        alignSelf: 'flex-end',
    },

    opcoes: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 15,
        width: '80%'
    },
});