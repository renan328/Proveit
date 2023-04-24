import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import CartaoReceita from "./CartãoReceita";

export default function CarrosselHome() {
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7219/api/Receita", {
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

    return (
        <View>
            <ScrollView horizontal={true} style={{marginLeft: 10, }}>
                {
                    receitas.map((receita, index) => (
                        <CartaoReceita receita={receita} key={index} />
                    ))
                }
            </ScrollView>
        </View>
    )
}