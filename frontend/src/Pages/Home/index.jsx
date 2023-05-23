import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, StatusBar, ScrollView, TouchableOpacity, Appearance, useColorScheme } from 'react-native';
import CarrosselReceitas from '../../components/CartaoReceita/CarrosselReceitas';
import CarrosselCategorias from '../../components/CartaoCategoria/CarrosselCategoria';
import CartaoExplorar from '../../components/CarrosselExplorar/CartaoExplorar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleExclamation, faCompass, faIdBadge, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import StylesDark from './home.moduleDark';
import StylesLight from './home.moduleLight';

export default function Home({ navigation }) {
    const username = "Finalmente";
    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? StylesDark : StylesLight;
    return (
        <ScrollView style={styles.main}>
            <View style={styles.header}>
                <View style={styles.subHeader}>
                    <Image
                        style={{ width: 52, height: 46, top: 15 }}
                        source={require('../../assets/proveitOrange.png')}
                    />
                    <Image
                        style={{ minWidth: 200, maxWidth: 300, height: 200 }}
                        source={require('../../assets/homeBalls.png')}
                        resizeMode='stretch'
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.welcome}>Bem-vindo(a),</Text>
                    <Text style={styles.username}>{username}</Text>
                </View>
                <View style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
                    <Text style={styles.subTexto}>O que <Text style={{ fontFamily: 'Raleway_900Black' }}>você</Text> deseja hoje?</Text>
                    <View>
                        <CarrosselCategorias />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.ingredienteInput} placeholder='Pesquisa por ingredientes'></TextInput><FontAwesomeIcon icon={faMagnifyingGlass} style={{
                        color: '#505050'
                    }} size={20} />
                </View>
            </View>
            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faCircleExclamation} style={styles.listamentoIcon} size={25}></FontAwesomeIcon><Text style={styles.categoria}>O que há de <Text style={{ color: '#FF7152' }}>novo?</Text></Text>
            </View>
            <View>
                <CarrosselReceitas />
            </View>
            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faCompass} style={styles.listamentoIcon} size={35}></FontAwesomeIcon><Text style={styles.categoriaBig}>Explore<Text style={{ color: '#FF7152' }}>!</Text></Text>
            </View>
            <ScrollView horizontal={true}>
                <CartaoExplorar title={'Melhor avaliadas'} image={require('../../assets/explore1.png')} />
                <CartaoExplorar title={'Mais favoritadas'} image={require('../../assets/explore2.png')} />
                <CartaoExplorar title={'Mais comentadas'} image={require('../../assets/explore3.png')} />
                <CartaoExplorar title={'Categoria nova'} image={require('../../assets/explore3.png')} />
            </ScrollView>
            <View style={styles.listamento}>
                <Text style={styles.categoriaBig}>Popular <Text style={{ color: '#FF7152' }}>hoje</Text></Text>
            </View>
            <View>
            </View>
            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon><Text style={styles.categoria}>Novidades em <Text style={{ color: '#FF7152' }}>doces</Text></Text>
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
            <View
                style={{
                    borderBottomColor: '#505050',
                    opacity: 0.4,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: 330, height: 5,
                    marginTop: 15,
                    alignSelf: 'center',
                    marginBottom: 20

                }} />
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Text style={{ color: '#505050', fontFamily: 'Raleway_500Medium' }}>Por enquanto é só!</Text>
                <Image
                    style={{ width: 52, height: 46, top: 15, marginBottom: 100 }}
                    source={require('../../assets/proveitGrey.png')}
                />
            </View>
        </ScrollView>
    )
}
