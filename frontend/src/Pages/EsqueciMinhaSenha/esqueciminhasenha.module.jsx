import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    imageContainer: {
        display: 'flex',
        height: '16%',

    },

    backbutton: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
        marginTop: 9,
        marginLeft: 9,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: 40,
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.6)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
    },

    arrowleft: {
        marginTop: 4,
        padding: 6,
    },

    main: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '85%',
        display: 'flex',
        marginTop: 100,
        flexDirection: 'column',
        /* justifyContent: 'center',
        alignItems:'center', */
        textAlign: 'justify-content',
        borderTopRightRadius: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        marginTop:-1
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
        height: '50%',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
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
        width: '82%',
        height: '50%',
    },

    Qualeoseu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: '#505050',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 40,
    },

    Email: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textDecorationLine: 'underline',
        marginTop: -9,
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 35,
    },

    Desc: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: '#505050',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
        opacity: 0.8,
    },



    inputSingle: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
    },

    defaultInput: {
        paddingHorizontal: 7,
        fontSize: 13,
        color: '#505050',
        height: 50,
        width: '100%',
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
        elevation: 3,
        fontFamily: 'Raleway_600SemiBold',
    },

    botoes: {
        width: '100%',
    },

    button: {
        display: 'flex',
        marginTop: 2,
        width: "78%",
        backgroundColor: 'orange',
        color: '#FFF',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 8,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Raleway_700Bold',
    },

    balls: {
        marginTop: -44,
        width: 235,
        height: 200,
        transform: [{ rotate: '180deg' }]
    },



});

export default styles;