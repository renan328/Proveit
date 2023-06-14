import React, { useEffect, useState } from 'react';
import showToast from '../../../hooks/toasts';
import { View, ScrollView } from 'react-native';
import CartaoReceita from "./CartaoReceita";
import CartaoReceitaBlank from './CartaoReceitaBlank';
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function CarrosselHome({ filtro }) {

    const [dadosReceita, setDadosReceita] = useState([]);
    const navigation = useNavigation();

    async function ListarReceitas() {
        const headers = await HeaderRequisicao(navigation);

        fetch("https://cloudproveit.azurewebsites.net/api/receita/filtro/" + filtro, {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar receitas, tente novamente mais tarde.', 'error');
            });
    }

    useEffect(() => {
        ListarReceitas();
    }, []);

    if (dadosReceita == '') {
        return (
            <View>
                <ScrollView horizontal={true} style={{ marginLeft: 10, }}>
                    <CartaoReceitaBlank />
                    <CartaoReceitaBlank />
                    <CartaoReceitaBlank />
                </ScrollView>
            </View>
        )
    } else {
        return (
            <View>
                <ScrollView horizontal={true} style={{ marginLeft: 10 }}>
                    {
                        dadosReceita.map((receita, index) => (
                            <CartaoReceita receita={receita} key={index} />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}