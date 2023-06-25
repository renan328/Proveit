import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

export default function PreCadReceita() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.textAdd}>Adicionar</Text>
                <Text style={styles.textReceitas}>Receita</Text>
            </View>
            <View style={styles.AlertContent}>
                <Text style={styles.AlertText}>Ao adicionar receitas, você compartilha suas delícias no nosso app e contribui com a comunidade</Text>
                <Text style={styles.AlertText}>Explore os campos disponíveis para compor sua receita.</Text>
                <Text style={styles.AlertText}>Agradecemos sua participação!</Text>
            </View>

            <View stylr={styles.ConfirmContent}>
                <Text style={{ fontFamily: 'Raleway_700Bold' }}>
                    Alguma receita increvel para compartilhar?
                </Text>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CadastroDeReceitaScreen')}>
                    <FontAwesomeIcon icon={faPlus} color='#FF7152' /><Text style={{ fontFamily: 'Raleway_700Bold', color: '#FF7152' }}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({


    header: {
        height: 103,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textAdd: {
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 35,
        textAlign: 'center',
        top: 15,
        textAlign: 'center'
    },

    textReceitas: {
        color: '#fff',
        fontFamily: 'Raleway_700Bold',
        fontSize: 35,
        textAlign: 'center'
    },

    AlertContent: {
        width: '80%',
        color: '#000',
        alignSelf: 'center',
        textAlign: 'justify',
        marginVertical: 20
    },

    AlertText: {
        marginTop: 20,
        fontFamily: 'Raleway_600SemiBold',
    },

    ConfirmContent: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: 20
    },

    addButton: {
        backgroundColor: 'rgba(255,113,82,0.4)',
        textAlign: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
})