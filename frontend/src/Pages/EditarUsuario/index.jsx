import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, useColorScheme, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faPencil, faCircleXmark, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import stylesLight from './editarusuario.module';
import stylesDark from './editarusuario.moduleDark';
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from '../../AuthContext';
import showToast from '../../../hooks/toasts';
import { ActionModal } from '../../components/ActionModal/ActionModal'
import { LoadingReceita } from '../../components/LoadingReceita/LoadingReceita'

export default function EditarUsuario({ navigation }) {

    const [nome, setNome] = useState('');
    const [nomeTag, setNomeTag] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [foto, setFoto] = useState(null);
    const [errors, setErrors] = useState({});
    const [idUsuario, setIdUsuario] = useState(0);

    const [visibleModal, setVisibleModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    let inputStyle = [styles.input];
    if (scheme === 'dark') {
        inputStyle.push(styles.inputDark);
    }

    async function BuscarUsuario() {
        const userDataJWT = await DadosUsuario();
        const headers = await HeaderRequisicao(navigation);
        setLoading(true);

        fetch("https://serverproveit.azurewebsites.net/api/usuario/" + userDataJWT.ID, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((usuario) => {
                setNome(usuario.nome);
                setNomeTag(usuario.nomeTag);
                setEmail(usuario.email);
                setSenha(usuario.senha);
                setFoto(usuario.foto);
                setIdUsuario(usuario.idUsuario);

                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                showToast('Foi mal!', 'Erro ao buscar seus dados, tente novamente mais tarde.', 'error');
            });
    }

    useEffect(() => {
        BuscarUsuario();
    }, []);

    const pickImage = async () => {

        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 0.5,
                base64: true
            });

            if (!result.canceled) {
                setFoto('data:image/jpeg;base64,' + result.assets[0].base64);
            }
        } catch (error) {
            console.log(error)
        }

    };

    async function handleEdit() {
        const errors = {};

        if (!nome.trim()) {
            errors.nome = "Nome é obrigatório";
        } else if (nome.trim().length < 2) {
            errors.nome = "O nome deve ter no mínimo 2 caracteres";
        }
        if (!nomeTag.trim()) {
            errors.nomeTag = "Nome de usuário é obrigatório";
        } else if (nomeTag.trim().length < 2) {
            errors.nomeTag = "O nome deve usuário deve ter no mínimo 2 caracteres";
        }
        if (!email.trim()) {
            errors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email inválido";
        }
        if (!senha.trim()) {
            errors.senha = "Senha é obrigatória";
        } else if (senha.length < 6) {
            errors.senha = "Senha deve ter pelo menos 6 caracteres";
        }
        if (!confirmSenha.trim()) {
            errors.confirmSenha = "Confirmação de senha é obrigatória";
        } else if (confirmSenha !== senha) {
            errors.confirmSenha = "As senhas não coincidem";
        }
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }
        if (idUsuario === 0) {
            return;
        }

        const body = { idUsuario, nome, foto, nomeTag, email, senha };
        const headers = await HeaderRequisicao(navigation);

        fetch("https://serverproveit.azurewebsites.net/api/usuario", {
            method: "PUT",
            headers,
            body: JSON.stringify(body)
        })
            .then((response) => {
                if (response.ok) {
                    showToast('Peril editado!', 'Você editou seu perfil com sucesso!', 'success');
                    navigation.navigate('PerfilScreen');
                } else if (response.status === 409) {
                    response.text().then((message) => {

                        if (message.includes("e-mail")) {
                            showToast('Foi mal!', 'Este e-mail já está vinculado a uma conta.', 'error');
                        } else if (message.includes("nome de usuário")) {
                            showToast('Foi mal!', 'Este nome de usuário já está em uso.', 'error');
                        }
                    });
                } else {
                    showToast('Foi mal!', 'Erro desconhecido ao editar o usuário. Tente novamente mais tarde.', 'error');
                }
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao editar usuário!', 'error');
            });
    };

    if (!loading) {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao} >
                            <FontAwesomeIcon icon={faChevronLeft} color="#FF7152" size={30} />
                        </TouchableOpacity>

                        <Text style={styles.CadastreSe}>Edite seu perfil</Text>

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

                    <View style={styles.cadastro}>
                        <Text style={styles.suafoto}>Foto de perfil</Text>

                        <TouchableOpacity style={styles.BorderIcon} onPress={pickImage}>
                            {foto ? null : <FontAwesomeIcon style={styles.IconCamera} icon={faCamera} size={58} />}
                            {foto && (
                                <View style={styles.ImagePencil}>
                                    <Image source={{ uri: foto }} style={styles.imagemUsu} />
                                    <View style={styles.IconContainer}>
                                        <FontAwesomeIcon style={styles.IconPencil} icon={faPencil} size={58} color='#FF7152' />
                                    </View>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputs}>
                        <View style={styles.inputSingle}>
                            <Text style={styles.inputTitle}>Nome</Text>
                            <TextInput
                                style={[styles.defaultInput, errors.nome && styles.inputError]}
                                placeholder="Nome"
                                value={nome}
                                placeholderTextColor={scheme === 'dark' ? '#DDD' : '#000'}
                                onChangeText={(text) => setNome(text)}
                            />
                            {errors.nome && <Text style={styles.textError}>{errors.nome}</Text>}
                        </View>

                        <View style={styles.inputSingle}>
                            <Text style={styles.inputTitle}>Nome de usuário</Text>
                            <TextInput
                                style={[styles.defaultInput, errors.nomeTag && styles.inputError]}
                                placeholder="Nome de usuário"
                                value={nomeTag}
                                placeholderTextColor={scheme === 'dark' ? '#DDD' : '#000'}
                                onChangeText={(text) => setNomeTag(text)}
                            />
                            {errors.nomeTag && <Text style={styles.textError}>{errors.nomeTag}</Text>}
                        </View>

                        <View style={styles.inputSingle}>
                            <Text style={styles.inputTitle}>E-mail</Text>
                            <TextInput
                                style={[styles.defaultInput, errors.email && styles.inputError]}
                                placeholder="E-mail"
                                value={email}
                                placeholderTextColor={scheme === 'dark' ? '#DDD' : '#000'}
                                onChangeText={(text) => setEmail(text)}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            {errors.email && <Text style={styles.textError}>{errors.email}</Text>}
                        </View>

                        <View style={styles.inputSingle}>
                            <Text style={styles.inputTitle}>Senha</Text>
                            <TextInput
                                style={[styles.defaultInput, errors.senha && styles.inputError]}
                                placeholder="Senha"
                                value={senha}
                                placeholderTextColor={scheme === 'dark' ? '#DDD' : '#000'}
                                onChangeText={(text) => setSenha(text)}
                                secureTextEntry={true}
                            />
                            {errors.senha && <Text style={styles.textError}>{errors.senha}</Text>}
                        </View>

                        <View style={styles.inputSingle}>
                            <Text style={styles.inputTitle}>Confirme sua senha</Text>
                            <TextInput
                                style={[styles.defaultInput, errors.confirmSenha && styles.inputError]}
                                placeholder="Confirmar Senha"
                                value={confirmSenha}
                                placeholderTextColor={scheme === 'dark' ? '#DDD' : '#000'}
                                onChangeText={(text) => setConfirmSenha(text)}
                                secureTextEntry={true}
                            />
                            {errors.confirmSenha && <Text style={styles.textError}>{errors.confirmSenha}</Text>}
                        </View>
                    </View>

                    <View style={styles.botoes}>
                        <TouchableOpacity onPress={() => setVisibleModal(true)} >
                            <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                                end={{ x: 2, y: 2 }} style={styles.button} >
                                <Text style={styles.buttonText}>Pronto</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingVertical: 30, backgroundColor: scheme === 'dark' ? '#202020' : '#FFFFFF' }} />

                <Modal
                    visible={visibleModal}
                    transparent={true}
                    onRequestClose={() => setVisibleModal(false)}
                >
                    <ActionModal
                        handleClose={() => setVisibleModal(false)}
                        handleAction={() => handleEdit()}
                        status={'putUsuario'}
                    />
                </Modal>

            </ScrollView>
        )
    } else {
        return <LoadingReceita message={"Buscando seu perfil..."} />
    }

}