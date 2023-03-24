import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, CheckBox, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import { Button } from 'react-native-web';

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
        { key: '21', value: 'Vegetariano' }
    ];

    const hora = [
        { key: '1', value: '1 hora' },
        { key: '2', value: '2 horas' },
        { key: '3', value: '3 horas' },
        { key: '4', value: '4 horas' },
        { key: '5', value: '5 horas' },
        { key: '6', value: '6 horas' },
        { key: '7', value: '7 horas' },
        { key: '8', value: '8 horas' },
        { key: '9', value: '9 horas' },
        { key: '10', value: '10 horas' },
        { key: '11', value: '11 horas' },
        { key: '12', value: '12 horas' }
    ];

    const medida = [
        { key: '1', value: '1 xícara (chá)' },
        { key: '2', value: '1/2 xícara (chá)' },
        { key: '3', value: '1/4 xícara (chá)' },
        { key: '4', value: '1 colher (sopa)' },
        { key: '5', value: '1 colher (chá)' }
    ]

    const [isSelected, setSelection] = useState(false);

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
            <View style={{ display: 'flex', alignItems: "center" }}>
                <Text style={{ fontFamily: 'Raleway_600SemiBold', fontSize: 15, marginTop: 26 }}> Foto e vídeo</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        style={{ width: 128, height: 128, marginTop: 10, flex: 1 }}
                        source={require('../../assets/camera.png')}
                    />
                    {<Image
                        style={{ width: 130, height: 130, marginTop: 10, flex: 1 }}
                        source={require('../../assets/video.png')}
                    />}
                </View>
            </View>

            {/* Input Nome */}
            <View styels={styles.inputs}>
                <View style={{ marginTop: 25, display: 'flew' }}>
                    <Text style={styles.TextInput}>Nome</Text>
                    <TextInput style={styles.allInput} placeholder='Digite o nome da receita'></TextInput>
                </View>

                {/* Input Categorias */}
                <View style={{ margin: 20, display: 'flex', alignItems: 'center' }}>
                    <Text style={{ display: 'flex', alignSelf: 'stretch', marginLeft: 27, fontFamily: 'Raleway_600SemiBold' }}>Categorias</Text>
                    <MultipleSelectList data={data}
                        setSelected={setSelected}
                        placeholder='Alguma categoria'
                        searchPlaceholder='Adicionar'
                        notFoundText='Categoria não encontrada'
                        fontFamily='Raleway_600SemiBold'
                        boxStyles={styles.categoriaInput}
                        inputStyles={{ fontSize: '11px', color: '#505050', padding: 5 }}
                        dropdownStyles={styles.categoriaListaInput}
                        dropdownTextStyles={{ fontSize: '11px', color: '#505050' }}>
                    </MultipleSelectList>
                    <Text style={{ color: 'orange', fontFamily: 'Raleway_600SemiBold', fontSize: 14 }}>+ Adicionar Categorias</Text>
                </View>

                {/* Input Tempo de Preparo */}
                <View style={{ flexDirection: 'row', display: 'flex' }}>
                    <Text style={styles.TextInput}>Tempo de preparo</Text>
                    <Text style={styles.textPorcoes}>Porções</Text>
                </View>
                <View style={{ flexDirection: 'row', display: 'flex' }}>
                    <TextInput style={styles.inputTempo} placeholder='Tempo'></TextInput>
                    <MultipleSelectList data={hora}
                        setSelected={setSelected}
                        placeholder='Horas'
                        searchPlaceholder='Selecione'
                        notFoundText='Tempo não determinado'
                        fontFamily='Raleway_600SemiBold'
                        boxStyles={styles.horaInput}
                        inputStyles={{ fontSize: '11px', color: '#505050', padding: 5 }}
                        dropdownStyles={styles.horaListaInput}
                        dropdownTextStyles={{ fontSize: '11px', color: '#505050' }}>
                    </MultipleSelectList>
                    <TextInput style={styles.inputQntd} placeholder="Quantidade"></TextInput>
                </View>

                {/* CheckBox de Aproveitamento */}
                <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
                        <Text style={{ margin: 8, fontSize: "15px", fontFamily: 'Raleway_600SemiBold' }}>Receita com aproveitamento de alimentos?</Text>
                        <Button title="?"></Button>
                    </View>
                </View>

                {/* Input Valor cal */}
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text style={styles.TextInput}>Valor Calórico</Text>
                    <TextInput style={styles.allInput} placeholder='Ex: Gramas/quilocalorias'></TextInput>
                </View>

                {/* Input Pequena descrição */}
                <View style={{ marginTop: 25, display: 'flex', alignItems: 'center' }}>
                    <Text style={styles.TextInput}>Pequena descrição</Text>
                    <TextInput style={styles.allInput} placeholder='Ex: Coxinha de frango com catupiry'></TextInput>
                </View>

                {/* Input Ingredientes */}
                <View style={{ marginTop: 25, display: 'flex', alignItems: 'center' }}>
                    <Text style={styles.TextInput}>Ingredientes</Text>
                    <TextInput style={styles.allInput} placeholder='Primeiro ingrediente'></TextInput>
                </View>

                {/* Input Quantidade */}
                <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25 }}>
                    <Text style={styles.TextInput}>Quantidade</Text>
                    <Text style={styles.textMedida}>Medida</Text>
                </View>
                <View style={{ flexDirection: 'row', display: 'flex' }}>
                    <TextInput style={styles.inputQuantidade} placeholder='Qntd'></TextInput>
                    <MultipleSelectList data={medida}
                        setSelected={setSelected}
                        placeholder='Medidas'
                        searchPlaceholder='Adicionar'
                        notFoundText='Medida não encontrada'
                        fontFamily='Raleway_600SemiBold'
                        boxStyles={styles.medidaInput}
                        inputStyles={{ fontSize: '11px', color: '#505050', marginTop: 5, }}
                        dropdownStyles={styles.medidaListaInput}
                        dropdownTextStyles={{ fontSize: '11px', color: '#505050', marginTop: 5 }}>
                    </MultipleSelectList>
                </View>

                {/* Adicionar ingredientes */}
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text style={{ color: 'orange', fontFamily: 'Raleway_600SemiBold', fontSize: 14, margin: 15 }}>+ Adicionar ingrediente</Text>
                </View>

                {/* Input Passos */}
                <View>
                    <Text style={styles.TextInput}>Passos</Text>
                    <TextInput style={styles.allInput} placeholder='Primeiro passo'></TextInput>
                </View>

                {/* Adicionar Passos */}
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text style={{ color: 'orange', fontFamily: 'Raleway_600SemiBold', fontSize: 14, margin: 15 }}>+ Adicionar passos</Text>
                </View>

                {/* Botão */}
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')} >
                        <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                            end={{ x: 2, y: 1 }} style={styles.button} >
                            <Text style={styles.buttonText}>Publicar</Text>
                        </LinearGradient>
                    </TouchableOpacity>
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
        width: '100%'
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
        fontSize: 17,
        marginTop: 25,
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

    TextInput: {
        alignSelf: 'baseline',
        marginLeft: 47,
        fontSize: "15px",
        fontFamily: 'Raleway_600SemiBold'
    },

    allInput: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '13px',
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
        marginTop: 10,
        fontFamily: 'Raleway_600SemiBold'
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
        fontFamily: 'Raleway_600SemiBold'
    },

    categoriaListaInput: {
        width: '296px',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4
    },

    inputTempo: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
        width: '58px',
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
        marginTop: 10,
        fontFamily: 'Raleway_600SemiBold'
    },

    horaInput: {
        overflowX: 'hidden',
        display: 'flex',
        marginRight: 5,
        height: '50px',
        width: '115px',
        marginRight: '20px',
        marginLeft: '-35px',
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        fontFamily: 'Raleway_600SemiBold'
    },

    horaListaInput: {
        width: '115px',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginLeft: '-40px'
    },

    inputQntd: {
        marginHorizontal: '-10px',
        paddingHorizontal: '7px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
        width: '100px',
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
        marginTop: 10,
        fontFamily: 'Raleway_600SemiBold',
    },

    textPorcoes: {
        marginLeft: '65px',
        fontSize: "15px",
        fontFamily: 'Raleway_600SemiBold'
    },

    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
        width: '300px',
        alignItems: 'center'
    },

    checkbox: {
        alignSelf: 'center',
    },

    textMedida: {
        marginLeft: '20px',
        fontSize: "15px",
        fontFamily: 'Raleway_600SemiBold'
    },

    inputQuantidade: {
        marginHorizontal: '-10px',
        paddingHorizontal: '7px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
        width: '85px',
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
        marginTop: 10,
        fontFamily: 'Raleway_600SemiBold',
        marginLeft: 47
    },

    medidaInput: {
        overflowX: 'hidden',
        display: 'flex',
        height: '50px',
        width: '200px',
        marginLeft: '25px',
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        fontFamily: 'Raleway_600SemiBold'
    },

    medidaListaInput: {
        width: '200px',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginLeft: '25px',
    },

    button: {
        display: 'flex',
        marginBottom: 25,
        marginTop: 10,
        width: 200,
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
})