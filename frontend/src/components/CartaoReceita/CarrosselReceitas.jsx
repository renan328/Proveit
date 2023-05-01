import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import CartaoReceita from "./CartãoReceita";
import CartaoReceitaBlank from './CartãoReceitaBlank';

export default function CarrosselHome() {

    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        fetch("https://cloudproveit.azurewebsites.net/api/receita", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setReceitas(json);
            })
            .catch((error) => {
                alert("Erro ao buscar receitas");
            });
    }, []);

    console.log(receitas)

    if (receitas == '') {
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
                        receitas.map((receita, index) => (
                            <CartaoReceita receita={receita} key={index} />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}