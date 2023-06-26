import React, { useState, useEffect } from 'react';
import showToast from '../../../hooks/toasts';
import { View, ScrollView } from 'react-native';
import { HeaderRequisicao } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import CartaoExplorar from './CartaoExplorar';

export default function CarrosselExplorar() {

    const categoriasExplorar = [{
        id: 1,
        title: 'Melhor avaliadas',
        image: require('../../assets/explore1.png'),
        nomeExplorar: 'MelhoresAvaliadas',
        lottie: require('../../assets/lottie/cooking.json')
    },
    {
        id: 2,
        title: 'Mais favoritadas',
        image: require('../../assets/explore2.png'),
        nomeExplorar: 'ListarMaisFavoritadas',
        lottie: require('../../assets/lottie/cooking.json')
    },
    {
        id: 3,
        title: 'Mais comentadas',
        image: require('../../assets/explore3.png'),
        nomeExplorar: 'ListarMaisComentadas',
        lottie: require('../../assets/lottie/cooking.json')
    }];


    return (
        <View>
            <ScrollView horizontal={true} style={{ marginBottom: 4 }}>
                {
                    categoriasExplorar.map((categoria, index) => (
                        <CartaoExplorar categoriaExplorar={categoria} key={index} />
                    ))
                }
            </ScrollView>
        </View>
    )

}