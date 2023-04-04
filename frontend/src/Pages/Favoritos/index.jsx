import React from "react";

import { View, Text, StyleSheet, button } from "react-native";

import styles from "./favoritos.module";

import CartaoFavorito from "../../components/CartaoFavorito/CartaoFavorito";

import { Raleway_800ExtraBold } from "@expo-google-fonts/raleway";




export default function Favoritos() {




    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <View style={styles.textContainer}>

                    <Text style={styles.firstText}>Meus</Text>

                    <Text style={styles.subText}>Favoritos</Text>

                    <View

                        style={{

                            borderBottomColor: '#505050',

                            opacity: 0.4,

                            borderBottomWidth: StyleSheet.hairlineWidth,

                            width: '330px', height: '5px',

                            marginTop: '15px'

                        }}

                    />

                </View>

            </View>

            <View style={styles.ScreenSelect}>

                <Text>Histórico</Text>

                <Text>Favoritos</Text>



            </View>



            <View style={styles.SubHeader}>

                <Text style={{ fontSize: '18px', fontFamily: 'Raleway_800ExtraBold', color: '#505050' }}>Favoritos</Text>

            </View>




            <View style={styles.CardsList}>

                <CartaoFavorito titulo={'Comida'} text={'comidinhas hmmmm'} Image={'/workspaces/ProveIt/frontend/src/assets/cat_salgados.jpg'} />

                <CartaoFavorito titulo={'Comida'} text={'comidinhas hmmmm'} Image={'/workspaces/ProveIt/frontend/src/assets/cat_salgados.jpg'} />

            </View>

        </View>

    );

}