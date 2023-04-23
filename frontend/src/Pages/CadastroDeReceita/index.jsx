import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, TouchableOpacity, ScrollView, Image, Picker } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faPlus, faTrashAlt, faTrashCan, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './cadastrodereceita.module';
import Toast from 'react-native-toast-message';
import toastStyle from '../Toasts/toasts';

export default function CadastroDeReceita({ navigation, props }) {

    {/* UseState errados nos MultipleSelectList */ }
    const [idReceita, setIdReceita] = useState(0);
    const [nomeReceita, setNomeReceita] = useState('');
    const [tempoPreparo, setTempoPreparo] = useState('');
    const [tempo, setTempo] = useState('');
    const [porcoes, setPorcoes] = useState('');
    const [valCalorico, setValCalorico] = useState('');
    const [descricao, setDescricao] = useState('');
    const [nomeTag, setNomeTag] = useState('');
    const [usuario_id, setUsuarios_id] = React.useState(1);
    const [categoria, setCategoria] = React.useState('');
    const [aproveitamento, setAproveitamento] = useState(false);
    const [foto, setFoto] = useState(null);
    const [ingredientes, setIngredientes] = useState([{ idIngredientesReceita: 0, nomeIngrediente: '', quantidade: '', medida: '', receita_id: 0 }]);
    const [passos, setPassos] = useState([{ idPasso: 0, NumPasso: 1, PassoTexto: '' }]);
    const [errors, setErrors] = useState({});

    // Novo ingrediente
    function adicionarIngrediente() {
        setIngredientes([...ingredientes, { nome: '', quantidade: '', medida: '' }]);
    };

    function removerIngrediente(index) {
        const novosIngredientes = [...ingredientes];
        novosIngredientes.splice(index, 1);
        setIngredientes(novosIngredientes);
    };

    function atualizarIngrediente(index, propriedade, valor) {
        const novosIngredientes = [...ingredientes];
        novosIngredientes[index][propriedade] = valor;
        setIngredientes(novosIngredientes);
    };

    const addStep = () => {
        const newStepNum = passos[passos.length - 1].NumPasso + 1;
        setPassos([...passos, { NumPasso: newStepNum, PassoTexto: '' }]);
    };

    const removeStep = (index) => {
        const updatedSteps = [...passos];
        updatedSteps.splice(index, 1);
        setPassos(updatedSteps);
    };

    const handleStepTextChange = (index, text) => {
        const updatedSteps = [...passos];
        updatedSteps[index].PassoTexto = text;
        setPassos(updatedSteps);
    };

    const toastConfig = {
        success: internalState => (
            <View style={toastStyle.successToast}>
                <FontAwesomeIcon icon={faCircleCheck} size={28} style={{ marginRight: 10 }} color='#fff' />
                <Text style={toastStyle.toastText}>{internalState.text1}</Text>
            </View>
        ),

        fail: internalState => (
            <View style={toastStyle.failToast}>
                <FontAwesomeIcon icon={faCircleXmark} size={28} style={{ marginRight: 10 }} color='#fff' />
                <Text style={toastStyle.toastText}>{internalState.text1}</Text>
            </View>
        ),

        error: () => { },
        info: () => { },
        any_custom_type: () => { },
    };

    const showSuccessToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Receita publicada',
            position: 'bottom',
            visibilityTime: 3000,
            bottomOffset: 120
        });
    };

    const showFailToast = () => {
        Toast.show({
            type: 'fail',
            text1: 'Receita não publicada, foi mal!',
            position: 'bottom',
            visibilityTime: 3000,
            bottomOffset: 120
        });
    };


    //Configurações das imagens
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.7,
        });

        console.log(result);

        if (result.canceled) {
            return;
        }
        setFoto(result.assets[0].uri);
    };

    function cadastrarReceita() {
        const errors = {};

        if (!nomeReceita.trim()) {
            errors.nomeReceita = "Nome da receita é obrigatório";
        }

        if (!tempoPreparo.trim()) {
            errors.tempoPreparo = "Tempo de preparo é obrigatório";
        } else if (isNaN(tempoPreparo)) {
            errors.tempoPreparo = "Tempo de preparo deve ser um número";
        }

        if (!tempo.trim()) {
            errors.tempo = "O tipo de tempo é obrigatório";
        }

        if (!porcoes.trim()) {
            errors.porcoes = "Número de porções é obrigatório";
        } else if (isNaN(porcoes)) {
            errors.porcoes = "Número de porções deve ser um número";
        }

        if (!valCalorico.trim()) {
            errors.valCalorico = "Valor calórico é obrigatório";
        }

        if (!descricao.trim()) {
            errors.descricao = "Descrição da receita é obrigatória";
        }

        if (!categoria.trim()) {
            errors.categoria = "Categoria da receita é obrigatória";
        }

        if (ingredientes.some((ingrediente) => !ingrediente.quantidade.trim() || !ingrediente.medida.trim() || !ingrediente.nomeIngrediente.trim())) {
            errors.ingredientes = "Preencha o nome a quantidade e a medida de todos os ingredientes";
        }

        if (!passos.every((passo) => passo.PassoTexto.trim())) {
            errors.passos = "Todos os passos devem ser preenchidos";
        }

        if (!foto) {
            errors.foto = "Imagem é obrigatória";
        }

        // tempo, foto

        setErrors(errors);

        const body = { idReceita, nomeReceita, tempoPreparo, tempo, porcoes, valCalorico, descricao, nomeTag, usuario_id, categoria, aproveitamento, foto, ingredientes, passos };

        if (Object.keys(errors).length === 0) {

            fetch("https://localhost:7219/api/Receita", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
                .then((response) => { showSuccessToast; navigation.navigate('Main') })
                .catch((error) => {
                    console.log(error);
                    showFailToast;
                });

            console.log(body);
        };
    }

    const categorias = [
        'Aves',
        'Bebidas',
        'Bolos',
        'Carnes',
        'Doces',
        'Frutos do Mar',
        'Japones',
        'Lanches',
        'LowCarb',
        'Massa',
        'Molhos',
        'Rapidas',
        'Saladas',
        'Salgados',
        'Sanduiches',
        'Snacks',
        'Sobremesas',
        'Sopas',
        'Torta',
        'Vegano',
        'Vegetariano'
    ];


    return (
        <ScrollView style={styles.container} >
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.textAdd}>Adicionar</Text>
                <Text style={styles.textReceitas} >Receitas</Text>
            </View>

            {/* Fotos */}
            <View style={{ display: 'flex', alignItems: "center" }}>
                <Text style={{ fontFamily: 'Raleway_800ExtraBold', fontSize: 20, marginTop: 26, color: '#505050' }}> Foto </Text>
                <TouchableOpacity style={[styles.BorderIcon, errors.foto && styles.BorderIconError]} onPress={pickImage}>
                    <FontAwesomeIcon style={[styles.IconCamera, errors.foto && styles.IconCameraError]} icon={faCamera} size={58} />
                    {foto && <Image source={{ uri: foto }} style={styles.imagemReceita} />}
                </TouchableOpacity>
                {errors.foto && <Text style={styles.textError}>{errors.foto}</Text>}
            </View>

            {/* Input "Pai" */}
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>

                {/* Input Nome */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Nome</Text>
                    <TextInput
                        style={[styles.allInput, errors.nomeReceita && styles.inputError]}
                        placeholder='Digite o nome da receita'
                        value={nomeReceita}
                        onChangeText={(texto) => setNomeReceita(texto)}
                    />
                    {errors.nomeReceita && <Text style={styles.textError}>{errors.nomeReceita}</Text>}
                </View>

                {/* Input Categorias */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Categoria</Text>
                    {/* UseState errados nos MultipleSelectList */}
                    <Picker
                        style={[styles.allInput, errors.categoria && styles.inputError]}
                        selectedValue={categoria}
                        onValueChange={(itemValue) => setCategoria(itemValue)}
                    >
                        {categorias.map((categoria, index) => (
                            <Picker.Item key={index} label={categoria} value={categoria} />
                        ))}
                    </Picker>
                    {errors.categoria && <Text style={styles.textError}>{errors.categoria}</Text>}
                </View>

                {/* Input Tempo de Preparo */}
                <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                    <Text style={styles.TextInput}>Tempo de preparo</Text>
                </View>
                <View style={{ flexDirection: 'row', display: 'flex', width: '80%', justifyContent: 'flex-start' }}>
                    <TextInput
                        style={[styles.inputTempo, errors.tempoPreparo && styles.inputError]}
                        placeholder='Tempo'
                        value={tempoPreparo}
                        onChangeText={(texto) => setTempoPreparo(texto)}
                    />

                    <Picker
                        style={[styles.ListaInput, errors.tempo && styles.inputError]}
                        selectedValue={tempo}
                        onValueChange={(itemValue) => setTempo(itemValue)}
                    >
                        <Picker.Item label="Minutos(s)" value="Minutos(s)" />
                        <Picker.Item label="Hora(s)" value="Hora(s)" />
                    </Picker>
                </View>
                {errors.tempoPreparo && <Text style={styles.textError}>{errors.tempoPreparo}</Text>}

                {errors.tempo && <Text style={styles.textError}>{errors.tempo}</Text>}

                {/* Input Porções */}
                <View style={styles.defaultInput} >

                    <Text style={styles.TextInput}>Porções</Text>
                    <TextInput
                        style={[styles.allInput, errors.porcoes && styles.inputError]}
                        placeholder="Quantidade"
                        value={porcoes}
                        onChangeText={(texto) => setPorcoes(texto)}
                    />
                    {errors.porcoes && <Text style={styles.textError}>{errors.porcoes}</Text>}
                </View>

                {/* CheckBox de Aproveitamento */}
                <View style={styles.defaultInput}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={aproveitamento} onValueChange={setAproveitamento} style={styles.checkbox} />
                        <Text style={{ margin: 5, fontSize: "15px", fontFamily: 'Raleway_600SemiBold' }}>Receita com aproveitamento de alimentos?</Text>
                        <TouchableOpacity title="?" />
                    </View>
                </View>

                {/* Input Valor cal */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Valor Calórico</Text>
                    <TextInput
                        style={styles.allInput}
                        placeholder='Ex: Gramas/quilocalorias'
                        value={valCalorico}
                        onChangeText={(texto) => setValCalorico(texto)}
                    />
                </View>

                {/* Input Pequena descrição */}
                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Pequena descrição</Text>
                    <TextInput
                        style={[styles.allInput, errors.descricao && styles.inputError]}
                        placeholder='Ex: Coxinha de frango com catupiry'
                        value={descricao}
                        onChangeText={(texto) => setDescricao(texto)}
                    />
                    {errors.descricao && <Text style={styles.textError}>{errors.descricao}</Text>}
                </View>

                {/* Ingredientes */}
                <View style={styles.addableComponent}>
                    {ingredientes.map((ingrediente, index) => (
                        <View key={index} style={styles.addableComponent}>
                            <View style={styles.defaultInput}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.stepNumber}>{`#${index + 1}`}</Text>
                                    <Text style={styles.TextInput2}>Ingrediente</Text>
                                </View>

                                <TextInput
                                    style={[styles.allInput, errors.ingredientes && errors.ingredientes[index] && styles.inputError]}
                                    placeholder="Ingrediente"
                                    value={ingrediente.nomeIngrediente}
                                    onChangeText={texto => atualizarIngrediente(index, 'nomeIngrediente', texto)}
                                />

                            </View>

                            <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                <Text style={styles.TextInput}>Quantidade e Medidas</Text>
                            </View>
                            <View style={{ flexDirection: 'row', display: 'flex', width: '80%', justifyContent: 'flex-start' }}>
                                <TextInput
                                    style={[styles.inputQuantidade, errors.ingredientes && errors.ingredientes[index] && styles.inputError]}
                                    placeholder="Quantidade"
                                    value={ingrediente.quantidade}
                                    onChangeText={texto => atualizarIngrediente(index, 'quantidade', texto)}
                                />

                                <Picker
                                    style={[styles.ListaInput, errors.ingredientes && errors.ingredientes[index] && styles.inputError]}
                                    selectedValue={ingrediente.medida}
                                    onValueChange={valor => atualizarIngrediente(index, 'medida', valor)}
                                >
                                    <Picker.Item label="1 xícara (chá)" value="1 xícara (chá)" />
                                    <Picker.Item label="1/2 xícara (chá)" value="1/2 xícara (chá)" />
                                    <Picker.Item label="1/4 xícara (chá)" value="1/4 xícara (chá)" />
                                    <Picker.Item label="1 colher (sopa)" value="1 colher (sopa)" />
                                    <Picker.Item label="1 colher (chá)" value="1 colher (chá)" />
                                    <Picker.Item label="Unidade(s)" value="Unidade(s)" />
                                </Picker>
                            </View>
                        </View>
                    ))}

                    {errors.ingredientes && <Text style={styles.textError}>{errors.ingredientes}</Text>}

                    <View style={styles.addRemoveButtonsContainer}>
                        <TouchableOpacity style={styles.addButton} onPress={() => adicionarIngrediente()}>
                        <FontAwesomeIcon icon={faPlus} color='#FF7152' /><Text style={styles.addButtonText}>Adicionar ingrediente</Text>
                        </TouchableOpacity>

                        {ingredientes.length > 1 && (
                            <TouchableOpacity style={styles.removeButton} onPress={() => removerIngrediente(ingredientes.length - 1)}>
                                <FontAwesomeIcon icon={faTrashCan} color='#505050' />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                {/* "Passos" Input */}
                <View style={styles.defaultInput}>
                    {passos.map((step, index) => (
                        <View key={index} style={styles.addableComponent}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.stepNumber}>{`#${step.NumPasso}`}</Text>
                                <Text style={styles.TextInput2}>Passo</Text>
                            </View>
                            <TextInput
                                style={[styles.allInput, errors.passos && errors.passos[index] && styles.inputError]}
                                value={step.PassoTexto}
                                placeholder={"Digite o passo"}
                                onChangeText={(text) => handleStepTextChange(index, text)}
                            />
                            {errors.passos && errors.passos && <Text style={styles.textError}>{errors.passos}</Text>}
                        </View>
                    ))}


                    <View style={styles.addRemoveButtonsContainer}>
                        <TouchableOpacity onPress={addStep} style={styles.addButton}>
                            <FontAwesomeIcon icon={faPlus} color='#FF7152' /><Text style={styles.addButtonText}> Adicionar passo</Text>
                        </TouchableOpacity>

                        {passos.length > 1 && (
                            <TouchableOpacity onPress={() => removeStep(passos.length - 1)} style={styles.removeButton}>
                                <FontAwesomeIcon icon={faTrashCan} color="#505050" />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={cadastrarReceita} >
                        <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                            end={{ x: 2, y: 1 }} style={styles.button} >
                            <Text style={styles.buttonText}>Publicar</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
            <View style={{ paddingVertical: '50px' }} />
        </ScrollView>
    );
}