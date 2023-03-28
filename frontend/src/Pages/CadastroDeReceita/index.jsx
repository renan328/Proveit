import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, CheckBox, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-native-web';
import styles from './cadastrodereceita.module';

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
        { key: '1', value: 'minutos(s)' },
        { key: '2', value: 'hora(s)' },
        { key: '3', value: 'dia(s)' },
    ];

    const medida = [
        { key: '1', value: '1 xícara (chá)' },
        { key: '2', value: '1/2 xícara (chá)' },
        { key: '3', value: '1/4 xícara (chá)' },
        { key: '4', value: '1 colher (sopa)' },
        { key: '5', value: '1 colher (chá)' },
        { key: '6', value: 'Unidade(s)' }
    ]

    const [isSelected, setSelection] = useState(false);

    return (
        <ScrollView style={styles.container} >

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.textAdd}>Adicionar</Text>
                <Text style={styles.textReceitas} >Receitas</Text>
            </View>

            {/* Fotos */}
            <View style={{ display: 'flex', alignItems: "center" }}>
                <Text style={{ fontFamily: 'Raleway_600SemiBold', fontSize: 15, marginTop: 26 }}> Foto </Text>
                <View style={styles.BorderIcon}>
                    <FontAwesomeIcon style={styles.IconCamera} icon={faCamera} size={58} />
                </View>
            </View>

            {/* Input "Pai" */}
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>

                {/* Input Nome */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Nome</Text>
                    <TextInput style={styles.allInput} placeholder='Digite o nome da receita'></TextInput>
                </View>

                {/* Input Categorias */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Categorias</Text>
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
                </View>

                {/* Input Tempo de Preparo */}
                <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'flex-start', width: '79%' }}>
                    <Text style={styles.TextInput}>Tempo de preparo</Text>
                    <Text style={styles.textPorcoes}>Porções</Text>
                </View>
                <View style={{ flexDirection: 'row', display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
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
                <View style={styles.defaultInput}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
                        <Text style={{ margin: 5, fontSize: "15px", fontFamily: 'Raleway_600SemiBold' }}>Receita com aproveitamento de alimentos?</Text>
                        <Button title="?"></Button>
                    </View>
                </View>

                {/* Input Valor cal */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Valor Calórico</Text>
                    <TextInput style={styles.allInput} placeholder='Ex: Gramas/quilocalorias'></TextInput>
                </View>

                {/* Input Pequena descrição */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Pequena descrição</Text>
                    <TextInput style={styles.allInput} placeholder='Ex: Coxinha de frango com catupiry'></TextInput>
                </View>

                {/* Input Ingredientes */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Ingredientes</Text>
                    <TextInput style={styles.allInput} placeholder='Primeiro ingrediente'></TextInput>
                </View>

                {/* Input Quantidade */}
                <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                    <Text style={styles.TextInput}>Quantidade</Text>
                    <Text style={styles.textMedida}>Medida</Text>
                </View>
                <View style={{ flexDirection: 'row', display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
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
                <View>
                    <Text style={{ color: 'orange', fontFamily: 'Raleway_600SemiBold', fontSize: 14, marginTop: 15 }}>+ Adicionar ingrediente</Text>
                </View>

                {/* Input Passos */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Passos</Text>
                    <TextInput style={styles.allInput} placeholder='Primeiro passo'></TextInput>
                </View>

                {/* Adicionar Passos */}
                <View>
                    <Text style={{ color: 'orange', fontFamily: 'Raleway_600SemiBold', fontSize: 14, marginTop: 15 }}>+ Adicionar passos</Text>
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
        </ScrollView >
    );
}