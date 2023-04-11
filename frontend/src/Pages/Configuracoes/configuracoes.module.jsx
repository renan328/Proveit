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
        color: '#FF7152'
    },
    botao: {
        alignSelf: 'flex-start',
        marginHorizontal: '3%',
        marginVertical: '3%',
    },
    text: {
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        fontSize: '36px'
    },
    textOpcoes: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: '15px'
    },
    botaoOpcoes: {
        alignSelf: 'flex-end'
    }

});

export default styles;