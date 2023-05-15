import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import CartaoReceita from "./CartãoReceita";
import CartaoReceitaBlank from './CartãoReceitaBlank';

export default function CarrosselHome() {

    const [dadosReceita, setDadosReceita] = useState([]);

    useEffect(() => {
        fetch("https://cloudproveit.azurewebsites.net/api/receita", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setDadosReceita(json);
            })
            .catch((error) => {
                alert("Erro ao buscar receitas");
            });
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
                <ScrollView horizontal={true} style={{ marginLeft: 10, }}>
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