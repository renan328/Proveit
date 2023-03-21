import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { faBookmark, faStar, faAngleLeft, faClock, faUtensils, faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


const screenHeight = Dimensions.get('window').height;

export default function ReceitaSingle({ navigation }) {

    const [saved, setSaved] = useState(false);

    const addSave = () => {
        setSaved(!saved);
    };

    return (
        <View style={styles.container}>

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
                        <Text style={styles.description}>Bolo de chocolate com cobertura de chocolate branco</Text>
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
                            <FontAwesomeIcon icon={faUtensils} size={60} style={styles.detailIcon} />
                            <Text style={styles.detailText}>12 porções</Text>
                        </View>
                        <View style={styles.divBar}></View>
                        <View style={styles.subDetail}>
                            <FontAwesomeIcon icon={faClock} size={60} style={styles.detailIcon} />
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

                    <TouchableOpacity style={styles.detailsContainer}  onPress={() => navigation.navigate('Perfil')}>
                        <View>
                            
                        </View>
                        <View style={{marginHorizontal: '8px'}}>
                            <Text style={styles.mainUserText}>User Name</Text>
                            <Text style={styles.linkUserText}>@username</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#fff'
    },

    header: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },

    headerIcon: {
        color: '#fff',
        marginVertical: '20px',
        marginHorizontal: '12px',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        paddingVertical: '10px',
        paddingHorizontal: '5px',
        backgroundColor: 'rgba(80, 80, 80, 0.46)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        top: -60,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },

    mainHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    starsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '15px'
    },

    star: {
        marginBottom: 0
    },

    mainTexts: {
        flex: 1,
        alignItems: 'center',
        top: -18
    },

    mainTitle: {
        color: '#505050',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: '25px',
        textAlign: 'center',
        width: '85%',
    },

    description: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.4)',
        fontFamily: 'Raleway_500Medium',
        width: '70%',
        textAlign: 'center',
    },

    caloryCounter: {
        paddingHorizontal: '12px',
        paddingVertical: '2px',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        flex: 1
    },

    caloryText: {
        fontSize: 11,
        color: '#fff',
        fontFamily: 'Raleway_500Medium'
    },

    detailsContainer: {
        marginVertical: '10px',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: '20px',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 4,
    },

    subDetail: {
        flex: 1,
        alignItems: 'center',
        color: '#fff',
    },

    divBar: {
        height: '90%',
        width: '2px',
        backgroundColor: '#fff'
    },

    detailText: {
        fontFamily: 'Raleway_700Bold',
        color: '#fff',
        marginTop: '5px'
    },

    detailIcon: {
        color: '#fff',
    },

    markButton: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'space-between',
        paddingVertical: '20px',
        paddingHorizontal: '30px',
    },

    mainUserText: {
        fontSize: '25px',
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152'
    },

    linkUserText: {
        fontSize: '15px',
        fontFamily: 'Raleway_700Bold',
        color: '#505050'
    },


});