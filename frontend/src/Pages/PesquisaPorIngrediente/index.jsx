import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Image, useColorScheme, TouchableOpacity, ActivityIndicator } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import stylesLight from "./pesquisaporingrediente.module";
import stylesDark from "./pesquisaporingrediente.moduleDark";
import CartaoFavorito from "../../components/CartaoFavorito/CartaoFavorito";
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import showToast from '../../../hooks/toasts';

export default function PesquisaPorIngrediente() {
    const navigation = useNavigation();

    const [dadosReceita, setDadosReceita] = useState([]);
    const [ingredientes, setIngredientes] = useState(['']);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    async function Pesquisar() {
        const errors = {};
        setLoading(true);

        if (!ingredientes.every((ingrediente) => ingrediente.trim())) {
            errors.ingredientes = "Todos os ingredientes devem ser preenchidos";
        }
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            setLoading(false);
            return;
        }

        const headers = await HeaderRequisicao(navigation);

        const baseUrl = 'https://serverproveit.azurewebsites.net/api/Receita/PesquisaPorIngredientes';
        const url = `${baseUrl}?ingredientes=${encodeURIComponent(ingredientes[0] || '')}&ingredientes=${encodeURIComponent(ingredientes[1] || '')}&ingredientes=${encodeURIComponent(ingredientes[2] || '')}&ingredientes=${encodeURIComponent(ingredientes[3] || '')}&ingredientes=${encodeURIComponent(ingredientes[4] || '')}`;

        fetch(url, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
                setLoading(false);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar receitas, tente novamente mais tarde.', 'error');
                setLoading(false);
            });
    }

    const addIngrediente = () => {
        if (ingredientes.length < 5) {
            setIngredientes([...ingredientes, '']);
        }
    };

    const removeIngrediente = (index) => {
        const updatedIngredientes = [...ingredientes];
        updatedIngredientes.splice(index, 1);
        setIngredientes(updatedIngredientes);
    };

    const handleNomeIngredienteChange = (index, nome) => {
        const updatedIngredientes = [...ingredientes];
        updatedIngredientes[index] = nome;
        setIngredientes(updatedIngredientes);
    };

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight

    let inputStyle = [styles.input];
    if (scheme === 'dark') {
        inputStyle.push(styles.inputDark);
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.subText}>Buscar <Text style={[styles.subText, { color: scheme === 'dark' ? '#fff' : '#505050' }]}>por</Text></Text>

                    <View style={styles.ScreenSelect}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ color: '#505050', fontFamily: 'Raleway_700Bold' }}>Receitas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: '#FF7152', fontFamily: 'Raleway_700Bold' }}>Ingredientes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.defaultInput}>
                        <View style={{ flexDirection: 'column' }} >
                            {ingredientes.map((nomeIngrediente, index) => (
                                <View key={index} style={styles.addableComponent}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.stepNumber}>{`#${index + 1}`}</Text>
                                        <Text style={styles.TextInput2}>Ingrediente</Text>
                                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#505050' }} size={20} /> */}
                                    </View>

                                    <TextInput
                                        style={[styles.allInput, errors.ingredientes && errors.ingredientes[index] && styles.inputError]}
                                        value={nomeIngrediente}
                                        placeholder={"Nome do seu ingrediente"}
                                        placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                                        onChangeText={(nome) => handleNomeIngredienteChange(index, nome)}
                                    />

                                    {errors.ingredientes && errors.ingredientes[index] && (
                                        <Text style={styles.textError}>{errors.ingredientes}</Text>
                                    )}
                                </View>
                            ))}
                        </View>
                        <View style={styles.addRemoveButtonsContainer}>
                            {ingredientes.length < 5 && (
                                <TouchableOpacity onPress={addIngrediente} style={styles.addButton}>
                                    <FontAwesomeIcon icon={faPlus} color='#FF7152' />
                                    <Text style={styles.addButtonText}> Adicionar ingrediente</Text>
                                </TouchableOpacity>
                            )}

                            {ingredientes.length > 1 && (
                                <TouchableOpacity onPress={() => removeIngrediente(ingredientes.length - 1)} style={styles.removeButton}>
                                    <FontAwesomeIcon icon={faTrashCan} color="#505050" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#505050',
                            opacity: 0.4,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: 330, height: 5,
                            marginTop: 15
                        }}
                    />
                </View>
            </View>
            <View style={styles.botoes}>
                <TouchableOpacity onPress={Pesquisar} >
                    <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 2 }} style={styles.button} >
                        <Text style={styles.buttonText}>Pesquisar</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.CardsList}>

                {loading ? (
                    <View style={{ display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium' }}>Um momento, estamos buscando!</Text>
                        <ActivityIndicator size="large" color="#FF7152" style={{ marginTop: 10 }} />
                    </View>
                ) : (
                    <>
                        {dadosReceita.length > 0 ? (
                            <>
                                {dadosReceita.map((receita, index) => (
                                    <CartaoFavorito dadosReceita={receita} key={index} />
                                ))}
                            </>
                        ) : null}
                    </>
                )}
                {dadosReceita.length === 0 && !loading && <Text style={{ color: scheme === 'dark' ? '#909090' : '#505050', fontFamily: 'Raleway_500Medium', alignSelf: 'center' }}>Nenhum resultado encontrado.</Text>}
            </View>
            <View style={{ paddingVertical: 50 }} />
        </ScrollView>
    );
}