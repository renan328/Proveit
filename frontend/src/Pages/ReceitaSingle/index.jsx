import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, Appearance, useColorScheme, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import PassoReceita from '../../components/PassoReceita/PassoReceita';
import IngredienteReceita from '../../components/IngredienteReceita/IngredienteReceita';
import ComentarioSingle from '../../components/ComentarioSingle/ComentarioSingle';
import { LinearGradient } from 'expo-linear-gradient';
import { AirbnbRating } from 'react-native-ratings';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faStar, faAngleLeft, faClock, faUtensils, faHeart, faEllipsisVertical, faCarrot, faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from '@react-navigation/native';
import stylesDark from './receitasingle.moduleDark';
import stylesLight from './receitasingle.module';
import { BlurView } from 'expo-blur';
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from "../../AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    async function BuscarReceita() {
        const headers = await HeaderRequisicao(navigation);
        const userDataJWT = await DadosUsuario();
        setUsuario_id(userDataJWT.ID);

        fetch("https://cloudproveit.azurewebsites.net/api/receita/" + id, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
            })
            .catch((error) => {
                alert("Erro ao buscar receita");
            });
    }

    async function VerificarFavorito() {
        const headers = await HeaderRequisicao(navigation);
        const userDataJWT = await DadosUsuario();

        fetch("https://cloudproveit.azurewebsites.net/api/ReceitaFavorita/verificar/" + id + "/" + userDataJWT.ID, {
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
                alert("Erro ao verificar se é favorito");
            });
    };

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
            console.log(error);
        }
    }

    useEffect(() => {
        BuscarReceita();
        VerificarFavorito();
        AdicionarIdReceitaAoHistorico(receita_id);
    }, []);

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
            alert('Número máximo de cliques atingido!');
            return;
        }

        setNumCliques(numCliques + 1);

        if (!saved) {
            const body = { usuario_id, receita_id };

            fetch("https://cloudproveit.azurewebsites.net/api/ReceitaFavorita", {
                method: "POST",
                headers,
                body: JSON.stringify(body)
            })
                .then((response) => { alert("Receita favoritada com sucesso!"); })
                .catch((error) => {
                    alert("Erro ao favoritar receita");
                });
            console.log(body);

        } else {

            fetch("https://cloudproveit.azurewebsites.net/api/ReceitaFavorita/" + receita_id + "/" + usuario_id, {
                method: "DELETE",
                headers,
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Favorito removido com sucesso!");
                    }
                    else {
                        alert("Erro ao remover favorito");
                    }
                })
                .catch((error) => {
                    alert("Erro ao remover favorito");
                });
        }

        setSaved(!saved);
    };

    function handleRatingChange(ratingValue) {
        setEstrelas(ratingValue)
    }

    function handleAssessment() {
        const body = { estrelas, comentario, usuario_id, receita_id };

        fetch("https://cloudproveit.azurewebsites.net/api/avaliacao", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => { alert("Avaliação cadastrada com sucesso!"); })
            .catch((error) => {
                console.log(error);
                showFailToast;
            })
        console.log(body);
    }

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={{ uri: dadosReceita.receita?.foto }} style={styles.mainImage} imageStyle={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesomeIcon style={styles.headerIcon} icon={faAngleLeft} size={28} /></TouchableOpacity>
                    <Menu>
                        <MenuTrigger>
                            <FontAwesomeIcon icon={faEllipsisVertical} style={styles.headerIcon} size={28} color={'#505050'} />
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption style={{ marginVertical: 10, marginHorizontal: 5 }} onSelect={() => alert(`Compartilhar`)} text='Compartilhar' />
                            <MenuOption style={{ marginVertical: 10, marginHorizontal: 5 }} onSelect={() => alert(`Denunciar`)} text='Denunciar' />
                        </MenuOptions>
                    </Menu>
                </View>
                <BlurView style={styles.mainHeader}>
                    <View style={styles.mainHeaderWhite}>
                        <TouchableOpacity onPress={addSave} style={styles.favButton} >
                            <FontAwesomeIcon icon={faBookmark} style={styles.markIcon} size={25} color={saved ? '#FF7152' : '#505050'} />
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
                    <View style={{ marginHorizontal: 8 }}>
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
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: '80%', height: 5,
                    marginTop: 15,
                    alignSelf: 'center'
                }} />
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
                        defaultRating={5}
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
                    <TouchableOpacity style={styles.rateButton} onPress={handleAssessment}>
                        <Text style={styles.rateButtonText}>Avaliar</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={styles.comments}>
                <View style={styles.commentsHeader}>
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
}