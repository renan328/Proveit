import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import CartaoCategoria from './CartaoCategoria';

export default function CarrosselCategorias() {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        fetch("https://cloudproveit.azurewebsites.net/api/categoria/todas", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setCategorias(json);
            })
            .catch((error) => {
                alert("Erro ao buscar categoirias");
            });
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={{ marginLeft: 10, }}>
                {
                    categorias.map((categoria, index) => (
                        <CartaoCategoria categoria={categoria} key={index} />
                    ))
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        paddingVertical: 2
    }
});