import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CarrosselCategorias from '../../components/CartaoCategoria/CartaoCategoria';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import CarrosselReceitas from '../../components/CartaoReceita/CarrosselReceitas';
import ReceitaEspecial from '../../components/ReceitaEspecial/ReceitaEspecial';
import Toast from 'react-native-toast-message';
import styles from './home.module';



export default function Home({ navigation }) {
    const username = "Convidado";

    return (

        <ScrollView style={styles.main}>
            {/*Header principal*/}
            <View style={styles.header}>
                <LinearGradient colors={['#FF7152', '#FFB649']} style={[styles.header]}>
                    {/*Header secundária (logo e eventual botão)*/}
                    <View style={styles.subHeader}>
                        <Image
                            style={{ width: 78, height: 70 }}
                            source={require('../../assets/proveitLogo.png')}
                        />
                    </View>

                    {/*Apresentação*/}
                    <View>
                        <Text style={styles.TextoSecundario}>Bem-vindo(a),</Text>
                        <Text style={styles.Text}>{username}</Text>
                    </View>

                    <View style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
                        <Text style={styles.subTexto}>O que você deseja hoje?</Text>

                        {/*Scroll categorias*/}
                        <CarrosselCategorias></CarrosselCategorias>
                    </View>

                    {/*Input ingredientes*/}
                    <View style={styles.containerCentralizado}>
                        <TextInput style={styles.ingredienteInput} placeholder='Pesquisa por ingredientes'></TextInput> <FontAwesomeIcon icon={faMagnifyingGlass} style={{
                            color: '#fff', position: 'relative',
                            top: -50
                        }} />
                    </View>

                </LinearGradient>
            </View>

            <View style={styles.listamento}>
                <Text style={styles.categoria}>O que há de <Text style={{ color: '#FF7152' }}>novo?</Text></Text>
            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ReceitaSingle')}>
                    <CarrosselReceitas></CarrosselReceitas>
                </TouchableOpacity>
            </View>

            <ReceitaEspecial></ReceitaEspecial>

            <View style={styles.listamento}>
                <Text style={styles.categoriaBig}>Popular <Text style={{ color: '#FF7152' }}>hoje</Text></Text>
            </View>

            <View>
            </View>

            <View style={styles.listamento}>
                <Text style={styles.categoria}>Novidades em <Text style={{ color: '#FF7152' }}>doces</Text></Text>
            </View>

            <View>
            </View>


            <View style={styles.listamento}>
                <Text style={styles.categoriaBig}>Baixas <Text style={{ color: '#FF7152' }}>calorias</Text></Text>
            </View>

            <View>
            </View>


            <View style={styles.listamento}>
                <Text style={styles.categoria}>Sem <Text style={{ color: '#FF7152' }}>tempo</Text> perdido</Text>
            </View>

            <View>
            </View>


        </ScrollView>

    )
}

