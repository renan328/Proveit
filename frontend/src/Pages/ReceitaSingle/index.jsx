import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, Appearance, useColorScheme, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import PassoReceita from '../../components/PassoReceita/PassoReceita';
import IngredienteReceita from '../../components/IngredienteReceita/IngredienteReceita';
import ComentarioSingle from '../../components/ComentarioSingle/ComentarioSingle';
import { LinearGradient } from 'expo-linear-gradient';
import { AirbnbRating } from 'react-native-ratings';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faStar, faAngleLeft, faClock, faUtensils, faSeedling, faEllipsisVertical, faCarrot, faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from '@react-navigation/native';
import stylesDark from './receitasingle.moduleDark';
import stylesLight from './receitasingle.module';
import LottieView from 'lottie-react-native';
import { BlurView } from 'expo-blur';
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from "../../AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import showToast from '../../../hooks/toasts';
import { LoadingReceita } from '../../components/LoadingReceita/LoadingReceita'

const screenHeight = Dimensions.get('window').height;

export default function ReceitaSingle({ navigation }) {

    // estilos
    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;
    // id da receieta
    const route = useRoute();
    const { id } = route.params;
    // avaliação
    const [estrelas, setEstrelas] = useState(5);
    const [comentario, setComentario] = useState('');
    const [usuario_id, setUsuario_id] = useState();
    const [receita_id, setReceita_id] = useState(id);
    // receita
    const [dadosReceita, setDadosReceita] = useState([]);
    // favorito
    const [saved, setSaved] = useState(false);
    const [numCliques, setNumCliques] = useState(0);
    const [loading, setLoading] = useState(false);

    const stars = dadosReceita.mediaEstrelas;
    function StarCounter() {
        const starsBox = [];
        for (let index = 0; index < stars; index++) {
            starsBox.push(
                <View key={index}>
                    <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} />
                </View>
            );
        }
        return (
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 5, }}>{starsBox}</View>
        )
    };

    async function addSave() {
        const headers = await HeaderRequisicao(navigation);

        if (numCliques > 10) {
            showToast('Foi mal!', 'Número máximo de cliques atingido!', 'error');
            return;
        }

        setNumCliques(numCliques + 1);

        if (!saved) {
            const body = { usuario_id, receita_id };

            fetch("https://serverproveit.azurewebsites.net/api/ReceitaFavorita", {
                method: "POST",
                headers,
                body: JSON.stringify(body)
            })
                .then((response) => {
                    showToast('Favoritado!', 'Você salvou essa receita!', 'success');
                })
                .catch((error) => {
                    showToast('Foi mal!', 'Erro ao favoritar receita', 'error');
                });
        } else {

            fetch("https://serverproveit.azurewebsites.net/api/ReceitaFavorita/" + receita_id + "/" + usuario_id, {
                method: "DELETE",
                headers,
            })
                .then((response) => {
                    if (response.ok) {
                        showToast('Sucesso!', 'Favorito removido com sucesso!', 'success');
                    }
                    else {
                        showToast('Foi mal!', 'Erro ao remover favorito', 'error');
                    }
                })
                .catch((error) => {
                    showToast('Foi mal!', 'Erro ao remover favorito', 'error');
                });
        }

        setSaved(!saved);
    };

    function handleRatingChange(ratingValue) {
        setEstrelas(ratingValue)
    }

    function handleAssessment() {


        const body = { estrelas, comentario, usuario_id, receita_id };

        fetch("https://serverproveit.azurewebsites.net/api/avaliacao", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => {
                showToast('Avaliação cadastrada!', 'Sua avaliação foi cadastrada!', 'success');
            })
            .catch((error) => {
                console.log(error);
                showToast('Foi mal!', 'Erro avaliar receita, tente novamente mais tarde.', 'error');
            })
    }

    async function AdicionarIdReceitaAoHistorico(idReceita) {
        try {
            const historicoAntigo = await AsyncStorage.getItem('historicoReceitas') ?? '';

            let novoHistorico = [];
            try {
                novoHistorico = JSON.parse(historicoAntigo);
            } catch (error) {
                console.log('Erro ao fazer o parse do histórico antigo:', error);
            }

            if (!novoHistorico.includes(idReceita)) {
                novoHistorico.push(idReceita);
            }

            await AsyncStorage.setItem('historicoReceitas', JSON.stringify(novoHistorico));
        } catch (error) {
            showToast('Foi mal!', 'Erro ao adicionar receia ao histórico!', 'error');
            console.log(error);
        }
    }

    async function BuscarReceita() {
        const headers = await HeaderRequisicao(navigation);
        const userDataJWT = await DadosUsuario();
        setUsuario_id(userDataJWT.ID);
        setLoading(true)

        fetch("https://serverproveit.azurewebsites.net/api/receita/" + id, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
                setLoading(false);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar a receita, tente novamente mais tarde.', 'error');
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    async function VerificarFavorito() {
        const headers = await HeaderRequisicao(navigation);
        const userDataJWT = await DadosUsuario();
        setLoading(true);

        fetch("https://serverproveit.azurewebsites.net/api/ReceitaFavorita/verificar/" + id + "/" + userDataJWT.ID, {
            method: "GET",
            headers
        })
            .then((response) => response.text())
            .then((text) => {
                if (text === "true") {
                    setSaved(true);
                } else {
                    setSaved(false);
                }
            })
            .catch((error) => {
                setLoading(false);
                showToast('Foi mal!', 'Erro ao verificar se é favorito, tente novamente mais tarde.', 'error');
            });
    };

    if (!dadosReceita) {
        return (
            <View>
                <Text style={styles.mainTitle}>Falha ao carregar os dados.</Text>
            </View>
        );
    }

    useEffect(() => {
        BuscarReceita();
        VerificarFavorito();
        AdicionarIdReceitaAoHistorico(receita_id);
    }, []);

    if (!loading) {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={{ uri: dadosReceita.receita?.foto }} style={styles.mainImage} imageStyle={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
                            <FontAwesomeIcon icon={faAngleLeft} size={28} style={{ color: scheme === 'dark' ? '#ddddddcf' : '#303030' }} />
                        </TouchableOpacity>

                        {
                            dadosReceita.receita?.aproveitamento == true &&
                            <View style={styles.AproveitamentoTrue}>
                                <FontAwesomeIcon icon={faSeedling} size={18} color="#FFF" />
                            </View>
                        }


                        <Menu>
                            <MenuTrigger style={styles.headerIcon}>
                                <FontAwesomeIcon icon={faEllipsisVertical} size={28} style={{ color: scheme === 'dark' ? '#ddddddcf' : '#303030' }} />
                            </MenuTrigger>
                            <MenuOptions>
                                <MenuOption style={styles.menuOption} onSelect={() => showToast('Que pena!', 'Ainda não disponível', 'error')} text='Compartilhar' />
                                <MenuOption style={styles.menuOption} onSelect={() => alert(`Por favor, mande um email para o suporte fazendo a denuncia com o nome da receita. E-mail: admproveit@gmail.com`)} text='Denunciar' />
                            </MenuOptions>
                        </Menu>
                    </View>
                    <BlurView style={styles.mainHeader}>
                        <View style={styles.mainHeaderWhite}>
                            <TouchableOpacity onPress={addSave} style={styles.favButton} >
                                <FontAwesomeIcon icon={faHeart} style={styles.markIcon} size={25} color={saved ? '#FF7152' : '#505050'} />
                            </TouchableOpacity>

                            <View style={styles.mainTexts}>
                                <View style={styles.starsContainer}>
                                    {StarCounter()}
                                </View>
                                <Text style={styles.mainTitle}>{dadosReceita.receita?.nomeReceita}</Text>
                            </View>
                        </View>
                    </BlurView>
                </ImageBackground>
                <View style={styles.mainContainer}>
                    <Text style={styles.description}>{dadosReceita.receita?.descricao}</Text>

                    <LinearGradient start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.detailsContainer}>
                        <View style={styles.subDetail}>
                            <FontAwesomeIcon icon={faUtensils} size={40} style={styles.detailIcon} />
                            <Text style={styles.subDetailText}>Rendimento</Text>
                            <Text style={styles.detailText}>{dadosReceita.receita?.porcoes} porções</Text>
                        </View>
                        <View style={styles.divBar}></View>
                        <View style={styles.subDetail}>
                            <FontAwesomeIcon icon={faClock} size={40} style={styles.detailIcon} />
                            <Text style={styles.subDetailText}>Preparo</Text>
                            <Text style={styles.detailText}>{dadosReceita.receita?.tempoPreparo} {dadosReceita.receita?.tempo}</Text>
                        </View>
                    </LinearGradient>

                    <View style={styles.detailsContainer}>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={styles.mainUserText}>@{dadosReceita.receita?.nomeTag}</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#505050',
                            opacity: 0.4,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: '80%', height: 5,
                            marginTop: 15,
                            alignSelf: 'center'
                        }} />
                </View>
                <View style={styles.ingredients}>
                    <View style={styles.ingredientsHeader}>
                        <FontAwesomeIcon icon={faCarrot} size={50} color='#FF7152' />
                        <Text style={styles.ingredientsTitle}>Ingredientes</Text>
                    </View>
                    <View style={styles.ingredientsList}>
                        {dadosReceita.receita?.ingredientes.map((ingrediente, index) => (
                            <IngredienteReceita key={index} id={ingrediente.idIngredientesReceita} quantidade={ingrediente.quantidade} medida={ingrediente.medida} nome={ingrediente.nomeIngrediente} />
                        ))}
                    </View>
                </View>

                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '80%', height: 5,
                        marginTop: 15,
                        alignSelf: 'center'
                    }} />
                <View style={styles.steps}>
                    <View style={styles.stepsHeader}>
                        <FontAwesomeIcon icon={faKitchenSet} size={50} color='#FF7152' />
                        <Text style={styles.stepsTitle}>Passos</Text>
                    </View>
                    <View style={styles.stepList}>
                        {dadosReceita.receita?.passos.map((passo, index) => (
                            <PassoReceita key={index} numPasso={index + 1} passoTexto={passo.passoTexto} />
                        ))}
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '80%', height: 5,
                        marginTop: 15,
                        alignSelf: 'center'
                    }} />
                <View style={styles.ready}>
                    <Text style={styles.readySubText}>E já está</Text>
                    <Text style={styles.readyMainText}>PRONTO!</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: '#606060',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '80%', height: 5,
                        marginTop: 15,
                        alignSelf: 'center'
                    }} />
                <View style={styles.rating}>
                    <Text style={styles.ratePresentation}>O que <Text style={{ color: '#FF7152' }}>você</Text> achou?</Text>
                    {/* <LinearGradient start={{ x: -1, y: 1 }} end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.ratingContainer}> */}
                    <View style={styles.ratingContainer}>
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
                            defaultRating={0}
                            size={35}
                            selectedColor='#ff7152'
                            unSelectedColor='#505050'
                            reviewColor='#ff7152'
                            onFinishRating={handleRatingChange}
                            style={{ fontFamily: 'Raleway_700Bold' }}
                        />
                        <TextInput
                            placeholder={'O que você tem a dizer?'}
                            style={styles.commentInput}
                            textAlignVertical="top"
                            multiline={true}
                            maxLength={400}
                            value={comentario}
                            onChangeText={(texto) => setComentario(texto)}
                        />
                        <TouchableOpacity style={styles.rateButton} onPress={handleAssessment}>
                            <Text style={styles.rateButtonText}>Avaliar</Text>
                        </TouchableOpacity>
                    </View>
                    {/* </LinearGradient> */}
                </View>
                <View style={styles.comments}>
                    <View style={styles.commentsHeader}>
                        <LottieView
                            source={require('../../assets/lottie/comment.json')} // Caminho para o arquivo JSON do Lottie
                            autoPlay
                            loop
                            style={{ height: 50, alignSelf: 'center', marginBottom: 10 }}
                        />
                        <Text style={styles.commentsTitle}>Comentários</Text>
                    </View>
                    <View style={styles.commentsContainer}>
                        {dadosReceita.avaliacoes?.map((avaliacoes, index) => (
                            <ComentarioSingle key={index} userPicture={{ uri: avaliacoes.usuarioFoto }} userName={avaliacoes.usuarioNome} stars={avaliacoes.estrelas} comment={avaliacoes.comentario} />
                        ))}
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#505050',
                            opacity: 0.4,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: '90%',
                            height: 5,
                            marginTop: 100,
                            alignSelf: 'center'
                        }} />
                </View>
            </ScrollView>
        )
    } else {
        return <LoadingReceita message={'Carregando receita...'} />
    }
}