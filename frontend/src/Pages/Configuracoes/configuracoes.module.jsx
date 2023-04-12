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
        fontSize: '45px',
    },
    textOpcoes: {
        fontFamily: 'Raleway_500Medium',
        fontSize: '18px'
    },
    textOpcoesSair: {
        fontFamily: 'Raleway_500Medium',
        fontSize: '18px',
        color: '#FF7152'
    },
    botaoOpcoes: {
        alignSelf: 'flex-end'
    },
    opcoes: {
        marginTop: '15px'
    },
    containerOpcoes: {
        marginTop: '30px',
        marginVertical: '2%',
        marginHorizontal: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    linha: {
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: '#cecece',
        opacity: '0.4',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '60%', 
        height: '3px', 
        border: 'none',
        marginTop: '15px'
    },
    linhaOpcoes: {
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: '#cecece',
        opacity: '0.4',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '90%',
        height: '3px', 
        border: 'none',
    }

});

export default styles;