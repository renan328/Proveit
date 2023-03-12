import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, View, Text, StyleSheet, Image, SectionList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';




const ListItem = ({ item }) => {
    return (
        <View style={styles.caixaPrincipal}>
            <Image style={styles.imgReceita} source={item.uri} />
            <View style={styles.containerTexto}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.descricao} numberOfLines={1}>{item.descricao}</Text>
            </View>

            <LinearGradient colors={['#FF7152', '#FFB649']} style={styles.footer}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <FontAwesomeIcon style={styles.legenda} icon={faUtensils} />
                    <Text style={styles.legenda}>{item.porcoes}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <FontAwesomeIcon style={styles.legenda} icon={faClock} />
                    <Text style={styles.legenda} >{item.preparacao}</Text>
                </View>
            </LinearGradient>

        </View>
    );
};

function CarrosselReceitas() {
    return (
        <View style={styles.container}>
            <SectionList
                contentContainerStyle={{ paddingHorizontal: 0 }} stickySectionHeadersEnabled={false} sections={SECTIONS} renderSectionHeader={({ section }) => (
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

const SECTIONS = [
    {
        horizontal: true,
        data: [
            {
                key: '1',
                titulo: 'Frango Assado',
                descricao: 'Frango assado com limão',
                uri: slides.aves,
                porcoes: '7',
                preparacao: '4' + 'h'
            },
            {
                key: '2',
                titulo: 'Sucos de fruta',
                descricao: 'Sucos variados de laranja',
                uri: slides.bebidas,
                porcoes: '6',
                preparacao: '10' + 'min'
            },
            {
                key: '3',
                titulo: 'Bolo de brigadeiro com morango',
                descricao: 'Feito com chocolate e leite em pó',
                uri: slides.bolos,
                porcoes: '8',
                preparacao: '2' + 'h'
            },
            {
                key: '4',
                titulo: 'Salada de brócolis',
                descricao: 'Utilizando cenoura e carnes',
                uri: slides.rapidas,
                porcoes: '10',
                preparacao: '1' + 'h'
            },
        ]
    },
];

export default CarrosselReceitas;

const styles = StyleSheet.create({

    container: {
        marginLeft: 10
    },

    caixaPrincipal: {
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: '6px',
        justifyContent: 'space-between',
        width: '131.15px',
        height: '230px',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.29,
        shadowRadius: 2,
    },

    imgReceita: {
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        height: '62%',
        width: '100%',
        marginBottom: '2px'
    },

    containerTexto: {
        flexWrap: 'wrap',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5px',
        top: -4,
        flexShrink: 1
    },

    titulo: {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: '11px',
        fontWeight: '700',
        marginBottom: '3px'
    },

    descricao: {
        display: 'flex',
        flexWrap: 'wrap',
        color: '#9e9e9e',
        fontSize: '9px',
        flexShrink: 1
    },

    footer: {
        paddingVertical: '7px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row',
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,

    },

    legenda: {
        marginHorizontal: '3px',
        fontSize: '12px',
        fontWeight: '700',
        color: '#fff'
    }


});