import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



/*export default function CartaoCategoria() {
    return (
        <View style={styles.main}>
            <View style={styles.caixaPrincipal}>
                <Text style={styles.titulo}></Text>

            </View>
        </View>
    )
}*/

const Titulo = props => {
    return (
        <Text style={styles.titulo}>{props.name}</Text>
    );
};

const CarrosselCategorias = () => {
    return (
        <View style={styles.CarrosselContainer}>
            <View style={styles.caixaPrincipal}>
                <Titulo name="Salgados" />
            </View>
            <View style={styles.caixaPrincipal}>
                <Titulo name="Chines" />
            </View>
            <View style={styles.caixaPrincipal}>
                <Titulo name="Churrasco" />
            </View>
            <View style={styles.caixaPrincipal}>
                <Titulo name="Salgados" />
            </View>
        </View>
    );
};

export default CarrosselCategorias;

const styles = StyleSheet.create({
    caixaPrincipal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: '30px',
        minWidth: '70px',
        maxWidth: '70px',
        textAlign: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        marginHorizontal: '5px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
    },

    titulo: {
        color: '#fff',
        fontWeight: '500'
    },

    CarrosselContainer: {
        marginVertical: '20px',
        display: 'flex',
        flexDirection: 'row'
    }

});