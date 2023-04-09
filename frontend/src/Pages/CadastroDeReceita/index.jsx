import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, TouchableOpacity, ScrollView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './cadastrodereceita.module';

export default function CadastroDeReceita({ navigation }) {

    {/* UseState errados nos MultipleSelectList */ }
    const [Nome, setNome] = useState();
    const [selected, setSelected] = React.useState(''); // Categoria
    const [TempoPreparo, setTempoPreparo] = useState();
    const [Tempo, setTempo] = useState();
    const [Porcoes, setPorcoes] = useState();
    const [Aproveitamento, setAproveitamento] = useState(false);
    const [ValCalorico, setValCalorico] = useState();
    const [Descricao, setDescricao] = useState();
    const [Ingredientes, setIngredientes] = useState([]);
    const [Passos, setPassos] = useState([]);

    const [lengthIngredient, setLengthIngredient] = useState(1);
    const [lengthStep, setLengthStep] = useState(1);


    // Novo ingrediente
    const addIngredient = () => {
        setLengthIngredient(lengthIngredient + 1);
    };

    // Novo passo
    const addStep = () => {
        setLengthStep(lengthStep + 1);
    };

    const cadastrarReceita = (e) => {
        e.preventDefault();

        const body = { Nome, selected, TempoPreparo, Tempo, Porcoes, Aproveitamento, ValCalorico, Descricao, Ingredientes, Passos };

        fetch("https://localhost:7219/api/Receita", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => { alert("Receita cadastrado com sucesso"); })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar resultado");
            });
    }


    //Configurações das imagens
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.7,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

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
        { key: '1', value: 'minuto(s)' },
        { key: '2', value: 'hora(s)' },
    ];

    const medida = [
        { key: '1', value: '1 xícara (chá)' },
        { key: '2', value: '1/2 xícara (chá)' },
        { key: '3', value: '1/4 xícara (chá)' },
        { key: '4', value: '1 colher (sopa)' },
        { key: '5', value: '1 colher (chá)' },
        { key: '6', value: 'Unidade(s)' }
    ]


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
                <TouchableOpacity style={styles.BorderIcon} onPress={pickImage}>
                    <FontAwesomeIcon style={styles.IconCamera} icon={faCamera} size={58} />
                    {image && <Image source={{ uri: image }} style={styles.imagemReceita} />}
                </TouchableOpacity>
            </View>

            {/* Input "Pai" */}
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>

                {/* Input Nome */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Nome</Text>
                    <TextInput style={styles.allInput} placeholder='Digite o nome da receita' value={Nome} onChange={(e) => setNome(e.target.value)} />
                </View>

                {/* Input Categorias */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Categorias</Text>
                    {/* UseState errados nos MultipleSelectList */}
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
                <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                    <Text style={styles.TextInput}>Tempo de preparo</Text>
                </View>
                <View style={{ flexDirection: 'row', display: 'flex', width: '80%', justifyContent: 'flex-start' }}>
                    <TextInput style={styles.inputTempo} placeholder='Tempo' value={TempoPreparo} onChange={(e) => setTempoPreparo(e.target.value)} />

                    {/* UseState errados nos MultipleSelectList */}
                    <MultipleSelectList data={hora}
                        setSelected={setSelected}
                        placeholder='Horas'
                        searchPlaceholder='Adicionar'
                        notFoundText='Horas não encontrada'
                        fontFamily='Raleway_600SemiBold'
                        boxStyles={styles.horaInput}
                        inputStyles={{ fontSize: '11px', color: '#505050', marginTop: 5, }}
                        dropdownStyles={styles.horaListaInput}
                        dropdownTextStyles={{ fontSize: '11px', color: '#505050', marginTop: 5 }}>
                    </MultipleSelectList>
                </View>

                {/* Input Porções */}
                <View style={styles.defaultInput} >

                    <Text style={styles.TextInput}>Porções</Text>
                    <TextInput style={styles.allInput} placeholder="Quantidade" value={Porcoes} onChange={(e) => setPorcoes(e.target.value)} />
                </View>

                {/* CheckBox de Aproveitamento */}
                <View style={styles.defaultInput}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={Aproveitamento} onValueChange={setAproveitamento} style={styles.checkbox} />
                        <Text style={{ margin: 5, fontSize: "15px", fontFamily: 'Raleway_600SemiBold' }}>Receita com aproveitamento de alimentos?</Text>
                        <TouchableOpacity title="?" />
                    </View>
                </View>

                {/* Input Valor cal */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Valor Calórico</Text>
                    <TextInput style={styles.allInput} placeholder='Ex: Gramas/quilocalorias' value={ValCalorico} onChange={(e) => setValCalorico(e.target.value)} />
                </View>

                {/* Input Pequena descrição */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Pequena descrição</Text>
                    <TextInput style={styles.allInput} placeholder='Ex: Coxinha de frango com catupiry' value={Descricao} onChange={(e) => setDescricao(e.target.value)} />
                </View>

                {/* Colocar em componente ingredientes e passos */}
                {/* Input Ingredientes */}
                {Array.from({ length: lengthIngredient }, (_, index) => (
                    <View style={styles.addableComponent}>
                        <View style={styles.defaultInput}>
                            <Text style={styles.TextInput}>Ingrediente</Text>
                            <TextInput style={styles.allInput} placeholder={`Ingrediente #${index + 1}`}></TextInput>
                        </View>

                        {/* Input Quantidade */}
                        <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                            <Text style={styles.TextInput}>Quantidade e Medidas</Text>
                        </View>
                        <View style={{ flexDirection: 'row', display: 'flex', width: '80%', justifyContent: 'flex-start' }}>
                            <TextInput style={styles.inputQuantidade} placeholder='Quantidade'></TextInput>
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
                    </View>

                ))}

                {/* Adicionar ingredientes */}
                < TouchableOpacity onPress={addIngredient} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+ Adicionar ingrediente</Text>
                </TouchableOpacity>

                {/* Input Passos */}
                {Array.from({ length: lengthStep }, (_, index) => (

                    <View style={styles.defaultInput}>
                        <Text style={styles.TextInput}>Passo</Text>
                        <TextInput style={styles.allInput} placeholder={`Passo #${index + 1}`}></TextInput>
                    </View>
                ))}

                {/* Adicionar Passos */}
                <TouchableOpacity onPress={addStep} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+ Adicionar passos</Text>
                </TouchableOpacity>

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