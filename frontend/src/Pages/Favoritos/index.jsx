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

                <CartaoFavorito titulo={'Coxinha impressionante sabor frango frango frango'} text={'comidinhas hmmmm fnjwifnnf fiownfiwf fniwmnfoiwf fijwidof dm nwodmwodm diownmdiowd iofnoiw'} Image={'/workspaces/ProveIt/frontend/src/assets/cat_salgados.jpg'} stars={3}/>

                <CartaoFavorito titulo={'Suco de fruta'} text={'Sucos diferenciados'} Image={'/workspaces/ProveIt/frontend/src/assets/cat_salgados.jpg'} stars={5}/>
                
                <CartaoFavorito titulo={'Comida'} text={'comidinhas hmmmm'} Image={'/workspaces/ProveIt/frontend/src/assets/cat_salgados.jpg'} stars={5}/>

            </View>

            <View style={{paddingVertical: '50px'}}/>

        </View>

    );

}