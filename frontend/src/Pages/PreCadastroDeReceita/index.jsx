import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, useColorScheme } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function PreCadReceita() {
    const navigation = useNavigation();
    const scheme = useColorScheme();
    const styles = scheme === 'dark' ? StylesDark : StylesLight;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={{ width: 52, height: 46 }}
                    source={require('../../assets/proveitOrange.png')}
                />
                {/* <Image source={scheme == 'dark' ? require('../../assets/algumaReceitaDark.png') : require('../../assets/algumaReceitaLight.png')} style={styles.title} resizeMode='contain' /> */}
                <Text style={styles.textReceitas}>Alguma receita</Text>
                <Text style={styles.textAdd}>incrível<Text style={{fontFamily: 'Raleway_600SemiBold'}}> para compartilhar?</Text></Text>
            </View>
            <View stylr={styles.ConfirmContent}>
                <Text style={styles.AlertText}>Ao adicionar suas receitas, você não apenas compartilha seus pratos saborosos no ProveIt, mas também contribui com a comunidade, compartilhando suas criações culinárias.</Text>
                <Text style={styles.AlertText}>Explore os campos disponíveis para compor sua receita.</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CadastroDeReceitaScreen')}>
                    <FontAwesomeIcon icon={faPlus} color='#FF7152' size={30} /><Text style={styles.btnText}>Adicionar receita</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.AlertContent}>

                <Text style={styles.AlertTextLast}>Agradecemos por sua participação!</Text>
            </View>
            <LottieView
                source={require('../../assets/lottie/addReceita.json')} // Caminho para o arquivo JSON do Lottie
                autoPlay
                loop
                style={{ height: 250, alignSelf: 'center' }}
            />
        </View>
    );
}

const StylesLight = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    header: {
        height: 103,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 15,
        marginBottom: 50
    },

    title: {
        width: '100%',

    },
    textAdd: {
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 37,
        textAlign: 'center',
        textAlign: 'center'
    },

    textReceitas: {
        color: '#505050',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 30,
        textAlign: 'center',
        top: 13
    },

    algumaReceita: {
        color: '#707070',
        fontFamily: 'Raleway_600SemiBold'
    },

    AlertContent: {
        width: '80%',
        color: '#000',
        alignSelf: 'center',
        marginVertical: 20
    },

    AlertText: {
        width: 320,
        marginTop: 20,
        color: '#808080',
        textAlign: 'center',
        fontFamily: 'Raleway_600SemiBold',
    },

    AlertTextLast: {
        marginTop: 20,
        color: '#303030',
        textAlign: 'center',
        fontFamily: 'Raleway_700Bold',
    },

    ConfirmContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
        marginVertical: 20
    },

    addButton: {
        backgroundColor: 'rgba(255,113,82,0.4)',
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 15,
        height: 60,
        width: '50%',
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 5
    },

    btnText: {
        color: '#ff7152',
        fontFamily: 'Raleway_700Bold',
        fontSize: 18,
        top: -2
    },
})

const StylesDark = StyleSheet.create({

    container: {
        backgroundColor: '#202020',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    header: {
        height: 103,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 15,
        marginBottom: 50
    },

    title: {
        width: '100%',

    },
    textAdd: {
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 37,
        textAlign: 'center',
        textAlign: 'center',
    },

    textReceitas: {
        color: '#fff',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 30,
        textAlign: 'center',
        top: 13
    },

    algumaReceita: {
        color: '#707070',
        fontFamily: 'Raleway_600SemiBold'
    },

    AlertContent: {
        width: '70%',
        color: '#000',
        alignSelf: 'center',
        marginVertical: 20
    },

    AlertText: {
        marginTop: 20,
        color: '#404040',
        textAlign: 'center',
        fontFamily: 'Raleway_600SemiBold',
    },

    AlertTextLast: {
        marginTop: 20,
        color: '#909090',
        textAlign: 'center',
        fontFamily: 'Raleway_700Bold',
    },

    ConfirmContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
        marginVertical: 20
    },

    addButton: {
        backgroundColor: 'rgba(255,113,82,0.4)',
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 15,
        height: 60,
        width: '50%',
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 5
    },

    btnText: {
        color: '#ff7152',
        fontFamily: 'Raleway_700Bold',
        fontSize: 18,
        top: -2
    },
})