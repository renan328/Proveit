import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CarrosselHome from '../../components/CartaoReceita/CarrosselReceitas';
import CarrosselCategorias from '../../components/CartaoCategoria/CarrosselCategoria';
import ReceitaEspecial from '../../components/ReceitaEspecial/ReceitaEspecial';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAward, faStar, faArrowTrendDown, faCircleExclamation, faClock, faCompass, faMagnifyingGlass, faPeopleRoof, faSeedling, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import StylesDark from './home.moduleDark';
import StylesLight from './home.moduleLight';
import LottieView from 'lottie-react-native';
import { DadosUsuario } from '../../AuthContext';
import CarrosselExplorar from '../../components/CarrosselExplorar/CarrosselExplorar';
import CarrosselMelhoresAvaliadas from '../../components/MelhoresAvaliadas/CarrosselMelhoresAvaliadas';

export default function Home({ navigation, props }) {

    const stars = 5;
    function StarCounter() {
        const starsBox = [];
        for (let index = 0; index < stars; index++) {
            starsBox.push(
                <View key={index}>
                    <FontAwesomeIcon style={{ marginHorizontal: 10 }} icon={faStar} size={15} color={'#FF7152'} />
                </View>
            );
        }
        return (
            <View style={{ display: 'flex', flexDirection: 'row', marginStart: 5, marginTop: 5, }}>{starsBox}</View>
        )
    }

    const [username, setUsername] = useState('');

    async function BuscarUsuario() {
        const userDataJWT = await DadosUsuario();
        setUsername(userDataJWT.Nome);
    }

    useEffect(() => {
        BuscarUsuario();
    });

    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? StylesDark : StylesLight;

    return (
        <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Pesquisar')}>

                        <LinearGradient colors={['#FF7152', '#FFB649']} start={{ x: -1, y: 1 }}
                            end={{ x: 2, y: 1 }} style={styles.ingredienteInput} >
                            <FontAwesomeIcon icon={faBowlFood} style={{ color: '#FFF' }} size={20} />
                            <Text style={{ color: '#FFF', fontFamily: 'Raleway_700Bold', fontSize: 12, marginHorizontal: 10, textAlign: 'center' }} >Algum ingrediente específico? Pesquise por ingrediente!</Text>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#FFF' }} size={20} />
                        </LinearGradient>

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faStar} style={[styles.listamentoIcon, { color: '#FF7152' }]} size={25}></FontAwesomeIcon>
                <Text style={styles.categoria}>Mais<Text style={{ color: '#FF7152' }}> acessadas</Text></Text>
            </View>
            <View>
                <CarrosselMelhoresAvaliadas />
            </View>


            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faCompass} style={styles.listamentoIcon} size={35}></FontAwesomeIcon><Text style={styles.categoriaBig}>Explore<Text style={{ color: '#FF7152' }}>!</Text></Text>
            </View>

            <ScrollView horizontal={true}>

                <CarrosselExplorar />

            </ScrollView>
            <View style={styles.listamento}>
            </View>

            <View style={styles.receitaEspecialContainer}>
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
                <View style={styles.containerTexto}>
                    <FontAwesomeIcon size={30} icon={faAward} style={styles.icon} />
                    <Text style={styles.tituloEspecial}>Seleção </Text>
                    <Text style={styles.tituloEspecial2}>ProveIt</Text>
                    <Text style={styles.tituloStars}>{StarCounter()}</Text>
                </View>
                <TouchableOpacity>
                    <ReceitaEspecial />
                </TouchableOpacity>
                <LottieView
                    source={require('../../assets/lottie/cooking.json')} // Caminho para o arquivo JSON do Lottie
                    autoPlay
                    loop
                    style={{ height: 250, alignSelf: 'center' }}
                />
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
            </View>

            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faSeedling} style={[styles.listamentoIcon, { color: '#52FF6E' }]} size={25}></FontAwesomeIcon>
                <Text style={styles.categoria}>Receitas <Text style={{ color: '#FF7152' }}>reaproveitáveis</Text></Text>
            </View>
            <View>
                <CarrosselHome filtro={"onde/Aproveitamento"} />
            </View>

            <View>
            </View>
            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faArrowTrendDown} style={styles.listamentoIcon} size={35}></FontAwesomeIcon>
                <Text style={styles.categoriaBig}>Baixas <Text style={{ color: '#FF7152' }}>calorias</Text></Text>
            </View>
            <View>
                <CarrosselHome filtro={"ordernar/ValCalorico"} />
            </View>

            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faClock} style={styles.listamentoIcon} size={25}></FontAwesomeIcon>
                <Text style={styles.categoria}>Sem <Text style={{ color: '#FF7152' }}>tempo</Text> perdido</Text>
            </View>
            <View>
                <CarrosselHome filtro={"categoria/Rapidas"} />
            </View>

            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faPeopleRoof} style={styles.listamentoIcon} size={25}></FontAwesomeIcon>
                <Text style={styles.categoria}>Para a <Text style={{ color: '#FF7152' }}>família</Text> inteira</Text>
            </View>
            <View>
                <CarrosselHome filtro={"onde/Porcoes"} />
            </View>

            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faCircleExclamation} style={styles.listamentoIcon} size={25}></FontAwesomeIcon><Text style={styles.categoria}>O que há de <Text style={{ color: '#FF7152' }}>novo?</Text></Text>
            </View>
            <View>
                <CarrosselHome filtro={"ordernar/idReceita"} />
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
                <Text style={{ color: '#50505060', fontFamily: 'Raleway_500Medium' }}>Por enquanto é só!</Text>
                <Image
                    style={{ width: 52, height: 46, top: 15, marginBottom: 100 }}
                    source={require('../../assets/proveitGrey.png')}
                />
            </View>
        </ScrollView >
    )
}
