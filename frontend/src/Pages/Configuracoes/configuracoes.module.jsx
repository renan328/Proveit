import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#ffffff'
    },
    header: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        justifyContent: 'flex-end'
    },
    botao: {
        alignSelf: 'flex-start',
        marginHorizontal: '3%',
        marginVertical: 20,
    },
    title: {
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        fontSize: 35,
        textAlign: 'center'
    },
    textOpcoes: {
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 18,
        color: '#505050',
    },
    textOpcoesSair: {
        fontFamily: 'Raleway_700Bold',
        fontSize: 15,
        color: '#FF7152'
    },
    botaoOpcoes: {
        alignSelf: 'flex-end',
    },
    opcoes: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 15
    },
    containerOpcoes: {
        width: '88%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#eeeeee',
        marginTop: 20,
    },
    linha: {
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: '#cecece',
        opacity: 0.4,
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '60%', 
        height: 3, 
        border: 'none',
        marginTop: 15
    },
    linhaOpcoes: {
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: '#cecece',
        opacity: 0.4,
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '90%',
        height: 3, 
        border: 'none',
    },

    bottomText: {
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: 'Raleway_500Medium',
        color: '#505050',
        width: '100%',
        marginTop: 20,
        textAlign: 'center'
    }

});

export default styles;