import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { faBookmark, faStar, faAngleLeft, faClock, faUtensils, faHeart, faEllipsisVertical, faCarrot, faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import PassoReceita from '../../components/PassoReceita/PassoReceita';
import IngredienteReceita from '../../components/IngredienteReceita/IngredienteReceita';
import ComentarioSingle from '../../components/ComentarioSingle/ComentarioSingle';
import { ScrollView } from 'react-native-gesture-handler';
import { AirbnbRating } from 'react-native-ratings';
import styles from './receitasingle.module';


const screenHeight = Dimensions.get('window').height;

export default function ReceitaSingle({ navigation }) {

    const [saved, setSaved] = useState(false);

    const addSave = () => {
        setSaved(!saved);
    };

    return (
        <ScrollView style={styles.container}>

            <ImageBackground source={require('../../assets/cat_bolos.jpg')} style={{ height: screenHeight * 0.5 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesomeIcon style={styles.headerIcon} icon={faAngleLeft} size={28} /></TouchableOpacity>
                    <Menu>
                        <MenuTrigger>
                            <FontAwesomeIcon icon={faEllipsisVertical} style={styles.headerIcon} size={28} color={'#fff'} />
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption style={{ marginVertical: '10px', marginHorizontal: '5px' }} onSelect={() => alert(`Compartilhar`)} text='Compartilhar' />
                            <MenuOption style={{ marginVertical: '10px', marginHorizontal: '5px' }} onSelect={() => alert(`Denunciar`)} text='Denunciar' />
                        </MenuOptions>
                    </Menu>
                </View>
            </ImageBackground>

            <View style={styles.mainContainer}>

                <View style={styles.mainHeader}>
                    <View style={styles.starsContainer}>

                        <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>
                        <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>
                        <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>
                        <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>
                        <FontAwesomeIcon style={styles.star} icon={faStar} size={20} color={'#FF7152'} ></FontAwesomeIcon>

                    </View>


                    <View style={styles.mainTexts}>
                        <Text style={styles.mainTitle}>Bolo de chocolate</Text>
                        <Text style={styles.description}>Bolo de chocolate com cobertura cobertura coberturacoberturacoberturacoberturacoberturacoberturacoberturacobertura cobertura cobertura coberturacobertura cobertura cobertura de chocolate branco</Text>
                    </View>


                    <View style={styles.caloryContainer}>
                        <LinearGradient start={{ x: -1, y: 1 }}
                            end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.caloryCounter}>
                            <Text style={styles.caloryText}>Valor calórico: <Text style={{ fontFamily: 'Raleway_700Bold' }}>100 g / 274 kcal</Text></Text>
                        </LinearGradient>
                    </View>

                    <LinearGradient start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.detailsContainer}>
                        <View style={styles.subDetail}>
                            <FontAwesomeIcon icon={faUtensils} size={70} style={styles.detailIcon} />
                            <Text style={styles.detailText}>12 porções</Text>
                        </View>
                        <View style={styles.divBar}></View>
                        <View style={styles.subDetail}>
                            <FontAwesomeIcon icon={faClock} size={70} style={styles.detailIcon} />
                            <Text style={styles.detailText}>15 horas</Text>
                        </View>
                    </LinearGradient>


                    <TouchableOpacity onPress={() => addSave()} style={{
                        marginTop: '10px',
                        display: 'flex',
                        flexDirection: 'row',
                        width: '42%',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        justifyContent: 'space-between',
                        paddingVertical: '10px',
                        paddingHorizontal: '20px',
                        backgroundColor: saved ? '#ffc9bd' : '#fff',
                    }}>
                        <FontAwesomeIcon icon={faBookmark} style={styles.markIcon} size={25} color={saved ? '#FF7152' : '#505050'} />
                        <Text style={{
                            color: saved ? '#FF7152' : '#505050', fontSize: '20px',
                            fontFamily: 'Raleway_600SemiBold',
                        }}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.detailsContainer} onPress={() => navigation.navigate('Perfil')}>
                        <View>

                        </View>
                        <View style={{ marginHorizontal: '8px' }}>
                            <Text style={styles.mainUserText}>User Name</Text>
                            <Text style={styles.linkUserText}>@username</Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            borderBottomColor: '#505050',
                            opacity: 0.4,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: '330px', height: '5px',
                            marginTop: '15px'
                        }} />
                </View>
                <View style={styles.ingredients}>

                    <View style={styles.ingredientsHeader}>
                        <FontAwesomeIcon icon={faCarrot} size={50} color='#FF7152' />
                        <Text style={styles.ingredientsTitle}>Ingredientes</Text>
                    </View>

                    <View style={styles.ingredientsList}>
                        <IngredienteReceita id={1} measure={'500g'} text={'Chocolate'} />
                        <IngredienteReceita id={2} measure={'1kg'} text={'Farinha'} />
                        <IngredienteReceita id={3} measure={'2kg'} text={'Açúcar'} />
                        <IngredienteReceita id={4} measure={'6'} text={'Ovos'} />
                        <IngredienteReceita id={5} measure={'50g'} text={'Fermento'} />

                    </View>
                </View>

                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '330px', height: '5px',
                        marginTop: '15px'
                    }} />

                <View style={styles.steps}>

                    <View style={styles.stepsHeader}>
                        <FontAwesomeIcon icon={faKitchenSet} size={50} color='#FF7152' />
                        <Text style={styles.stepsTitle}>Passos</Text>
                    </View>

                    <View style={styles.stepList}>
                        <PassoReceita step={1} text={'Leve ao fogo o leite a margarina e o chocolate.'} />
                        <PassoReceita step={2} text={'Leve ao fogo o leite a margarina e o chocolate. Leve ao fogo o leite a margarina e o chocolate. Leve ao fogo o leite a margarina e o chocolate.'} />
                        <PassoReceita step={3} text={'Leve ao fogo o leite a margarina e o chocolate.'} />
                        <PassoReceita step={4} text={'Leve ao fogo o leite a margarina e o chocolate.'} />
                        <PassoReceita step={5} text={'Leve ao fogo o leite a margarina e o chocolate.'} />

                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '330px', height: '5px',
                        marginTop: '15px'
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
                        width: '330px', height: '5px',
                        marginTop: '15px'
                    }} />

                <View style={styles.rating}>
                    <Text style={styles.ratePresentation}>O que <Text style={{ color: '#FF7152' }}>você</Text> achou?</Text>
                    <LinearGradient start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.ratingContainer}>
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
                        />
                        <TouchableOpacity style={styles.rateButton} onPress={() => alert(`Avaliado`)}>
                            <Text style={styles.rateButtonText}>Avaliar</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <View style={styles.comments}>
                    <View style={styles.commentsHeader}>
                        <Text style={styles.commentsTitle}>Comentários</Text>
                    </View>
                    <View style={styles.commentsContainer}>
                        <ComentarioSingle userPicture={'imagem'} userName={'Pedro Silva'} stars={5} comment={'Achei uma ótima receita pra ser bem sincero.'} />

                        <ComentarioSingle userPicture={'imagem'} userName={'Pedro Silva'} stars={5} comment={'Achei uma ótima receita pra ser bem sincero.'} />
                    </View>
                </View>

            </View>
        </ScrollView >
    );
}