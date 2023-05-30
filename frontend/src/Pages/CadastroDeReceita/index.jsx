import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Appearance, useColorScheme } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faPlus, faTrashAlt, faTrashCan, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import stylesLight from './cadastrodereceita.module';
import stylesDark from './cadastrodereceita.moduleDark';
import { Picker } from '@react-native-picker/picker';

export default function CadastroDeReceita({ navigation, props }) {

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

    function adicionarIngrediente() {
        setIngredientes([...ingredientes, { nome: '', quantidade: '', medida: '' }]);
    }

    function removerIngrediente(index) {
        const novosIngredientes = [...ingredientes];
        novosIngredientes.splice(index, 1);
        setIngredientes(novosIngredientes);
    }

    function atualizarIngrediente(index, propriedade, valor) {
        const novosIngredientes = [...ingredientes];
        novosIngredientes[index][propriedade] = valor;
        setIngredientes(novosIngredientes);
    }

    const addStep = () => {
        const newStepNum = passos[passos.length - 1].NumPasso + 1;
        setPassos([...passos, { NumPasso: newStepNum, PassoTexto: '' }]);
    }

    const removeStep = (index) => {
        const updatedSteps = [...passos];
        updatedSteps.splice(index, 1);
        setPassos(updatedSteps);
    }

    const handleStepTextChange = (index, text) => {
        const updatedSteps = [...passos];
        updatedSteps[index].PassoTexto = text;
        setPassos(updatedSteps);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.5,
        });

        console.log(result);

        if (result.canceled) {
            return;
        }
        setFoto(result.assets[0].uri);
    }

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
        setErrors(errors);

        const body = { idReceita, nomeReceita, tempoPreparo, tempo, porcoes, valCalorico, descricao, nomeTag, usuario_id, categoria, aproveitamento, foto, ingredientes, passos };

        if (Object.keys(errors).length === 0) {

            fetch("https://cloudproveit.azurewebsites.net/api/receita", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
                .then((response) => { alert('Receita cadastrada com sucesso!') })
                .catch((error) => { console.log(error) });
            console.log(body);
        }
    }

    const categorias = [
        'Bebidas',
        'Aves',
        'Bolos',
        'Carnes',
        'Frutos do Mar',
        'Japones',
        'Lanches',
        'LowCarb',
        'Massa',
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

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;
    
    let inputStyle = [styles.input];
    if (scheme === 'dark') {
        inputStyle.push(styles.inputDark);
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.textAdd}>Adicionar</Text>
                <Text style={styles.textReceitas} >Receita</Text>
            </View>

            <View style={{ display: 'flex', alignItems: "center" }}>
                <Text style={styles.headerPic}> Foto </Text>
                <TouchableOpacity style={[styles.BorderIcon, errors.foto && styles.BorderIconError]} onPress={pickImage}>
                    <FontAwesomeIcon style={[styles.IconCamera, errors.foto && styles.IconCameraError]} icon={faCamera} size={58} />
                    {foto && <Image source={{ uri: foto }} style={styles.imagemReceita} />}
                </TouchableOpacity>
                {errors.foto && <Text style={styles.textError}>{errors.foto}</Text>}
            </View>

            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>

                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Nome</Text>
                    <TextInput
                        style={[styles.allInput, errors.nomeReceita && styles.inputError]}
                        placeholder='Digite o nome da receita'
                        placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                        value={nomeReceita}
                        onChangeText={(texto) => setNomeReceita(texto)}
                    />
                    {errors.nomeReceita && <Text style={styles.textError}>{errors.nomeReceita}</Text>}
                </View>

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

                <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                    <Text style={styles.TextInput}>Tempo de preparo</Text>
                </View>
                <View style={{ flexDirection: 'row', display: 'flex', width: '80%', justifyContent: 'flex-start' }}>
                    <TextInput
                        style={[styles.inputTempo, errors.tempoPreparo && styles.inputError]}
                        placeholder='Ex: 10'
                        placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                        value={tempoPreparo}
                        onChangeText={(texto) => setTempoPreparo(texto)}
                    />

                    <Picker
                        style={[styles.ListaInput, errors.tempo && styles.inputError]}
                        selectedValue={tempo}
                        onValueChange={(itemValue) => setTempo(itemValue)}
                    >
                        <Picker.Item label="Minuto(s)" value="Minuto(s)" />
                        <Picker.Item label="Hora(s)" value="Hora(s)" />
                    </Picker>
                </View>
                {errors.tempoPreparo && <Text style={styles.textError}>{errors.tempoPreparo}</Text>}

                {errors.tempo && <Text style={styles.textError}>{errors.tempo}</Text>}

                <View style={styles.defaultInput} >

                    <Text style={styles.TextInput}>Porções</Text>
                    <TextInput
                        style={[styles.allInput, errors.porcoes && styles.inputError]}
                        placeholder="Ex: 10"
                        placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                        value={porcoes}
                        onChangeText={(texto) => setPorcoes(texto)}
                    />
                    {errors.porcoes && <Text style={styles.textError}>{errors.porcoes}</Text>}
                </View>

                <View style={styles.defaultInput}>
                    <View style={styles.checkboxContainer}>
                        <Text style={{ margin: 5, fontSize: 15, fontFamily: 'Raleway_600SemiBold' }}>Receita com aproveitamento de alimentos?</Text>
                    </View>
                </View>

                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Valor Calórico</Text>
                    <TextInput
                        style={styles.allInput}
                        placeholder='Ex: 150'
                        placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                        value={valCalorico}
                        onChangeText={(texto) => setValCalorico(texto)}
                    />
                </View>

                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Pequena descrição</Text>
                    <TextInput
                        style={[styles.allInput, errors.descricao && styles.inputError]}
                        placeholder='Ex: Coxinha de frango com catupiry'
                        placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                        value={descricao}
                        onChangeText={(texto) => setDescricao(texto)}
                    />
                    {errors.descricao && <Text style={styles.textError}>{errors.descricao}</Text>}
                </View>

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
                                    placeholder="Ex: farinha de trigo"
                                    placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
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
                                    placeholder="Ex: 10"
                                    placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                                    value={ingrediente.quantidade}
                                    onChangeText={texto => atualizarIngrediente(index, 'quantidade', texto)}
                                />

                                <View style={styles.ViewListaInput}>
                                    <Picker
                                        style={[styles.ListaInput, errors.ingredientes && errors.ingredientes[index] && styles.inputError]}
                                        selectedValue={ingrediente.medida}
                                        onValueChange={valor => atualizarIngrediente(index, 'medida', valor)}
                                    >
                                        <Picker.Item label="Gramas (g)" value="g" />
                                        <Picker.Item label="A gosto" value="a gosto" />
                                        <Picker.Item label="Quilograma (kg)" value="kg" />
                                        <Picker.Item label="ML" value="ml" />
                                        <Picker.Item label="Xícara (chá)" value="Xícara (chá)" />
                                        <Picker.Item label="1/2 xícara (chá)" value="1/2 xícara (chá)" />
                                        <Picker.Item label="1/4 xícara (chá)" value="1/4 xícara (chá)" />
                                        <Picker.Item label="Colher (sopa)" value="Colher (sopa)" />
                                        <Picker.Item label="Colher (chá)" value="Colher (chá)" />
                                        <Picker.Item label="Unidade(s)" value="Unidade(s)" />
                                        <Picker.Item label="Litro(s)" value="Litro(s)" />
                                    </Picker>
                                </View>
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
                                placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
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
            <View style={{ paddingVertical: 50 }} />
        </ScrollView>
    )
}