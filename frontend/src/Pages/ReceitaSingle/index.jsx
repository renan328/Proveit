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

const screenHeight = Dimensions.get('window').height;

export default function ReceitaSingle({ navigation }) {

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;
    const route = useRoute();
    const { id } = route.params;
    const [estrelas, setEstrelas] = useState(5);
    const [comentario, setComentario] = useState('');
    const [usuario_id, setUsuario_id] = useState(1);
    const [receita_id, setReceita_id] = useState(id);
    const [dadosReceita, setDadosReceita] = useState([]);

    useEffect(() => {
        fetch("https://cloudproveit.azurewebsites.net/api/receita/" + id, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
            })
            .catch((error) => {
                alert("Erro ao buscar receita");
            });
    }, [])

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
    }

    const [saved, setSaved] = useState(false);
    const addSave = () => {
        setSaved(!saved);
        if (saved !== true) {
            const body = { usuario_id, receita_id };
            fetch("https://cloudproveit.azurewebsites.net/api/ReceitaFavorita", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
                .then((response) => { showSuccessToast })
                .catch((error) => {
                    console.log(error);
                    showFailToast;
                });
            console.log(body);
        }
    }

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
                        <TouchableOpacity onPress={() => addSave()} style={styles.favButton} >
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

                <TouchableOpacity style={styles.detailsContainer} onPress={() => navigation.navigate('Perfil')}>
                    <View>
                        <Image source={require('../../assets/user.jpg')} style={styles.userPic}></Image>
                    </View>
                    <View style={{ marginHorizontal: 8 }}>
                        <Text style={styles.mainUserText}>User Name</Text>
                        <Text style={styles.linkUserText}>@{dadosReceita.receita?.nomeTag}</Text>
                    </View>
                </TouchableOpacity>

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
                    {dadosReceita.receita?.ingredientes.map((ingrediente) => (
                        <IngredienteReceita id={ingrediente.idIngredientesReceita} quantidade={ingrediente.quantidade} medida={ingrediente.medida} nome={ingrediente.nomeIngrediente} />
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
                    {dadosReceita.receita?.passos.map((passo) => (
                        <PassoReceita numPasso={passo.numPasso} passoTexto={passo.passoTexto} />
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
                        unSelectedColor='rgb(255,255,255,0.5)'
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
                    {dadosReceita.avaliacoes?.map((avaliacoes) => (
                        <ComentarioSingle userPicture={{ uri: avaliacoes.usuarioFoto }} userName={avaliacoes.usuarioNome} stars={avaliacoes.estrelas} comment={avaliacoes.comentario} />
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