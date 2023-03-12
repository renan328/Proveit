import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, SectionList } from 'react-native';

//Componente único de categoria
const ListItem = ({ item }) => {
    return (
        <View style={styles.caixaPrincipal}>
            <Image source={item.uri} style={styles.imgCategoria} resizeMode="cover" />
            <Text style={styles.titulo}>{item.text}</Text>
        </View>
    );
};

//Função para o slider
function CarrosselCategorias() {
    return (
        <View style={styles.container}>
            <SectionList
                contentContainerStyle={{ paddingHorizontal: 5 }} stickySectionHeadersEnabled={false} sections={SECTIONS} renderSectionHeader={({ section }) => (
                    <>
                        {section.horizontal ? (
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

//Imagens usadas
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

//Lista dos cartões
const SECTIONS = [
    {
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Aves',
                uri: slides.aves,
            },
            {
                key: '2',
                text: 'Bebidas',
                uri: slides.bebidas,
            },
            {
                key: '3',
                text: 'Bolos',
                uri: slides.bolos,
            },
            {
                key: '4',
                text: 'Carnes',
                uri: slides.carnes,
            },
            {
                key: '5',
                text: 'Doces',
                uri: slides.doces,
            },
            {
                key: '6',
                text: 'Frutos do Mar',
                uri: slides.frutosDoMar,
            },
            {
                key: '7',
                text: 'Japonês',
                uri: slides.japones,
            },
            {
                key: '8',
                text: 'Lanches',
                uri: slides.lanches,
            },
            {
                key: '9',
                text: 'Massas',
                uri: slides.massa,
            },
            {
                key: '10',
                text: 'Molhos',
                uri: slides.molhos,
            },
            {
                key: '11',
                text: 'Rapidas',
                uri: slides.rapidas,
            },
            {
                key: '12',
                text: 'Saladas',
                uri: slides.saladas,
            },
            {
                key: '13',
                text: 'Salgados',
                uri: slides.salgados,
            },
            {
                key: '14',
                text: 'Sanduíches',
                uri: slides.sanduiches,
            },
            {
                key: '15',
                text: 'Snacks',
                uri: slides.snacks,
            },
            {
                key: '16',
                text: 'Sobremesas',
                uri: slides.sobremesas,
            },
            {
                key: '17',
                text: 'Sopas',
                uri: slides.sopas,
            },
            {
                key: '18',
                text: 'Tortas',
                uri: slides.torta,
            },
            {
                key: '19',
                text: 'Vegano',
                uri: slides.vegano,
            },
            {
                key: '20',
                text: 'Vegetariano',
                uri: slides.vegetariano,
            },

        ]
    },
];

export default CarrosselCategorias;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: '8px',
        paddingVertical: '2px'
      },

    caixaPrincipal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: '0',
        paddingBottom: '10px',
        height: '100px',
        minWidth: '70px',
        maxWidth: '150px',
        textAlign: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginHorizontal: '5px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,
    },

    titulo: {
        fontSize: '12px',
        color: '#fff',
        fontWeight: '500'
    },

    CarrosselContainer: {
        marginVertical: '20px',
        display: 'flex',
        flexDirection: 'row'
    },

    imgCategoria: {

        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: '100%',
        height: '80%',
        marginBottom: '2px'
    },

});