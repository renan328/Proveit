import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


function ReceitaEspecial() {

    return (

        //
        <LinearGradient start={{ x: -1, y: 1 }}
            end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.containerEspecial}>
            <View style={styles.containerTexto}>
                <Text style={styles.tituloEspecial}>Nossa </Text>
                <Text style={styles.tituloEspecial2}>seleção</Text>
                <FontAwesomeIcon icon={'pot-food'} />
            </View>
            <View style={styles.containerReceita}>
                <Image style={styles.imagemReceita}
                    source={require('../../assets/cat_molhos.jpg')}></Image>
                <Text style={styles.tituloReceita}>Hambúrguer</Text>
            </View>
        </LinearGradient>
    )

}

export default ReceitaEspecial;

const styles = StyleSheet.create({

    containerEspecial: {
        paddingHorizontal: '20px',
        marginVertical: '30px',
        width: '100%',
        height: '220px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    containerTexto: {

    },

    tituloEspecial: {
        fontSize: '30px',
        color: '#fff',
        fontWeight: '600',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3
    },

    tituloEspecial2: {
        fontSize: '30px',
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '700',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3
    }

});