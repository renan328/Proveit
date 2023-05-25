import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import CartaoCategoria from './CartaoCategoria';
import CartaoCategoriaBlank from './CartaoCategoriaBlank';

export default function CarrosselCategorias() {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        fetch("https://cloudproveit.azurewebsites.net/api/categoria/todas", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setCategorias(json);
            })
            .catch((error) => {
                alert("Erro ao buscar categoirias");
            });
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
                <ScrollView horizontal={true} style={{marginBottom: 4 }}>
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