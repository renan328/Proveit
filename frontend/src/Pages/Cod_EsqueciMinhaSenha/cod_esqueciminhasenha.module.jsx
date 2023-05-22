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
        borderRadius: 10,
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
        height: '100%',
        flexDirection: 'column',
        textAlign: 'justify-content',
        borderTopRightRadius: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 3
    },

    main2: {
        display: 'flex',
        height: '65%',
        marginTop: 15,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
    },

    main3: {
        width: '100%',
        height: '60%',
        justifyContent: 'space-between',
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
        borderRadius: 70,
        backgroundColor: '#FF7152',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },

    IconDocu: {
        marginLeft: 10,
    },

    Texts: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '81%',
        height: '40%',
    },

    Texts1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    Digiteo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: '#505050',
        fontFamily: 'Raleway_700Bold',
        fontSize: 40,
    },

    codigo: {
        display: 'flex',
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 40,
        marginLeft:-33
    },

    Desc: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#505050',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
        opacity: 0.8,
    },


    Inputs_container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    Inputs: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    Input_Styles: {
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 28,
        textAlign: 'center',
        width: 52,
        height: 67,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        elevation: 3,
        fontFamily: 'Raleway_700Bold',
        color: '#505050',
    },

    code: {
        textAlign: 'center',
        color: '#FF785B',
        textDecorationLine: 'underline',
        fontFamily: 'Raleway_600SemiBold',
    },

    balls: {
        marginTop: -53,
        width: 235,
        height: 200,
        transform: [{ rotate: '180deg' }]
    },


});

export default styles;