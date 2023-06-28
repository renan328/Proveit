import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Modal, useColorScheme } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AirbnbRating } from 'react-native-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faPlus, faTrashAlt, faTrashCan, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import stylesLight from './editaravaliacao.module';
import stylesDark from './editaravaliacao.moduleDark';
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from '../../AuthContext';
import { useRoute } from '@react-navigation/native';
import { ActionModal } from '../../components/ActionModal/ActionModal'
import showToast from '../../../hooks/toasts';

export default function EdicaoDeAvaliacao({ navigation, props }) {

    const route = useRoute();
    const { id } = route.params;

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [idAvaliacao, setidAvaliacao] = useState(id);
    const [estrelas, setEstrelas] = useState();
    const [comentario, setComentario] = useState('');
    const [usuario_id, setUsuario_id] = useState();
    const [receita_id, setReceita_id] = useState(id);
    const [nomeReceita, setNomeReceita] = useState();

    const [errors, setErrors] = useState({});
    const [visibleModal, setVisibleModal] = useState(false);

    let inputStyle = [styles.input];
    if (scheme === 'dark') {
        inputStyle.push(styles.inputDark);
    }

    function handleRatingChange(ratingValue) {
        setEstrelas(ratingValue)
    }

    async function BuscarAvaliacao() {
        const headers = await HeaderRequisicao(navigation);
        const userDataJWT = await DadosUsuario();

        fetch("https://serverproveit.azurewebsites.net/api/avaliacao/unica/" + id, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((avaliacao) => {
                console.log(avaliacao);
                setEstrelas(avaliacao?.estrelas);
                setComentario(avaliacao?.comentario);
                setNomeReceita(avaliacao?.nomeReceita);
                setReceita_id(avaliacao?.receita_id);
                setUsuario_id(avaliacao?.usuario_id);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao bsucar avaliação, tente novamente mais tarde.', 'error');
            });
    }

    async function EditarAvaliacao() {
        const errors = {};

        if (!comentario.trim()) {
            errors.comentario = "O comentário é obrigatório";
        }

        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        const body = { idAvaliacao, estrelas, comentario, usuario_id, receita_id };
        const headers = await HeaderRequisicao(navigation);

        fetch("https://serverproveit.azurewebsites.net/api/avaliacao", {
            method: "PUT",
            headers,
            body: JSON.stringify(body)
        })
            .then((response) => {
                showToast('Avaliação editada!', 'Sua avaliação foi editada com sucesso!', 'success');
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao editar avaliação, tente novamente mais tarde.', 'error');
            })
    }

    useEffect(() => {
        BuscarAvaliacao();
    }, []);

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.ratePresentation}>Receita: <Text style={{ color: '#FF7152' }}>{nomeReceita}</Text></Text>

            <View style={styles.rating}>
                <Text style={styles.ratePresentation}>O que <Text style={{ color: '#FF7152' }}>você</Text> achou?</Text>
                <LinearGradient start={{ x: -1, y: 1 }} end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.ratingContainer}>
                    <AirbnbRating
                        ratingColor='#fff'
                        count={5}
                        reviews={[
                            'Terrível',
                            'Ruim',
                            'Okay',
                            'Ótimo',
                            'Sensacional!',
                        ]}
                        size={35}
                        selectedColor='#fff'
                        unSelectedColor='#505050'
                        reviewColor='#fff'
                        onFinishRating={handleRatingChange}
                    />
                    <TextInput
                        placeholder={'O que você tem a dizer?'}
                        style={styles.commentInput}
                        textAlignVertical="top"
                        multiline={true}
                        value={comentario}
                        onChangeText={(texto) => setComentario(texto)}
                    />
                    <TouchableOpacity style={styles.rateButton} onPress={() => setVisibleModal(true)}>
                        <Text style={styles.rateButtonText}>Avaliar</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <View style={{ paddingVertical: 50 }} />

            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
            >
                <ActionModal
                    handleClose={() => setVisibleModal(false)}
                    handleAction={() => EditarAvaliacao()}
                    status={'put'}
                />

            </Modal>
        </ScrollView>
    )
}