import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';
import styles from './cadastrodeusuario.module';
import * as ImagePicker from 'expo-image-picker';
import toastStyle from '../Toasts/toasts';

const schema = yup.object().shape({
    nome: yup.string().required('Campo obrigatório'),
    nomeTag: yup.string().required('Campo obrigatório'),
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    senha: yup.string().min(8, 'Mínimo de 8 caracteres').required('Campo obrigatório'),
    RedigiteSenha: yup.string().min(8, 'Mínimo de 8 caracteres').required('Campo obrigatório').oneOf([yup.ref('senha'), null], 'As senhas não são iguais')
});

const CampoFormulario = ({ control, fieldName, placeholder, secureTextEntry, errors }) => {
    return (
        <View>
            <Controller
                control={control}
                name={fieldName}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[
                            styles.defaultInput, {
                                borderWidth: errors[fieldName] && 1,
                                borderColor: errors[fieldName] && '#ff375b'
                            }]}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                    />
                )}
            />
            {errors[fieldName] && <Text style={styles.textError}>{errors[fieldName].message}</Text>}
        </View>
    );
};

export default function CadastroDeUsuario({ navigation }) {

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

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function handleRegister(data) {

        fetch("https://localhost:7219/api/Usuario", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => { showSuccessToast; navigation.navigate('Main') })
            .catch((error) => {
                console.log(error);
                showFailToast;
            });

        console.log(data);
    };

    const [image, setImage] = useState(null);

    const pickImage = async () => {

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

    const [nome, setNome] = useState('');
    const [nomeTag, setNomeTag] = useState('');

    const [selected, setSelected] = React.useState('');

    const dataCategoria = [
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
        { key: '21', value: 'Vegetariano' },
    ];

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
                        width: '330px', height: '5px',
                        marginTop: '15px'
                    }}
                />
            </View>

            {/* Imagem de perfil */}
            <View style={styles.cadastro}>
                <Text style={styles.suafoto}>Foto de perfil</Text>

                <TouchableOpacity style={styles.BorderIcon} onPress={pickImage}>
                    <FontAwesomeIcon style={styles.IconCamera} icon={faCamera} size={58} />
                    {image && <Image source={{ uri: image }} style={styles.imagemUsu} />}
                </TouchableOpacity>
            </View>

            {/* Formulário */}
            <View style={styles.inputs}>
                <View style={styles.inputSingle}>
                    <Text style={styles.inputTitle}>Nome</Text>
                    <CampoFormulario control={control} fieldName="nome" placeholder="Seu nome" errors={errors} />
                </View>

                <View style={styles.inputSingle}>
                    <Text style={styles.inputTitle}>Nome de usuário</Text>
                    <CampoFormulario control={control} fieldName="nomeTag" placeholder="Nome de usuário" errors={errors} />
                </View>

                <View style={styles.inputSingle}>
                    <Text style={styles.inputTitle}>E-mail</Text>
                    <CampoFormulario control={control} fieldName="email" placeholder="E-mail" errors={errors} />
                </View>


                <View style={styles.inputSingle}>
                    <Text style={styles.inputTitle}>Senha</Text>
                    <CampoFormulario control={control} fieldName="senha" placeholder="Senha" secureTextEntry errors={errors} />

                </View>

                <View style={styles.inputSingle}>
                    <Text style={styles.inputTitle}>Redigite sua senha</Text>
                    <CampoFormulario control={control} fieldName="RedigiteSenha" placeholder="Redigite sua senha" secureTextEntry errors={errors} />
                </View>

            </View>

            {/* Botão */}
            <View style={styles.botoes}>
                <TouchableOpacity onPress={handleSubmit(handleRegister)} >
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
