import React from 'react';
import { FlatList, View, Text, StyleSheet, ImageBackground, SectionList, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

//Componente único de categoria
const ListItem = ({ item }) => {
    return (
        <View style={styles.caixaPrincipal}>
            <ImageBackground source={item.uri} style={styles.imgCategoria} resizeMode="cover" imageStyle={{ borderRadius: 24 }}
            >
                <BlurView intensity={20}  tint="light" style={styles.textContainer}>
                    <Text style={styles.titulo}>{item.text}</Text>
                </BlurView>
            </ImageBackground>
        </View>

    );
};

//Função para o slider
function CarrosselCategorias() {
    return (
        <View style={styles.container}>
            <SectionList
                stickySectionHeadersEnabled={true} sections={SECTIONS} renderSectionHeader={({ section }) => (
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
    // aves: require('../../assets/cat_aves.jpg'),
    // bebidas: require('../../assets/cat_bebidas.jpg'),
    // bolos: require('../../assets/cat_bolos.jpg'),
    // carnes: require('../../assets/cat_carnes.jpg'),
    // doces: require('../../assets/cat_doces.jpg'),
    // frutosDoMar: require('../../assets/cat_frutosDoMar.jpg'),
    // japones: require('../../assets/cat_japones.jpg'),
    // lanches: require('../../assets/cat_lanches.jpg'),
    // lowCarb: require('../../assets/cat_lowCarb.jpg'),
    // massa: require('../../assets/cat_massa.jpg'),
    // molhos: require('../../assets/cat_molhos.jpg'),
    // rapidas: require('../../assets/cat_rapidas.jpg'),
    // saladas: require('../../assets/cat_saladas.jpg'),
    // salgados: require('../../assets/cat_salgados.jpg'),
    // sanduiches: require('../../assets/cat_sanduiches.jpg'),
    // snacks: require('../../assets/cat_snacks.jpg'),
    // sobremesas: require('../../assets/cat_sobremesas.jpg'),
    // sopas: require('../../assets/cat_sopas.jpg'),
    // torta: require('../../assets/cat_torta.jpg'),
    // vegano: require('../../assets/cat_vegano.jpg'),
    // vegetariano: require('../../assets/cat_vegetariano.jpg'),
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
        marginVertical: 8,
        paddingVertical: 2
    },

    imgCategoria: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },

    caixaPrincipal: {
        height: 88,
        width: '134px',
        textAlign: 'center',
        borderRadius: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        margin: 5
    },

    textContainer: {
        backgroundColor: 'rgba(255,255,255)',
        height: 25,
        display: 'flex',
        justifyContent: 'center',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius:24
    },

    titulo: {
        fontFamily: 'Raleway_600SemiBold',
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#000',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255, 0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius:24,
    },

    CarrosselContainer: {
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row'
    },

});