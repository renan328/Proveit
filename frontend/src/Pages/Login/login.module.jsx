
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%',
        alignItems: 'center',
        margin: 0
    },

    main: {
        backgroundColor: '#000',
        width: '92%',
        height: '90%',
        marginTop: 135,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        bottom: 0,
    },

    tint: {
        backgroundColor: 'rgba(255,255,255,0.90)',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 40,
    },

    logo: {
        height: 80,
        width: 80,
    },

    saboresImg: {
        height: 150,
        width: 250,
    },

    containerInput: {
        display: 'flex',
        flexDirection: 'column',
    },

    input: {
        minWidth: '85%',
        margin: 5,
        paddingHorizontal: 7,
        fontSize: 15,
        fontFamily: 'Raleway_500Medium',
        color: '#505050',
        height: 45,
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
        elevation: 4,
    },

    inputSingle: {
        color: '#fff'
    },

    button: {
        width: 180,
        backgroundColor: 'orange',
        color: '#FFF',
        borderRadius: 12,
        padding: 10,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        textAlign: 'center',
        top: 5
    },

    buttonText: {
        fontSize: 17,
        color: '#FFF',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        borderRadius: 50
    },

    buttons: {
        display: 'flex',
        alignSelf: 'baseline',
        height: '70%',
        width: '100%',
        alignItems: 'center',
    },

    headerSignText: {
        marginTop: 20,
        color: 'rgba(0,0,0,0.4)',
        fontFamily: 'Raleway_700Bold'
    },

    signUpButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        elevation: 4,
    },

    logoDevlare: {
        height: 31,
        width: 100,
    },

    textBy: {
        color: '#505050',
        fontFamily: 'Raleway_500Medium',
        alignSelf: 'center',
        marginVertical: 5
    },

    textBeta: {
        color: '#303030',
        fontFamily: 'Raleway_700Bold',
        marginTop: 10,
        textTransform: 'uppercase'
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        top: 20,
    },
    footerContent: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'
    },

    textPronuncia: {
        width: 100,
        fontSize: 10,
        fontFamily: 'Raleway_700Bold',
        marginTop: 10,
        textTransform: 'uppercase',
        color: 'rgba(48, 48, 48, 0.705)',
        textAlign: 'right',
    },

    textError: {
        alignSelf: 'center',
        color: '#ff375b',
        marginBottom: 8
    },
    inputError: {
        borderWidth: 1,
        borderColor: '#ff375b'
    },

});

export default styles;