import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Modal, useColorScheme, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faCircleCheck, faCircleXmark, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import stylesLight from './cadastrodeusuario.module';
import stylesDark from './cadastrodeusuario.moduleDark';
import showToast from '../../../hooks/toasts';
import { ActionModal } from '../../components/ActionModal/ActionModal'

export default function CadastroDeUsuario({ navigation }) {

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [nome, setNome] = useState('');
    const [nomeTag, setNomeTag] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [foto, setFoto] = useState(null);
    const [errors, setErrors] = useState({});

    const [visibleModal, setVisibleModal] = useState(false);

    let inputStyle = [styles.input];
    if (scheme === 'dark') {
        inputStyle.push(styles.inputDark);
    }

    const pickImage = async () => {

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
    };

    function handleRegister() {
        const errors = {};

        if (!nome.trim()) {
            errors.nome = "Nome é obrigatório";
        } else if (nome.trim().length < 2) {
            errors.nome = "O nome deve ter no mínimo 2 caracteres";
        }
        if (!nomeTag.trim()) {
            errors.nomeTag = "Nome de usuário é obrigatório";
        } else if (nomeTag.trim().length < 2) {
            errors.nomeTag = "O nome dde usuário deve ter no mínimo 2 caracteres";
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

        const body = { nome, foto, nomeTag, email, senha };

        if (Object.keys(errors).length > 0) {
            return;
        }

        // código de registro
        fetch("https://serverproveit.azurewebsites.net/api/auth/cadastro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => {
                if (response.ok) {
                    showToast('Cadastro concluido!', 'Você foi cadastrado! Faça seu login e desfrute do app!!', 'success');
                    navigation.navigate('LoginScreen');

                } else if (response.status === 409) {
                    response.text().then((message) => {

                        if (message.includes("e-mail")) {
                            showToast('Foi mal!', 'Este e-mail já está vinculado a uma conta.', 'error');
                        } else if (message.includes("nome de usuário")) {
                            showToast('Foi mal!', 'Este nome de usuário já está em uso.', 'error');
                        }
                    });
                } else {
                    showToast('Foi mal!', 'Erro desconhecido ao cadastrar o usuário. Tente novamente mais tarde.', 'error');
                }
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro desconhecido ao cadastrar o usuário. Tente novamente mais tarde.', 'error');
            });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao} >
                        <FontAwesomeIcon icon={faChevronLeft} color="#FF7152" size={30} />
                    </TouchableOpacity>

                    <Text style={styles.CadastreSe}>Cadastre-se</Text>

                    <View
                        style={{
                            borderBottomColor: '#505050',
                            opacity: 0.4,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: '80%', height: 5,
                            marginTop: 15
                        }}
                    />
                </View>

                <View style={styles.cadastro}>
                    <Text style={styles.suafoto}>Foto de perfil</Text>

                    <TouchableOpacity style={styles.BorderIcon} onPress={pickImage}>
                        {foto ? null : <FontAwesomeIcon style={styles.IconCamera} icon={faCamera} size={58} />}
                        {foto && <Image source={{ uri: foto }} style={styles.imagemUsu} />}
                    </TouchableOpacity>
                </View>

                <View style={styles.inputs}>
                    <View style={styles.inputSingle}>
                        <Text style={styles.inputTitle}>Nome</Text>
                        <TextInput
                            style={[styles.defaultInput, errors.nome && styles.inputError]}
                            placeholder="Nome"
                            placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                            value={nome}
                            onChangeText={(text) => setNome(text)}
                            maxLength={200}
                        />
                        {errors.nome && <Text style={styles.textError}>{errors.nome}</Text>}
                    </View>

                    <View style={styles.inputSingle}>
                        <Text style={styles.inputTitle}>Nome de usuário</Text>
                        <TextInput
                            style={[styles.defaultInput, errors.nomeTag && styles.inputError]}
                            placeholder="Nome de usuário"
                            placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                            value={nomeTag}
                            onChangeText={(text) => setNomeTag(text)}
                            maxLength={100}
                        />
                        {errors.nomeTag && <Text style={styles.textError}>{errors.nomeTag}</Text>}
                    </View>

                    <View style={styles.inputSingle}>
                        <Text style={styles.inputTitle}>E-mail</Text>
                        <TextInput
                            style={[styles.defaultInput, errors.email && styles.inputError]}
                            placeholder="E-mail"
                            value={email.toLowerCase()}
                            onChangeText={(text) => setEmail(text.replace(/\s+/g, '').toLowerCase())}
                            placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            maxLength={300}
                        />
                        {errors.email && <Text style={styles.textError}>{errors.email}</Text>}
                    </View>

                    <View style={styles.inputSingle}>
                        <Text style={styles.inputTitle}>Senha</Text>
                        <TextInput
                            style={[styles.defaultInput, errors.senha && styles.inputError]}
                            placeholder="Senha"
                            value={senha}
                            placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}

                            onChangeText={(text) => setSenha(text)}
                            secureTextEntry={true}
                            maxLength={20}
                        />
                        {errors.senha && <Text style={styles.textError}>{errors.senha}</Text>}
                    </View>

                    <View style={styles.inputSingle}>
                        <Text style={styles.inputTitle}>Confirme sua senha</Text>
                        <TextInput
                            style={[styles.defaultInput, errors.confirmSenha && styles.inputError]}
                            placeholder="Confirmar Senha"
                            placeholderTextColor={scheme === 'dark' ? '#DDD' : '#505050'}
                            value={confirmSenha}
                            onChangeText={(text) => setConfirmSenha(text)}
                            secureTextEntry={true}
                            maxLength={20}
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

            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
            >
                <ActionModal
                    handleClose={() => setVisibleModal(false)}
                    handleAction={() => handleRegister()}
                    status={'postUsuario'}
                />

            </Modal>

        </ScrollView>
    )
}