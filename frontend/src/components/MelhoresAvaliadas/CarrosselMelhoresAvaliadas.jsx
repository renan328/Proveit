import React, { useEffect, useState } from 'react';
import showToast from '../../../hooks/toasts';
import { View, ScrollView } from 'react-native';
import CartaoReceitaMelhorAvaliado from './MelhoresAValiadas';
import CartaoReceitaBlank from '../CartaoReceita/CartaoReceitaBlank';
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function CarrosselHome() {

    const [dadosReceita, setDadosReceita] = useState([]);
    const navigation = useNavigation();

    async function ListarReceitas() {
        const headers = await HeaderRequisicao(navigation);

        fetch("https://serverproveit.azurewebsites.net/api/receita/ListarMaisComentadas", {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
            })
            .catch((error) => {
                showToast('Foi mal!', 'Erro ao buscar as receitas, tente novamente mais tarde.', 'error');
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
                            <CartaoReceitaMelhorAvaliado receita={receita} key={index} />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}