import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Appearance, useColorScheme, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faCircleCheck, faCircleXmark, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import stylesLight from './cadastrodeusuario.module';
import stylesDark from './cadastrodeusuario.moduleDark';

export default function CadastroDeUsuario({ navigation }) {


    const scheme = useColorScheme();
    var styles = scheme === 'dark' ? stylesDark : stylesLight;

    const [nome, setNome] = useState('');
    const [nomeTagLower, setNomeTagLower] = useState('');
    const [emailLower, setEmailLower] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [foto, setFoto] = useState(null);
    const [errors, setErrors] = useState({});

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
        }
        if (!nomeTagLower.trim()) {
            errors.nomeTag = "Nome de usuário é obrigatório";
        }
        if (!emailLower.trim()) {
            errors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(emailLower)) {
            errors.email = "Email inválido";
        }
        if (isNaN(String(senha).trim())) {
            errors.senha = "Senha é obrigatória";
        } else if (senha.length < 6) {
            errors.senha = "Senha deve ter pelo menos 6 caracteres";
        }
        if (isNaN(String(confirmSenha).trim())) {
            errors.confirmSenha = "Confirmação de senha é obrigatória";
        } else if (confirmSenha !== senha) {
            errors.confirmSenha = "As senhas não coincidem";
        }
        setErrors(errors);

        const nomeTag = nomeTagLower.toLowerCase();
        const email = emailLower.toLowerCase();
        const body = { nome, foto, nomeTag, email, senha };

        if (Object.keys(errors).length > 0) {
            return;
        }

        // código de registro
        fetch("https://localhost:7219/api/auth/cadastro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => {
                if (response.ok) {
                    alert("Usuário cadastrado com sucesso!");
                    navigation.navigate('Login');
                } else if (response.status === 409) {
                    response.text().then((message) => {
                        if (message.includes("email")) {
                            errors.email = message;
                        } else if (message.includes("nome de usuário")) {
                            errors.nomeTag = message;
                        } else {
                            alert(message);
                        }
                    });
                } else {
                    alert("Erro desconhecido ao cadastrar o usuário.");
                }
            })
            .catch((error) => {
                console.log(error);
            });

        console.log(body);

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
                            value={nome}
                            onChangeText={(text) => setNome(text)}
                        />
                        {errors.nome && <Text style={styles.textError}>{errors.nome}</Text>}
                    </View>

                    <View style={styles.inputSingle}>
                        <Text style={styles.inputTitle}>Nome de usuário</Text>
                        <TextInput
                            style={[styles.defaultInput, errors.nomeTag && styles.inputError]}
                            placeholder="Nome de usuário"
                            value={nomeTagLower}
                            onChangeText={(text) => setNomeTagLower(text)}
                        />
                        {errors.nomeTag && <Text style={styles.textError}>{errors.nomeTag}</Text>}
                    </View>

                    <View style={styles.inputSingle}>
                        <Text style={styles.inputTitle}>E-mail</Text>
                        <TextInput
                            style={[styles.defaultInput, errors.email && styles.inputError]}
                            placeholder="E-mail"
                            value={emailLower}
                            onChangeText={(text) => setEmailLower(text)}
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
                            onChangeText={(text) => setConfirmSenha(text)}
                            secureTextEntry={true}
                        />
                        {errors.confirmSenha && <Text style={styles.textError}>{errors.confirmSenha}</Text>}
                    </View>
                </View>

                <View style={styles.botoes}>
                    <TouchableOpacity onPress={handleRegister} >
                        <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                            end={{ x: 2, y: 2 }} style={styles.button} >
                            <Text style={styles.buttonText}>Pronto</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}