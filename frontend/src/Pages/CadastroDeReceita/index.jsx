import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, useColorScheme, Modal } from "react-native";
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faPlus, faTrashAlt, faTrashCan, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import stylesLight from './cadastrodereceita.module';
import stylesDark from './cadastrodereceita.moduleDark';
import { Picker } from '@react-native-picker/picker';
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from '../../AuthContext';
import showToast from '../../../hooks/toasts';
import { ActionModal } from '../../components/ActionModal/ActionModal'
import { InfoAproveitamento } from '../../components/InfoAproveitamento/InfoAproveitamento'

export default function CadastroDeReceita({ navigation, props }) {

    const [idReceita, setIdReceita] = useState(0);
    const [nomeReceita, setNomeReceita] = useState('');
    const [tempoPreparo, setTempoPreparo] = useState('');
    const [tempo, setTempo] = useState('');
    const [porcoes, setPorcoes] = useState('');
    const [valCalorico, setValCalorico] = useState('');
    const [descricao, setDescricao] = useState('');
    const [nomeTag, setNomeTag] = useState('');
    const [usuario_id, setUsuario_id] = React.useState();
    const [categoria, setCategoria] = React.useState('');
    const [aproveitamento, setAproveitamento] = useState(false);
    const [foto, setFoto] = useState(null);
    const [ingredientes, setIngredientes] = useState([{ nomeIngrediente: '', quantidade: '', medida: '' }]);
    const [passos, setPassos] = useState([{ idPasso: 0, NumPasso: 1, PassoTexto: '' }]);
    const [errors, setErrors] = useState({});
    // estilos
    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [visibleModal, setVisibleModal] = useState(false);
    const [infoModal, setInfoModal] = useState(false);


    function adicionarIngrediente() {
        setIngredientes([...ingredientes, { nomeIngrediente: '', quantidade: '', medida: '' }]);
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
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.4,
            base64: true
        });

        if (!result.canceled) {
            setFoto('data:image/jpeg;base64,' + result.assets[0].base64);
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

    let inputStyle = [styles.input];
    if (scheme === 'dark') {
        inputStyle.push(styles.inputDark);
    }

    async function BuscarUsuario() {
        const userDataJWT = await DadosUsuario();
        setUsuario_id(userDataJWT.ID);
    }

    async function CadastrarReceita() {
        const errors = {};

        if (!nomeReceita.trim()) {
            errors.nomeReceita = "Nome da receita é obrigatório";
        } else if (nomeReceita.trim().length < 2) {
            errors.nomeReceita = "O nome da receita deve ter no mínimo 2 caracteres";
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

        if (valCalorico && isNaN(Number(valCalorico))) {
            errors.valCalorico = "Valor calórico deve ser um número";
        }

        if (!descricao.trim()) {
            errors.descricao = "Descrição da receita é obrigatória";
        }
        else if (descricao.trim().length < 5) {
            errors.descricao = "A descrição deve ter no mínimo 5 caracteres";
        }

        if (!categoria.trim()) {
            errors.categoria = "Categoria da receita é obrigatória";
        }
        for (let i = 0; i < ingredientes.length; i++) {
            const ingrediente = ingredientes[i];
            const { nomeIngrediente, quantidade, medida } = ingrediente;

            if (
                medida === '1/2 xícara (chá)' ||
                medida === '1/4 xícara (chá)' ||
                medida === '1/2' ||
                medida === '1/4' ||
                medida === 'a gosto'
            ) {
                ingrediente.quantidade = '1';
            }
        }

        for (let i = 0; i < ingredientes.length; i++) {
            const ingrediente = ingredientes[i];
            const { nomeIngrediente, quantidade, medida } = ingrediente;

            if (!nomeIngrediente || nomeIngrediente.trim() === '') {
                errors.ingredientes = 'Preencha o nome de todos os ingredientes';
            } else if (nomeIngrediente.trim().length < 2) {
                errors.nomeIngrediente = "O ingrediente deve ter no mínimo 2 caracteres";
            }

            if (medida === '') {
                errors.ingredientes = 'Selecione uma medida para todos os ingredientes';
            }

            if (!quantidade) {
                errors.ingredientes = 'Informe uma quantidade';
            } else if (quantidade && isNaN(Number(quantidade))) {
                errors.ingredientes = 'Quantidade inválida';
            }
        }

        if (!passos.every((passo) => passo.PassoTexto.trim())) {
            errors.passos = "Todos os passos devem ser preenchidos";
        }

        if (!foto) {
            errors.foto = "Imagem é obrigatória";
        }
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            showToast('Cuidado!', 'Preencha corretamente todos os campos e tente novamente', 'error');
            return;
        }

        const body = { idReceita, nomeReceita, tempoPreparo, tempo, porcoes, valCalorico, descricao, nomeTag, usuario_id, categoria, aproveitamento, foto, ingredientes, passos };
        const headers = await HeaderRequisicao(navigation);

        fetch("https://serverproveit.azurewebsites.net/api/receita", {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
            .then((response) => {
                if (response.ok) {
                    showToast('Obrigado!', 'Sua receita foi cadastrada com sucesso!', 'success');
                    navigation.navigate('HomeScreen');
                } else {
                    showToast('Foi mal!', 'Erro ao cadastrar a receita, tente novamente mais tarde.', 'error');
                }
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao cadastrar a receita, tente novamente mais tarde.', 'error');
            });
    }

    useEffect(() => {
        BuscarUsuario();
    });

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.textAdd}>Adicionar</Text>
                <Text style={styles.textReceitas}>Receita</Text>
            </View>

            <View style={{ display: 'flex', alignItems: "center" }}>
                <Text style={styles.headerPic}> Foto </Text>
                <TouchableOpacity style={[styles.BorderIcon, errors.foto && styles.BorderIconError]} onPress={pickImage}>
                    {foto ? null : <FontAwesomeIcon style={[styles.IconCamera, errors.foto && styles.IconCameraError]} icon={faCamera} size={58} />}
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
                        placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                        value={nomeReceita}
                        maxLength={150}
                        onChangeText={(texto) => setNomeReceita(texto)}
                    />
                    {errors.nomeReceita && <Text style={styles.textError}>{errors.nomeReceita}</Text>}
                </View>

                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Categoria</Text>
                    <View style={[styles.allInput, errors.categoria && styles.inputError]}>
                        <Picker
                            selectedValue={categoria}
                            onValueChange={(itemValue) => setCategoria(itemValue)}
                        >
                            <Picker.Item style={{ color: scheme === 'dark' ? '#DDD' : '#505050', fontFamily: 'Raleway_500Medium' }} label="Categorias:" value="" enabled={false} />
                            {categorias.map((categoria, index) => (
                                <Picker.Item style={styles.PickerItem} key={index} label={categoria} value={categoria} />
                            ))}
                        </Picker>
                    </View>
                    {errors.categoria && <Text style={styles.textError}>{errors.categoria}</Text>}
                </View>

                <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                    <Text style={styles.TextInput}>Tempo de preparo</Text>
                </View>
                <View style={{ flexDirection: 'row', display: 'flex', width: '80%', justifyContent: 'flex-start' }}>
                    <TextInput
                        style={[styles.inputTempo, errors.tempoPreparo && styles.inputError]}
                        placeholder='Por exemplo: 10'
                        placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                        value={tempoPreparo}
                        onChangeText={(texto) => setTempoPreparo(texto)}
                        keyboardType="numeric"
                        maxLength={3}
                    />

                    <View style={[styles.ListaInput, errors.tempo && styles.inputError]}>
                        <Picker
                            selectedValue={tempo}
                            onValueChange={(itemValue) => setTempo(itemValue)}
                        >
                            <Picker.Item style={{ color: scheme === 'dark' ? '#DDD' : '#505050', fontFamily: 'Raleway_500Medium' }} label="Tempos:" value="" enabled={false} />
                            <Picker.Item style={styles.PickerItem} label="Minuto(s)" value="Minuto(s)" />
                            <Picker.Item style={styles.PickerItem} label="Hora(s)" value="Hora(s)" />
                        </Picker>
                    </View>
                </View>
                {errors.tempoPreparo && <Text style={styles.textError}>{errors.tempoPreparo}</Text>}

                {errors.tempo && <Text style={styles.textError}>{errors.tempo}</Text>}

                <View style={styles.defaultInput} >

                    <Text style={styles.TextInput}>Porções</Text>
                    <TextInput
                        style={[styles.allInput, errors.porcoes && styles.inputError]}
                        placeholder="Por exemplo: 10"
                        placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                        value={porcoes}
                        onChangeText={(texto) => setPorcoes(texto)}
                        keyboardType="numeric"
                        maxLength={4}
                    />
                    {errors.porcoes && <Text style={styles.textError}>{errors.porcoes}</Text>}
                </View>

                <View style={styles.defaultInput}>
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            style={styles.checkbox}
                            value={aproveitamento}
                            onValueChange={setAproveitamento}
                            color={aproveitamento ? '#FF7152' : undefined}
                        />
                        <Text style={{ margin: 5, fontSize: 15, fontFamily: 'Raleway_600SemiBold', color: scheme === 'dark' ? '#DDD' : '#505050' }}>Receita com aproveitamento de alimentos?</Text>
                        <View>
                            <TouchableOpacity style={styles.BoxInfo} onPress={() => setInfoModal(true)}>
                                <Text style={styles.ButtonText}>?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Valor Calórico</Text>
                    <TextInput
                        style={styles.allInput}
                        placeholder='Por exemplo: 150'
                        placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                        value={valCalorico}
                        onChangeText={(texto) => setValCalorico(texto)}
                        keyboardType="numeric"
                        maxLength={6}
                    />
                    {errors.valCalorico && <Text style={styles.textError}>{errors.valCalorico}</Text>}
                </View>

                <View style={styles.defaultInput}>
                    <Text style={styles.TextInput}>Pequena descrição</Text>
                    <TextInput
                        style={[styles.descricaoInput, errors.descricao && styles.inputError]}
                        placeholder='Por exemplo: Coxinha de frango com catupiry'
                        placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                        textAlignVertical="top"
                        multiline={true}
                        maxLength={500}
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
                                    placeholder="Por exemplo: Farinha de trigo"
                                    placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                                    value={ingrediente.nomeIngrediente}
                                    onChangeText={texto => atualizarIngrediente(index, 'nomeIngrediente', texto)}
                                    maxLength={150}
                                />

                            </View>

                            <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                <Text style={styles.TextInput}>Quantidade e Medidas</Text>
                            </View>
                            <View style={{ flexDirection: 'row', display: 'flex', width: '80%', justifyContent: 'flex-start' }}>

                                {(ingrediente.medida !== '1/2 xícara (chá)' && ingrediente.medida !== '1/4 xícara (chá)' && ingrediente.medida !== '1/2' && ingrediente.medida !== '1/4' && ingrediente.medida !== 'a gosto') && (
                                    <TextInput
                                        style={[styles.inputQuantidade, errors.ingredientes && errors.ingredientes[index] && styles.inputError]}
                                        placeholder="Por exemplo: 10"
                                        placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                                        value={ingrediente.quantidade}
                                        onChangeText={texto => atualizarIngrediente(index, 'quantidade', texto)}
                                        keyboardType="numeric"
                                        maxLength={4}
                                    />
                                )}

                                <View style={[styles.ListaInput, errors.ingredientes && errors.ingredientes[index] && styles.inputError]}>
                                    <Picker
                                        selectedValue={ingrediente.medida}
                                        onValueChange={valor => atualizarIngrediente(index, 'medida', valor)}
                                    >
                                        <Picker.Item style={{ color: scheme === 'dark' ? '#DDD' : '#505050' }} label="Medidas:" value="" enabled={false} />
                                        <Picker.Item style={styles.PickerItem} label="Gramas (g)" value="g" />
                                        <Picker.Item style={styles.PickerItem} label="A gosto" value="a gosto" />
                                        <Picker.Item style={styles.PickerItem} label="Quilograma (kg)" value="kg" />
                                        <Picker.Item style={styles.PickerItem} label="ML" value="ml" />
                                        <Picker.Item style={styles.PickerItem} label="Caixa" value="caixa" />
                                        <Picker.Item style={styles.PickerItem} label="Pacote" value="pacote" />
                                        <Picker.Item style={styles.PickerItem} label="Xícara (chá)" value="Xícara (chá)" />
                                        <Picker.Item style={styles.PickerItem} label="Fio" value="fio" />
                                        <Picker.Item style={styles.PickerItem} label="Dentes" value="dentes" />
                                        <Picker.Item style={styles.PickerItem} label="Ramo" value="ramo" />
                                        <Picker.Item style={styles.PickerItem} label="1/2 xícara (chá)" value="1/2 xícara (chá)" />
                                        <Picker.Item style={styles.PickerItem} label="1/2 " value="1/2" />
                                        <Picker.Item style={styles.PickerItem} label="1/4 xícara (chá)" value="1/4 xícara (chá)" />
                                        <Picker.Item style={styles.PickerItem} label="1/4" value="1/4" />
                                        <Picker.Item style={styles.PickerItem} label="Colher(es) de sopa" value="Colher(es) de sopa" />
                                        <Picker.Item style={styles.PickerItem} label="Colher(es) de chá" value="Colher(es) de chá" />
                                        <Picker.Item style={styles.PickerItem} label="Unidade(s)" value="Unidade(s)" />
                                        <Picker.Item style={styles.PickerItem} label="Litro(s)" value="Litro(s)" />
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
                                placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                                onChangeText={(text) => handleStepTextChange(index, text)}
                                maxLength={600}
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
                    <TouchableOpacity onPress={() => setVisibleModal(true)} >
                        <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                            end={{ x: 2, y: 1 }} style={styles.button} >
                            <Text style={styles.buttonText}>Publicar</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingVertical: 50 }} />

            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
            >
                <ActionModal
                    handleClose={() => setVisibleModal(false)}
                    handleAction={() => CadastrarReceita()}
                    status={'post'}
                />

            </Modal>

            <Modal
                visible={infoModal}
                transparent={true}
                onRequestClose={() => setInfoModal(false)}
            >
                <InfoAproveitamento
                    handleClose={() => setInfoModal(false)}
                />

            </Modal>
        </ScrollView>
    )
}