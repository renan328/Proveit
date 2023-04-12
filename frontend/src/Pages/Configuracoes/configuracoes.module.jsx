import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex'
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
        marginVertical: '3%',
    },
    title: {
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        fontSize: '36px',
    },
    textOpcoes: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: '15px'
    },
    botaoOpcoes: {
        alignSelf: 'flex-end'
    },
    containerOpcoes: {
        marginTop: '30px',
        marginVertical: '3%',
        marginHorizontal: '5%'
    },
    linha: {
        display: 'flex',
        alignSelf: 'center',
        borderBottomColor: '#cecece',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '330px', height: '30px'
    }

});

export default styles;