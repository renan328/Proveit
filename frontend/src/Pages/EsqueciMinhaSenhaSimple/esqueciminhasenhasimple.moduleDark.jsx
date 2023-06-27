import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    imageContainer: {
        display: 'flex',
        height: '16%',

    },

    backbutton: {
        display: 'flex',
        height: 30,
        width: 30,
        backgroundColor: 'rgba(32, 32, 32, 0.5)',
        marginHorizontal: 10,
        marginVertical: 15,
        paddingHorizontal: 18,
        paddingVertical: 23,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    IconCopy: {
        marginLeft: -40
    },

    main: {
        display: 'flex',
        backgroundColor: '#202020',
        width: '100%',
        height: '85%',
        flexDirection: 'column',
        borderTopRightRadius: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        marginTop: -1
    },

    main2: {
        display: 'flex',
        height: '75%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
    },

    main3: {
        width: '100%',
        height: '45%',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        top: -20
    },

    circuloIcon: {
        display: 'flex',
        alignContent: 'space-around',
        alignItems: 'center',
        flexDirection: "column",
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150,
        height: 150,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        backgroundColor: '#FF7152',
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },

    Texts: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%',
        height: '55%',
    },

    Esqueceusua: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: '#fff',
        opacity: 0.5,
        fontFamily: 'Raleway_700Bold',
        fontSize: 40,
    },

    Senha: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textDecorationLine: 'underline',
        marginTop: -5,
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 35,
    },

    Desc: {
        textAlign: 'justify',
        color: '#fff',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
        opacity: 0.7,
    },



    inputSingle: {
        width: '80%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    defaultInput: {
        paddingHorizontal: 7,
        fontSize: 14,
        color: '#fff',
        height: 50,
        width: '100%',
        backgroundColor: '#303030',
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
        elevation: 3,
        fontFamily: 'Raleway_800ExtraBold',
    },


    balls: {
        marginTop: -44,
        width: 235,
        height: 200,
        transform: [{ rotate: '180deg' }]
    },



});

export default styles;