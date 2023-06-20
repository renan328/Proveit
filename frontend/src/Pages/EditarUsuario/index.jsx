import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faCircleCheck, faCircleXmark, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import stylesLight from './editarusuario.module';
import stylesDark from './editarusuario.moduleDark';
import { HeaderRequisicao } from '../../AuthContext';
import { DadosUsuario } from '../../AuthContext';
import showToast from '../../../hooks/toasts';

export default function EditarUsuario({ navigation }) {

    const [nome, setNome] = useState('');
    const [nomeTag, setNomeTag] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [foto, setFoto] = useState(null);
    const [errors, setErrors] = useState({});
    const [idUsuario, setIdUsuario] = useState(0);

    async function BuscarUsuario() {
        const userDataJWT = await DadosUsuario();
        const headers = await HeaderRequisicao(navigation);

        fetch("https://cloudproveit.azurewebsites.netzurewebsites.netzurewebsites.net/api/usuario/" + userDataJWT.ID, {
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
            })
            .catch((error) => {
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
        }
        if (!nomeTag.trim()) {
            errors.nomeTag = "Nome de usuário é obrigatório";
        }
        if (!email.trim()) {
            errors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email inválido";
        }
        if (!senha) {
            errors.senha = "Senha é obrigatória";
        } else if (senha.length < 6) {
            errors.senha = "Senha deve ter pelo menos 6 caracteres";
        }
        if (!confirmSenha) {
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

        fetch("https://cloudproveit.azurewebsites.netzurewebsites.netzurewebsites.net/api/usuario", {
            method: "PUT",
            headers,
            body: JSON.stringify(body)
        })
            .then(() => { alert("Usuário editado com sucesso"); })
            .catch((error) => {
                console.log(error);
                alert("Erro ao editar resultado");
            });

        console.log(body);

    };

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    let inputStyle = [styles.input];
    if (scheme === 'dark') {
        inputStyle.push(styles.inputDark);
    }
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
                            placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
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
                            placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
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
                            placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
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
                            placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
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
                            placeholderTextColor={scheme === 'dark' ? '#fff' : '#000'}
                            onChangeText={(text) => setConfirmSenha(text)}
                            secureTextEntry={true}
                        />
                        {errors.confirmSenha && <Text style={styles.textError}>{errors.confirmSenha}</Text>}
                    </View>
                </View>

                <View style={styles.botoes}>
                    <TouchableOpacity onPress={handleEdit} >
                        <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                            end={{ x: 2, y: 2 }} style={styles.button} >
                            <Text style={styles.buttonText}>Pronto</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingVertical: 30, backgroundColor: scheme === 'dark' ? '#202020' : '#ffffff' }} />
        </ScrollView>
    )
}