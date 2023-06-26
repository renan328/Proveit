
import { width } from '@fortawesome/free-solid-svg-icons/faUser';
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
        height: 100,
        width: 100,
    },

    logoDevlare: {
        height: 62,
        width: 200,
    },

    textBy:{
        color: '#505050',
        fontFamily: 'Raleway_500Medium',
        marginTop: 30,
        marginBottom: 10
    },

    textBeta: {
        color: '#303030',
        fontFamily: 'Raleway_700Bold',
        marginTop: 10,
        textTransform: 'uppercase'
    },

    saboresImg: {
        height: 200,
        width: 300,
    },

    containerInput: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20
    },

    input: {
        minWidth: '85%',
        marginVertical: 5,
        marginHorizontal: 5,
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

    buttons: {
        alignSelf: 'baseline',
        display: 'flex',
        height: '70%',
        width: '100%',
        alignItems: 'center'
    },

    button: {
        width: 200,
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
        textAlign: 'center',
        elevation: 4,
    },

    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        borderRadius: 50
    },

    ou: {
        fontFamily: 'Raleway_900Black',
        color: '#505050',
        marginVertical: 6
    },

    googleButton: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 35,
        paddingRight: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },

    googleButtonText: {
        fontFamily: 'Raleway_700Bold',
        marginHorizontal: 10
    },

    headerSignText: {
        marginTop: 20,
        color: 'rgba(0,0,0,0.4)',
        fontFamily: 'Raleway_700Bold'
    },

    signUpButton: {
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        elevation: 4,
    },

    textError: {
        alignSelf: 'center',
        color: '#ff375b',
        marginBottom: 8
    },
    inputError: {
        borderWidth: 1,
        borderColor: '#ff375b'
    }

});

export default styles;