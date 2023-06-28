import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, useColorScheme, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faPencil, faTrashCan, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from "expo-blur";
import { DadosUsuario } from "../../AuthContext";
import { HeaderRequisicao } from '../../AuthContext';
import { ActionModal } from '../../components/ActionModal/ActionModal'
import showToast from '../../../hooks/toasts';

export default function CartaoAvalicaoDoUsuario({ avaliacao }) {
    const navigation = useNavigation();

    const [visibleModal, setVisibleModal] = useState(false);

    const GoToEdit = (id) => {
        navigation.navigate('EditarAvaliacao', { id: avaliacao?.idAvaliacao });
    };

    async function RemoverAvaliacao() {
        const headers = await HeaderRequisicao();

        fetch("https://serverproveit.azurewebsites.net/api/avaliacao/" + avaliacao?.idAvaliacao, {
            method: "DELETE",
            headers
        })
            .then((response) => {
                if (response.ok) {
                    showToast('Avaliação removida!', 'Você removeu essa avaliação!', 'success');
                }
                else {
                    showToast('Foi mal!', 'Erro ao remover avaliação, tente novamente mais tarde.', 'error');
                }
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao remover avaliação, tente novamente mais tarde.', 'error');
            });
    }

    const stars = avaliacao.estrelas;
    function StarCounter() {

        const starsBox = [];

        for (let index = 0; index < stars; index++) {
            starsBox.push(
                <View key={index}>
                    <FontAwesomeIcon icon={faStar} color={'#FF7152'} />
                </View>
            );
        }

        return (
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 5, }}>{starsBox}</View>
        );
    };

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    return (
        <View style={styles.opcoes}>
            <Text style={styles.recipeIdentifier}>Receita: <Text style={{ color: '#ff7152' }}>{avaliacao.nomeReceita}</Text></Text>
            <View style={styles.container}>

                <View style={styles.imgContainer}>
                    <Image source={{ uri: avaliacao.usuarioFoto }} style={styles.userPic}></Image>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.commentHeader}>
                        <Text style={styles.userName}>{avaliacao.usuarioNome}</Text>
                        <View>{StarCounter()}</View>
                    </View>
                    <View style={styles.quoteContainer}>
                        <FontAwesomeIcon icon={faQuoteLeft} color={'#505050'} />
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.comment}>{avaliacao.comentario}</Text>
                    </View>
                    <View style={styles.footer}>
                        <FontAwesomeIcon icon={faQuoteRight} color={'#505050'} />
                    </View>
                </View>

            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 50 }}>
                <TouchableOpacity style={styles.containerOpcoes} onPress={GoToEdit}>
                    <FontAwesomeIcon style={{ alignSelf: 'center' }} icon={faPencil} size={25} color="#606060" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerOpcoesDelete} onPress={() => setVisibleModal(true)}>
                    <FontAwesomeIcon style={{ alignSelf: 'center' }} icon={faTrashCan} size={25} color="#eeeeee5e" />
                </TouchableOpacity>
                <View style={{ paddingTop: 50 }} />
            </View>

            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
            >
                <ActionModal
                    handleClose={() => setVisibleModal(false)}
                    handleAction={() => RemoverAvaliacao()}
                    status={'delete'}
                />

            </Modal>
        </View>
    )
}

const stylesLight = StyleSheet.create({

    container: {
        display: 'flex',
        minWidth: 300,
        maxWidth: 300,
        color: '#505050',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
        elevation: 5,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    imgContainer: {
        flex: 25,
    },

    userPic: {
        width: 65,
        height: 65,
        top: -15,
        left: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    textContainer: {
        flex: 75,
        display: 'flex',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomEndRadius: 20,
        borderTopEndRadius: 20,
    },

    commentHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    userName: {
        fontFamily: 'Raleway_700Bold',
        color: '#505050',
        fontSize: 16,
        alignSelf: 'center'
    },

    recipeIdentifier: {
        fontFamily: 'Raleway_700Bold',
        color: '#707070',
        fontSize: 16,
        alignSelf: 'center'
    },

    quoteContainer: {
        marginVertical: 5
    },

    comment: {
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        fontSize: 14
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5
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
        backgroundColor: '#eeeeee',
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

    textOpcoes: {
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 18,
        color: '#505050',
    },

    textOpcoesDelete: {
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 18,
        color: '#eeeeee5e',
    },

});

const stylesDark = StyleSheet.create({

    container: {
        display: 'flex',
        minWidth: 300,
        maxWidth: 300,
        color: '#fff',
        backgroundColor: '#303030',
        flexDirection: 'row',
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
        elevation: 5,
        borderBottomStartRadius: 10,
        borderTopStartRadius: 10,
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10,
    },

    imgContainer: {
        flex: 25,
    },

    userPic: {
        width: 65,
        height: 65,
        top: -15,
        left: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    textContainer: {
        flex: 75,
        display: 'flex',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomEndRadius: 20,
        borderTopEndRadius: 20,
    },

    commentHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    recipeIdentifier: {
        fontFamily: 'Raleway_700Bold',
        color: '#707070',
        fontSize: 16,
        alignSelf: 'center'
    },

    userName: {
        fontFamily: 'Raleway_700Bold',
        color: '#fff',
        fontSize: 16,
    },


    quoteContainer: {
        marginVertical: 5
    },

    comment: {
        fontFamily: 'Raleway_600SemiBold',
        color: '#dcdcdc',
        fontSize: 14
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5
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
        maxWidth: 300,
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

    textOpcoes: {
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 18,
        color: '#505050',
    },

    textOpcoesDelete: {
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 18,
        color: '#eeeeee5e',
    },

});