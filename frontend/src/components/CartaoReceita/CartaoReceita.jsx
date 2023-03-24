import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUtensils, faClock } from '@fortawesome/free-solid-svg-icons';

const ListItem = ({ uri, title, description, portions, time }) => {

const truncatedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;

    return (

        <View style={styles.caixaPrincipal}>

            {/* Container de imagem e texto */}
            <Image style={styles.imgReceita} source={uri} />
            <View style={styles.containerTexto}>
                <Text style={styles.titulo}>{truncatedTitle}</Text>
                <Text style={styles.descricao} numberOfLines={1}>{description}</Text>
            </View>

            {/* Informações da footer */}
            <LinearGradient start={{ x: -1, y: 1 }}
                end={{ x: 2, y: 1 }} colors={['#FF7152', '#FF7152']} style={styles.footer}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <FontAwesomeIcon style={styles.legenda} icon={faUtensils} />
                    <Text style={styles.legenda}>{portions}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <FontAwesomeIcon style={styles.legenda} icon={faClock} />
                    <Text style={styles.legenda} >{time}</Text>
                </View>
            </LinearGradient>

        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({

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
        paddingHorizontal: '7px',
        top: -4,
        flexShrink: 1
    },

    titulo: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        fontSize: '11px',
        fontWeight: '700',
        marginBottom: '3px',
        fontFamily: 'Raleway_700Bold'
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
        fontFamily: 'Raleway_500Medium',
        color: '#fff'
    }


});
