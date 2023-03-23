import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'

export default function CadastroDeReceita({ navigation }) {

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
        <View style={styles.container} >
            {/* Header */}
            <LinearGradient colors={['#FF7152', '#FFB649']} style={[styles.header, styles.shadowProp]}>
                <View style={{ top: -8 }}>
                    <Text style={styles.textAdd}>Adicionar</Text>
                    <Text style={styles.textReceitas} >Receitas</Text>
                </View>
            </LinearGradient>

            {/* Fotos e Vídeo */}
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontFamily: 'Raleway_600SemiBold', fontSize: 15, marginTop: 26 }}> Foto e vídeo</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        style={{ width: 130, height: 130, marginTop: 10, flex: 1 }}
                        source={require('../../assets/cadastro_imagem.png')}
                    />
                    {/* <Image
                        style={{ width: 130, height: 130, marginTop: 10, flex: 1 }}
                        source={require('../../assets/video.png')}
                    /> */}
                </View>
            </View>

            {/* Formulário */}
            <View styels={styles.inputs}>
                <View style={{ marginTop: 25 }}>
                    <Text style={{ display: 'flex', marginLeft: 47, fontSize: 15 }}>Nome</Text>
                    <TextInput style={styles.nomeInput} placeholder='Digite o nome da receita'></TextInput>
                </View>


                <View style={{ margin: 25, display: 'flex', alignItems: "center" }}>
                    <Text style={{ display: 'flex', alignSelf: 'stretch', marginLeft: 23 }}>Categorias</Text>
                    <MultipleSelectList style={styles.categoriaInput} data={data}
                        setSelected={setSelected}
                        placeholder='Alguma categoria'
                        searchPlaceholder='Adicionar'
                        notFoundText='Categoria não encontrada'
                        fontFamily='Raleway_600SemiBold'
                        boxStyles={styles.categoriaInput}
                        inputStyles={{ fontSize: '11px', color: '#505050', marginTop: 5, }}
                        dropdownStyles={styles.categoriaListaInput}
                        dropdownTextStyles={{ fontSize: '11px', color: '#505050', marginTop: 5, }}>
                    </MultipleSelectList>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
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

    textAdd: {
        color: 'rgba(255, 255, 255, 0.65)',
        fontFamily: 'Raleway_700Bold',
        fontSize: 14,
        marginTop: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3

    },

    textReceitas: {
        color: '#fff',
        fontFamily: 'Raleway_700Bold',
        fontSize: 37,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3
    },

    inputs: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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

    categoriaInput: {
        display: 'flex',
        marginRight: 5,
        height: '50px',
        width: '296px',
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    categoriaListaInput: {
        width: '296px',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
})