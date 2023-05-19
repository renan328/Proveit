import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //principal
    main: {
        backgroundColor: '#202020',
        alignSelf: 'stretch'
    },

    header: {
        display: 'flex',
        width: '100%',
        height: 400,
        left: 0,
        top: 0,
        borderBottomLeftRadius: 65,
        borderBottomRightRadius:65,

        overflow: 'hidden',
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.55,
        shadowRadius: 6,
        elevation: 5,
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
        fontWeight: 700,
        color: '#FF7152',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3
    },

    username: {
        fontFamily: 'Raleway_800ExtraBold',
        textAlign: 'left',
        fontSize: 37,
        fontWeight: 700,
        color: '#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3
    },

    subTexto: {
        fontFamily: 'Raleway_600SemiBold',
        color: 'rgba(255,255,255, 0.5)',
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
        backgroundColor: '#404040',
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
        marginTop: 35,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'center'
    },

    listamentoIcon: {
        color: '#505050',
        marginRight: 10
    },

    categoria: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 20,
        color: '#dcdcdc',
        marginBottom: 10
    },

    categoriaBig: {
        marginTop: 10,
        fontFamily: 'Raleway_900Black',
        fontSize: 35,
        color: '#dcdcdc',
        marginBottom: 10

    }

});

export default styles;