import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Appearance, useColorScheme } from 'react-native';
import Toast from 'react-native-toast-message';
import CarrosselReceitas from '../../components/CartaoReceita/CarrosselReceitas';
import CarrosselCategorias from '../../components/CartaoCategoria/CarrosselCategoria';
import CartaoExplorar from '../../components/CarrosselExplorar/CartaoExplorar';
import ReceitaEspecial from '../../components/ReceitaEspecial/ReceitaEspecial';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAward, faArrowTrendUp, faStar, faCandyCane, faCannabis, faCircleExclamation, faClock, faCompass, faHeart, faIdBadge, faMagnifyingGlass, faPeopleRoof, faSeedling, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import StylesDark from './home.moduleDark';
import StylesLight from './home.moduleLight';
import LottieView from 'lottie-react-native';
import { useRef, useEffect, useState } from 'react';

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

    const username = "Convidado";
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
                <FontAwesomeIcon icon={faArrowTrendUp} style={styles.listamentoIcon} size={35}></FontAwesomeIcon><Text style={styles.categoriaBig}>Popular <Text style={{ color: '#FF7152' }}>hoje</Text></Text>
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
                <FontAwesomeIcon icon={faSeedling} style={[styles.listamentoIcon, { color: '#66e660' }]} size={25}></FontAwesomeIcon><Text style={styles.categoria}>Receitas <Text style={{ color: '#FF7152' }}>reaproveitáveis</Text></Text>
            </View>
            <View>
            </View>
            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faCannabis} style={styles.listamentoIcon} size={35}></FontAwesomeIcon><Text style={styles.categoriaBig}>Baixas <Text style={{ color: '#FF7152' }}>calorias</Text></Text>
            </View>
            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faClock} style={styles.listamentoIcon} size={25}></FontAwesomeIcon><Text style={styles.categoria}>Sem <Text style={{ color: '#FF7152' }}>tempo</Text> perdido</Text>
            </View>
            <View style={styles.listamento}>
                <FontAwesomeIcon icon={faPeopleRoof} style={styles.listamentoIcon} size={25}></FontAwesomeIcon><Text style={styles.categoria}>Para a <Text style={{ color: '#FF7152' }}>família</Text> inteira</Text>
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

        // const [save, setSave] = useState(true);
        // const animation = useRef(null);
        // const firstRun = useRef(true);

        // useEffect(() => {
        //     if (firstRun.current) {
        //         if (save) {
        //             animation.current.play(20, 20);
        //         } else {
        //             animation.current.play(0, 0);
        //         }

        //         firstRun.current = false;
        //     } else if (save) {
        //         animation.current.play(0, 20);
        //     } else {
        //         animation.current.play(20, 0);
        //     }


        // }, [save])

        //     <TouchableOpacity onPress={()=> setSave(!save)} style={{ height: 100, width: 100 }}>
        //     <LottieView
        //         source={require('../../assets/lottie/heart.json')} // Caminho para o arquivo JSON do Lottie
        //         autoPlay={false}
        //         ref={animation}
        //         loop={false}
        //     />
        // </TouchableOpacity>

    )
}
