
import { width } from '@fortawesome/free-solid-svg-icons/faUser';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        margin: 0
    },
    main: {
        backgroundColor: '#000',
        width: '92%',
        height: '90%',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 6,
        bottom: 0,
    },

    tint: {
        backgroundColor: 'rgba(12,12,12,0.90)',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 40,

    },

    logo: {
        height: 90,
        width: 90,
    },

    textBy: {
        color: '#bbb',
        fontFamily: 'Raleway_500Medium',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center'
    },

    logoDevlare: {
        height: 31,
        width: 100,
    },

    textBeta: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontFamily: 'Raleway_700Bold',
        marginTop: 10,
        textTransform: 'uppercase'
    },

    saboresImg: {
        height: 160,
        width: 260,
    },

    containerInput: {
        display: 'flex',
        flexDirection: 'column',
    },

    input: {
        minWidth: '85%',
        marginVertical: 5,
        marginHorizontal: 5,
        paddingHorizontal: 7,
        fontSize: 15,
        fontFamily: 'Raleway_500Medium',
        color: '#fff',
        height: 45,
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
        elevation: 4,
    },

    buttons: {
        display: 'flex',
        alignSelf: 'baseline',
        height: '70%',
        width: '100%',
        alignItems: 'center',
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
        elevation: 4,
        textAlign: 'center',
        top: 5
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
        color: 'rgba(255,255,255,0.4)',
        fontFamily: 'Raleway_700Bold'
    },

    signUpButton: {
        marginTop: 5,
        backgroundColor: 'rgba(20,20,20,0.8)',
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
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '10%',
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
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'right',
    }

});

export default styles;