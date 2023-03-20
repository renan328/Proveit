import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { SelectList } from 'react-native-dropdown-select-list'

export default function Cadastro_de_usuario({ navigation }) {
    
    const [selected, setSelected] = React.useState('');
 
    const data = [
        {key:'1', value:'teste'},
        {key:'2', value:'teste'},
        {key:'3', value:'teste'},
        {key:'4', value:'teste'}
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
                <Text style={styles.digite_nome}>Nome</Text>
                <TextInput style={styles.nomeInput}
                    placeholder='Digite seu nome'></TextInput>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff' }} />
                <Text style={styles.digite_nomeusuario}>Nome de usuário</Text>
                <TextInput style={styles.nomeusuarioInput}
                    placeholder='Digite seu nome de usuário'></TextInput>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff' }} />
                <Text style={styles.digite_email}>E-mail</Text>
                <TextInput style={styles.emailInput}
                    placeholder='Digite seu e-mail'></TextInput>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff' }} />
                <Text style={styles.digite_senha}>Senha</Text>
                <TextInput style={styles.senhaInput}
                    placeholder='Digite sua senha'></TextInput>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff' }} />
                <TextInput style={styles.redigitesenhaInput}
                    placeholder='Redigite sua senha'></TextInput>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff' }} />
                <Text style={styles.digite_favcategoria}>Suas categorias favoritas</Text>
                <SelectList style={styles.favcategoriaInput}
                    data={data} 
                    setSelected= {setSelected}
                    placeholder='Alguma categoria'
                    searchPlaceholder = 'Adicionar  '
                    boxStyles={styles.favcategoriaInput}
                    inputStyles={styles.favcategoriafonteInput}
                    dropdownStyles={styles.favcategorialistaInput}
                    dropdownTextStyles={styles.favcategoriafonteInput}
                />           
            </View>
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
        fontFamily: 'Raleway_600SemiBold',
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

    nomeusuarioInput: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '11px',
        fontFamily: 'Raleway_600SemiBold',
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

    emailInput: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '11px',
        fontFamily: 'Raleway_600SemiBold',
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

    senhaInput: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '11px',
        fontFamily: 'Raleway_600SemiBold',
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
        fontFamily: 'Raleway_600SemiBold',
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

    digite_favcategoria: {
        display: 'flex',
        marginLeft: 47,
    },

    favcategoriaInput: {
        marginHorizontal: '47px',
        marginTop: 10,    
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,                      
    },
   
    favcategoriafonteInput:{
        fontSize: '11px',
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',   
        marginTop: 5,    
    },

    favcategorialistaInput:{        
        marginHorizontal: '47px',      
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,        
    },   

    button: {
        width: 200,
        marginTop:30,
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