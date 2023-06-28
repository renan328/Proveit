import React, { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import showToast from '../../../hooks/toasts';
import { View, ScrollView } from 'react-native';
import CartaoCategoria from './CartaoCategoria';
import CartaoCategoriaBlank from './CartaoCategoriaBlank';
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function CarrosselCategorias() {

    const [categorias, setCategorias] = useState([]);
    const navigation = useNavigation();

    async function ListarCategorias() {
        const headers = await HeaderRequisicao(navigation);

        fetch("https://serverproveit.azurewebsites.net/api/categoria/todas", {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setCategorias(json);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar as categorias, tente novamente mais tarde.', 'error');
            });
    }

    useEffect(() => {
        ListarCategorias();
    }, [])

    if (categorias == '') {
        return (
            <View>
                <ScrollView horizontal={true}>
                    <CartaoCategoriaBlank />
                    <CartaoCategoriaBlank />
                    <CartaoCategoriaBlank />
                </ScrollView>
            </View>
        )
    } else {

        return (
            <View>
                <ScrollView horizontal={true} style={{ marginBottom: 4 }}>
                    {
                        categorias.map((categoria, index) => (
                            <CartaoCategoria categoria={categoria} key={index} />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}