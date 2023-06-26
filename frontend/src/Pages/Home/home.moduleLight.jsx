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
        minHeight: 400,
        left: 0,
        top: 0,
        borderBottomLeftRadius: 65,
        borderBottomRightRadius: 65,
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6,
        elevation: 4,
        paddingLeft: 20,
        paddingBottom: 20,
        flexGrow: 1,
        paddingBottom: 20,
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
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 15
    },
    
    ingredienteInput: {
        flexWrap:'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 7,
        height: 40,
        width: '95%',
        left: -10,
        backgroundColor: '#FF7152',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        position: 'relative',
        alignSelf: 'center',
        marginTop: 5,
        justifyContent: 'center'
    },


    //listas
    listamento: {
        textAlign: 'center',
        marginTop: 35,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    listamentoIcon: {
        top: 2,
        color: '#999',
        marginRight: 10
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

    },

    receitaEsepecialContainer: {
        paddingHorizontal: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'hidden',
        top: 10,
    },

    icon: {
        alignSelf: 'center',
        color: '#505050'
    },

    tituloEspecial: {
        fontSize: 40,
        color: '#505050',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
    },

    tituloEspecial2: {
        top: -20,
        fontSize: 55,
        color: '#FF7152',
        fontFamily: 'Raleway_900Black',
        textAlign: 'center',
        textTransform: 'uppercase'
    },

    tituloStars: {
        top: -20,
        color: '#FF7152',
        textAlign: 'center',
    },

});

export default styles;