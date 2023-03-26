import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import validator from 'validator';
import styles from './cadastrodeusuario.module';


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

    const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Forte!')
        }
        else {
            setErrorMessage('Fraca')
        }
        
    }

    return (

        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.CadastreSe}>Cadastre-se</Text>

                <View
                    style={{
                        borderBottomColor: '#505050',
                        opacity: 0.4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: '330px', height: '5px',
                        marginTop: '15px'
                    }}
                />
            </View>

            {/* Imagem de perfil */}
            <View style={styles.cadastro}>
                <Text style={styles.suafoto}>Sua foto</Text>

                <View style={styles.BorderIcon}>
                    <FontAwesomeIcon style={styles.IconCamera} icon={faCamera} size={58} />
                </View>
            </View>

            {/* Formulário */}
            <View style={styles.inputs}>
                <View style={{ marginTop: 35 }}>
                    <Text style={styles.digite_nome}>Nome</Text>
                    <TextInput style={styles.nomeInput} placeholder='Digite seu nome'></TextInput>
                </View>

                <View style={styles.inputNomeUsuario}>
                    <Text style={styles.digite_nomeusuario}>Nome de usuário</Text>
                    <TextInput style={styles.nomeusuarioInput} placeholder='Digite seu nome de usuário'></TextInput>
                </View>

                <View style={styles.inputEmail}>
                    <Text style={styles.digite_email}>E-mail</Text>
                    <TextInput style={styles.emailInput} placeholder='Digite seu e-mail'></TextInput>
                </View>

                <View style={styles.InputSenha}>
                    <Text style={styles.digite_senha}>Senha</Text>
                    <TextInput onChange={(e) => validate(e.target.value)} style={styles.senhaInput} placeholder='Digite sua senha'></TextInput> <br />
                    <View style={styles.senhafonteInput}>
                        <span style={{}}>{errorMessage}</span>
                    </View>
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
                <TouchableOpacity onPress={() => navigation.navigate('Main')} >
                    <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 1 }} style={styles.button} >
                        <Text style={styles.buttonText}>Pronto</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}
