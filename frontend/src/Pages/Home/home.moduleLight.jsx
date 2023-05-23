import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //principal
    main: {
        backgroundColor: '#fff',
        alignSelf: 'stretch'
    },

    //header
    logoMini: {
        height: 70,
        backgroundColor: 'red'
    },

    header: {
        display: 'flex',
        width: '100%',
        height: 400,
        left: 0,
        top: 0,
        borderBottomLeftRadius: 65,
        borderBottomRightRadius: 65,

        overflow: 'hidden',
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6,
        elevation: 4,
        paddingLeft: 20,
        paddingBottom: 20
    },

    subHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItens: 'center',
        justifyContent: 'space-between',
        height: 60,
        overflow: 'visible',
    },

    textContainer: {
        marginTop: 20,
        marginBottom: 5
    },

    welcome: {
        fontFamily: 'Raleway_700Bold',
        textAlign: 'left',
        fontSize: 22,
        color: '#FF7152',
    },

    username: {
        fontFamily: 'Raleway_800ExtraBold',
        textAlign: 'left',
        fontSize: 37,
        color: '#505050',
    },

    subTexto: {
        fontFamily: 'Raleway_600SemiBold',
        color: 'rgba(0,0,0, 0.5)',
        textAlign: 'left',
        marginVertical: 8
    },

    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    ingredienteInput: {
        marginHorizontal: 5,
        paddingHorizontal: 7,
        fontSize: 11,
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        height: 40,
        width: '84%',
        left: -10,
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
        alignSelf: 'center',
    },

    //listas
    listamento: {
        textAlign: 'center',
        marginVertical: 35,
        marginHorizontal: 5
    },

    categoria: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 20,
        color: '#505050',
        marginVertical: 12,
    },

    categoriaBig: {
        marginTop: 10,
        fontFamily: 'Raleway_900Black',
        fontSize: 35,
        color: '#505050',
        marginVertical: 12,

    }

});

export default styles;