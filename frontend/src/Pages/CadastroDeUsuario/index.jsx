import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'

export default function CadastroDeUsuario({ navigation }) {

    const [selected, setSelected] = React.useState('');

    const data = [
        { key: '1', value: 'Aves' },
        { key: '2', value: 'Bebidas' },
        { key: '3', value: 'Bolos' },
        { key: '4', value: 'Carnes' },
        { key: '5', value: 'Doces' },
        { key: '6', value: 'Frutos do Mar' },
        { key: '7', value: 'Japones' },
        { key: '8', value: 'Lanches' },
        { key: '9', value: 'LowCarb' },
        { key: '10', value: 'Massa' },
        { key: '11', value: 'Molhos' },
        { key: '12', value: 'Rapidas' },
        { key: '13', value: 'Saladas' },
        { key: '14', value: 'Salgados' },
        { key: '15', value: 'Sanduiches' },
        { key: '16', value: 'Snacks' },
        { key: '17', value: 'Sobremesas' },
        { key: '18', value: 'Sopas' },
        { key: '19', value: 'Torta' },
        { key: '20', value: 'Vegano' },
        { key: '21', value: 'Vegetariano' },
    ];

    return (

        <View style={styles.container}>

            {/* Header */}
            <LinearGradient colors={['#FF7152', '#FFB649']} style={[styles.header, styles.shadowProp]}>
                <View style={styles.cadastro_de_usuario}>
                    <Text style={styles.texto_cadastro_de}>Cadastro de </Text>
                    <Text style={styles.texto_usuario}>Usuário</Text>
                </View>
                <Image
                    style={styles.usuario_icone}
                    source={require('../../assets/usuario96.png')}
                />
            </LinearGradient>

            {/* Imagem de perfil */}
            <View style={styles.cadastro}>
                <Text style={styles.suafoto}>Sua foto</Text>
                <Image
                    style={styles.cadastro_imagem}
                    source={require('../../assets/cadastro_imagem.png')}
                />
            </View>

            {/* Formulário */}
            <View style={styles.inputs}>
                <View style={styles.inputNome}>
                    <Text style={styles.digite_nome}>Nome</Text>
                    <TextInput style={styles.nomeInput} placeholder='Digite seu nome'></TextInput>
                </View>

                <View  style={styles.inputNomeUsuario}>
                    <Text style={styles.digite_nomeusuario}>Nome de usuário</Text>
                    <TextInput style={styles.nomeusuarioInput} placeholder='Digite seu nome de usuário'></TextInput>
                </View>
                                  
                <View style={styles.inputEmail}>
                    <Text style={styles.digite_email}>E-mail</Text>
                    <TextInput style={styles.emailInput} placeholder='Digite seu e-mail'></TextInput>
                </View>
                                
                <View style={styles.InputSenha}>
                    <Text style={styles.digite_senha}>Senha</Text>
                    <TextInput style={styles.senhaInput}  placeholder='Digite sua senha'></TextInput>
                    <TextInput style={styles.redigitesenhaInput} placeholder='Redigite sua senha'></TextInput>
                </View>
                               
                <View style={styles.InputCategoria}>
                <Text style={styles.digite_favcategoria}>Suas categorias favoritas</Text>
                    <MultipleSelectList style={styles.favcategoriaInput} data={data}
                    setSelected={setSelected}
                    placeholder='Alguma categoria'
                    searchPlaceholder='Adicionar'
                    notFoundText='Categoria não encontrada'
                    fontFamily='Raleway_600SemiBold'
                    boxStyles={styles.favcategoriaInput}
                    inputStyles={styles.favcategoriafonteInput}
                    dropdownStyles={styles.favcategorialistaInput}
                    dropdownTextStyles={styles.favcategoriafonteInput}>
                    
                    </MultipleSelectList>
                </View>
            </View>   

             {/* Botão */}
            <View style={styles.botoes}>
                <TouchableOpacity onPress={() => navigation.navigate('')} >
                    <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 1 }} style={styles.button} >
                        <Text style={styles.buttonText}>Pronto</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    inputs: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },

    header: {
        height: 103,
        width: '100%',
        borderBottomLeftRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        justifyContent: 'flex-end',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap'


    },


    cadastro_de_usuario: {
        top: -8
    },

    usuario_icone: {

        width: 78,
        height: 70,
    },

    texto_cadastro_de: {
        color: 'rgba(255, 255, 255, 0.65)',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 14,
        marginTop: 30,
    },

    texto_usuario: {
        color: '#fff',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 37,
    },


    cadastro: {
        alignItems: 'center'
    },

    suafoto: {
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 15,
        marginTop: 26,

    },

    cadastro_imagem: {
        width: 200,
        height: 200,
        marginTop: 10,
    },

    nomeInput: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '11px',
        color: '#505050',
        height: '50px',
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
        marginTop: 10

    },

    digite_nome: {
        display: 'flex',
        marginLeft: 47,
    },

    inputNomeUsuario:{
        marginTop:10
    },

    nomeusuarioInput: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '11px',
        color: '#505050',
        height: '50px',
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
        marginTop: 10

    },

    digite_nomeusuario: {
        display: 'flex',
        marginLeft: 47,
    },

    inputEmail:{
        marginTop:10
    },

    emailInput: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '11px',
        color: '#505050',
        height: '50px',
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
        marginTop: 10

    },

    digite_email: {
        display: 'flex',
        marginLeft: 47,
    },

    InputSenha:{
        marginTop:10
    },

    senhaInput: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '11px',
        color: '#505050',
        height: '50px',
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
        marginTop: 10

    },

    digite_senha: {
        display: 'flex',
        marginLeft: 47,
    },

    redigitesenhaInput: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '11px',
        color: '#505050',
        height: '50px',
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
        marginTop: 10
    },

    InputCategoria:{
        marginTop:10
    },

    digite_favcategoria: {
        display: 'flex',
    },

    favcategoriaInput: {
        width: 296,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    favcategoriafonteInput: {
        fontSize: '11px',
        color: '#505050',
        marginTop: 5,
    },

    favcategorialistaInput: {
        width: 296,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    button: {
        width: 200,
        marginTop: 30,
        backgroundColor: 'orange',
        color: '#FFF',
        borderRadius: 5,
        padding: 10,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Raleway_700Bold',
    },
});