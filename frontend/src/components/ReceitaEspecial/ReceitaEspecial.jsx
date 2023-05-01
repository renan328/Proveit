import React from 'react';
import { View, Text, StyleSheet, Image, Touchable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-web';

function ReceitaEspecial() {

    return (

        <View style={styles.containerEspecial}>
            <View style={styles.containerTexto}>
                <Text style={styles.tituloEspecial}>Nossa </Text>
                <Text style={styles.tituloEspecial2}>seleção</Text>
            </View>
            <TouchableOpacity style={styles.containerReceita}>
                <Image style={styles.imagemReceita}
                    source={require('../../assets/cat_molhos.jpg')}></Image>
                <Text style={styles.tituloReceita}>Hambúrguer</Text>
            </TouchableOpacity>
        </View>
    )

}

export default ReceitaEspecial;

const styles = StyleSheet.create({

    containerEspecial: {
        paddingHorizontal: 20,
        width: '100%',
        height: 200,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        top: 10
    },


    tituloEspecial: {
        fontSize: 45,
        color: '#FF7152',
        fontFamily: 'Raleway_900Black',
        textTransform: 'uppercase'
    },

    tituloEspecial2: {
        fontSize: 35,
        color: '#505050',
        fontFamily: 'Raleway_800ExtraBold',
        letterSpacing: 3.5,
    }

});