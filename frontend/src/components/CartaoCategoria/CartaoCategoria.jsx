import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
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

function CarrosselCategorias() {
    return (
        <View style={styles.CarrosselContainer}>
            <View style={styles.CarrosselContainer}>
                <View style={styles.caixaPrincipal}>
                    <Image style={styles.imgCategoria} source={require('../../assets/cat_aves.jpg')} />
                    <Titulo name="Aves" />
                </View>
                <View style={styles.caixaPrincipal}>
                    <Image style={styles.imgCategoria} source={require('../../assets/cat_bebidas.jpg')} />
                    <Titulo name="Bebidas" />
                </View>
                <View style={styles.caixaPrincipal}>
                    <Image style={styles.imgCategoria} source={require('../../assets/cat_bolos.jpg')} />
                    <Titulo name="Bolos" />
                </View>
                <View style={styles.caixaPrincipal}>
                    <Image style={styles.imgCategoria} source={require('../../assets/cat_carnes.jpg')} />
                    <Titulo name="Carnes" />
                </View>
                <View style={styles.caixaPrincipal}>
                    <Image style={styles.imgCategoria} source={require('../../assets/cat_doces.jpg')} />
                    <Titulo name="Doces" />
                </View>
                <View style={styles.caixaPrincipal}>
                    <Image style={styles.imgCategoria} source={require('../../assets/cat_frutosDoMar.jpg')} />
                    <Titulo name="Frutos do Mar" />
                </View>
                <View style={styles.caixaPrincipal}>
                    <Image style={styles.imgCategoria} source={require('../../assets/cat_japones.jpg')} />
                    <Titulo name="Japones" />
                </View>
                <View style={styles.caixaPrincipal}>
                    <Image style={styles.imgCategoria} source={require('../../assets/cat_lanches.jpg')} />
                    <Titulo name="Lanches" />
                </View>
                <View style={styles.caixaPrincipal}>
                    <Image style={styles.imgCategoria} source={require('../../assets/cat_lowCarb.jpg')} />
                    <Titulo name="Low Carb" />
                </View>
                <View style={styles.caixaPrincipal}>
                    <Image style={styles.imgCategoria} source={require('../../assets/cat_carnes.jpg')} />
                    <Titulo name="Carnes" />
                </View>
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
    }

});