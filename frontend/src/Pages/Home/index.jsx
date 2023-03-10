import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, SectionList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Raleway_100Thin, Raleway_500Medium, Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import CarrosselCategorias from '../../components/CartaoCategoria/CartaoCategoria';
import CartaoReceita from '../../components/CartaoReceita/CartaoReceita';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default function Home() {
    const username = "Convidado";

    return (
        <View style={styles.main}>

            {/*Header principal*/}
            <View style={styles.header}>
                <LinearGradient colors={['#FF7152', '#FFB649']} style={[styles.header, styles.shadowProp]}>

                    {/*Header secundária (logo e eventual botão)*/}
                    <View style={styles.subHeader}>
                        <Image
                            style={{ width: 100, height: 70 }}
                            source={require('../../assets/proveitLogo.png')}
                        />
                    </View>

                    {/*Apresentação*/}
                    <View>
                        <Text style={styles.TextoSecundario}>Bem-vindo(a),</Text>
                        <Text style={styles.Text}>{username}</Text>
                    </View>

                    <View style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
                        <Text style={styles.subTexto}>O que você deseja hoje?</Text>

                        {/*Scroll categorias*/}
                        <CarrosselCategorias></CarrosselCategorias>
                    </View>

                    {/*Input ingredientes*/}
                    <View style={styles.containerCentralizado}>
                        <TextInput style={styles.ingredienteInput} placeholder='Pesquisa por ingredientes'></TextInput> <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff' }}/>
                    </View>

                </LinearGradient>
            </View>

            <View style={styles.listamento}>
                <Text style={styles.categoria}>O que há de <View style={{ color: '#FF7152' }}>novo?</View></Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <CartaoReceita></CartaoReceita>
                <CartaoReceita></CartaoReceita>
            </View>

            <View style={styles.listamento}>
                <Text style={styles.categoriaBig}>Popular <View style={{ color: '#FF7152' }}>hoje</View></Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <CartaoReceita></CartaoReceita>
                <CartaoReceita></CartaoReceita>
                <CartaoReceita></CartaoReceita>
                <CartaoReceita></CartaoReceita>
            </View>

        </View>

    )
}


const styles = StyleSheet.create({

    //principal
    main: {
        backgroundColor: '#fff',
        alignSelf: 'stretch'
    },

    containerCentralizado: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    //header
    logoMini: {
        height: '70px',
        backgroundColor: 'red'
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 500,
        left: 0,
        top: 0,
        borderBottomLeftRadius: 65,
        borderBottomRightRadius: 65,

        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    subHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItens: 'center',
        justifyContent: 'center'
    },

    shadowProp: {
        paddingTop: '20px',
        paddingBottom: '30px',
        shadowOffset: { largura: 100, altura: 100 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    Text: {
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 700,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3
    },

    TextoSecundario: {
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.8)',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3
    },

    subTexto: {
        fontFamily: 'Raleway_600SemiBold',
        color: '#fff',
        fontWeight: '400'
    },

    ingredienteInput: {
        marginHorizontal: '5px',
        paddingHorizontal: '7px',
        fontSize: '11px',
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        height: '35px',
        width: '296px',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    //listas
    listamento: {
        textAlign: 'center',
        margin: '40px',
    },

    categoria: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: '20px',
        color: '#505050',
    },

    categoriaBig: {
        marginTop: '40px',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: '30px',
        color: '#505050',
    }

});
