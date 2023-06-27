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
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
        color: '#505050',
        fontFamily: 'Raleway_700Bold',
        fontSize: 40,
    },

    Senha: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textDecorationLine: 'underline',
        marginTop: -7,
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 35,
    },

    Desc: {
        textAlign: 'justify',
        color: '#505050',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
        opacity: 0.8,
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
        fontSize: 13,
        color: '#303030',
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
        fontFamily: 'Raleway_800ExtraBold',
    },


    balls: {
        marginTop: -44,
        width: 250,
        height: 200,
        transform: [{ rotate: '180deg' }]
    },



});

export default styles;