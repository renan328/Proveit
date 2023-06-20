import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Toast from 'react-native-toast-message';
import styles from './cadcategoria.module';
import * as ImagePicker from 'expo-image-picker';

export default function CadastroDeCategoria({ navigation }) {

    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState(null);
    const [errors, setErrors] = useState({});
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
                <Text style={stytoastStyleles.toastText}>{internalState.text1}</Text>
            </View>
        ),

        error: () => { },
        info: () => { },
        any_custom_type: () => { },
    };

    const showSuccessToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Bem vindo!',
            position: 'bottom',
            visibilityTime: 3000,
            bottomOffset: 120
        });
    };

    const showFailToast = () => {
        Toast.show({
            type: 'fail',
            text1: 'Foi mal! Tente novamente mais tarde.',
            position: 'bottom',
            visibilityTime: 3000,
            bottomOffset: 120
        });
    };

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.7,
        });

        if (!result.canceled) {
            setFoto(result.assets[0].uri);
        }
    };

    function handleRegister() {

        const body = { nome, foto }
        fetch("https://cloudproveit.azurewebsites.netzurewebsites.netzurewebsites.net/api/Categoria", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => { alert("Categoria cadastrado com sucesso!") })
            .catch((error) => {
                console.log(error);
                showFailToast;
            });

        console.log(body);
    }

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.CadastreSe}>Cadastre-se</Text>

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

            {/* Imagem de perfil */}
            <View style={styles.cadastro}>
                <Text style={styles.suafoto}>Foto de perfil</Text>

                <TouchableOpacity style={styles.BorderIcon} onPress={pickImage}>
                    <FontAwesomeIcon style={styles.IconCamera} icon={faCamera} size={58} />
                    {foto && <Image source={{ uri: foto }} style={styles.imagemUsu} />}
                </TouchableOpacity>
            </View>

            {/* Formulário */}
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
            </View>

            {/* Botão */}
            <View style={styles.botoes}>
                <TouchableOpacity onPress={handleRegister} >
                    <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 1 }} style={styles.button} >
                        <Text style={styles.buttonText}>Pronto</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
        </View>
    )
}
