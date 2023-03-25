
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //principal
    main: {
        backgroundColor: '#fff',
        alignSelf: 'stretch'
    },

    containerCentralizado: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    //header
    logoMini: {
        height: '70px',
        backgroundColor: 'red'
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 500,
        left: 0,
        top: 0,
        borderBottomLeftRadius: 65,
        borderBottomRightRadius: 65,

        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    subHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItens: 'center',
        justifyContent: 'center'
    },

    shadowProp: {
        paddingTop: '20px',
        paddingBottom: '30px',
        shadowOffset: { largura: 100, altura: 100 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    Text: {
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 700,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3
    },

    TextoSecundario: {
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.8)',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3
    },

    subTexto: {
        fontFamily: 'Raleway_600SemiBold',
        color: '#fff',
        fontWeight: '400'
    },

    ingredienteInput: {
        marginHorizontal: '5px',
        paddingHorizontal: '7px',
        fontSize: '11px',
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        height: '35px',
        width: '296px',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        position: 'relative',
        top: -50
    },

    //listas
    listamento: {
        textAlign: 'center',
        margin: '40px',
    },

    categoria: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: '20px',
        color: '#505050',
    },

    categoriaBig: {
        marginTop: '30px',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: '30px',
        color: '#505050',
    }

});

export default styles;