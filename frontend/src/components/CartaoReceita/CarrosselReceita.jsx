import { useEffect, useState } from 'react';
import React from "react";
import { FlatList, View, SectionList } from 'react-native';
import CartaoReceita from "./CartaoReceita";

function CarrosselReceitas({ }) {

    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7219/api/Re", {
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

    const ListItem = ({ receitas }) => {
        return (
            receitas.map((receita, index) => (
                <CartaoReceita receita={receita} key={index}/>
            ))
        );
    };

    return (
        // Funções do carrossel, container principal
        <View style={{ marginLeft: 10 }}>

            {/* Container SectionList, quebra as informações para retornar de maneira organizada. */}
            <SectionList
                contentContainerStyle={{ paddingHorizontal: 0 }} stickySectionHeadersEnabled={false} sections={receitas} renderSectionHeader={({ section }) => (
                    <>
                        {section.horizontal ? (

                            // Componente FlatList, retorna apenas o slider com base no JSON mais abaixo
                            <FlatList
                                horizontal
                                data={section.data}
                                renderItem={({ item }) => <ListItem item={item} />}
                                showsHorizontalScrollIndicator={false}
                            />
                        ) : null}
                    </>
                )}
                renderItem={({ item, section }) => {
                    if (section.horizontal) {
                        return null;
                    }
                    return <ListItem item={item} />;
                }}
            />
        </View>
    )
}


//Imagens de base, pré-integração, são as mesmas imagens das categorias
const slides = {
    aves: require('../../assets/cat_aves.jpg'),
    bebidas: require('../../assets/cat_bebidas.jpg'),
    bolos: require('../../assets/cat_bolos.jpg'),
    carnes: require('../../assets/cat_carnes.jpg'),
    doces: require('../../assets/cat_doces.jpg'),
    frutosDoMar: require('../../assets/cat_frutosDoMar.jpg'),
    japones: require('../../assets/cat_japones.jpg'),
    lanches: require('../../assets/cat_lanches.jpg'),
    lowCarb: require('../../assets/cat_lowCarb.jpg'),
    massa: require('../../assets/cat_massa.jpg'),
    molhos: require('../../assets/cat_molhos.jpg'),
    rapidas: require('../../assets/cat_rapidas.jpg'),
    saladas: require('../../assets/cat_saladas.jpg'),
    salgados: require('../../assets/cat_salgados.jpg'),
    sanduiches: require('../../assets/cat_sanduiches.jpg'),
    snacks: require('../../assets/cat_snacks.jpg'),
    sobremesas: require('../../assets/cat_sobremesas.jpg'),
    sopas: require('../../assets/cat_sopas.jpg'),
    torta: require('../../assets/cat_torta.jpg'),
    vegano: require('../../assets/cat_vegano.jpg'),
    vegetariano: require('../../assets/cat_vegetariano.jpg'),
}


//JSON para retorno na FlatList
const SECTIONS = [
    {
        horizontal: true,
        data: [
            {
                key: '1',
                titulo: 'Frango Assado Assado Assado Assado',
                descricao: 'Frango assado com limão',
                uri: slides.aves,
                porcoes: '7',
                preparacao: '4' + 'h',
                navegacao: 'ReceitaSingle',
            },
            {
                key: '2',
                titulo: 'Sucos de fruta',
                descricao: 'Sucos variados de laranja',
                uri: slides.bebidas,
                porcoes: '6',
                preparacao: '10' + 'min',
                navegacao: 'ReceitaSingle',
            },
            {
                key: '3',
                titulo: 'Bolo de brigadeiro com morango',
                descricao: 'Feito com chocolate e leite em pó',
                uri: slides.bolos,
                porcoes: '8',
                preparacao: '2' + 'h',
                navegacao: 'ReceitaSingle',
            },
            {
                key: '4',
                titulo: 'Salada de brócolis',
                descricao: 'Utilizando cenoura e carnes',
                uri: slides.rapidas,
                porcoes: '10',
                preparacao: '1' + 'h',
                navegacao: 'ReceitaSingle',

            },
        ]
    },
];

export default CarrosselReceitas;
