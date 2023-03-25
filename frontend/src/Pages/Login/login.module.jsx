
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',

    },

    background: {
        height: '100%',
    },

    linearGradient: {
        backgroundColor: 'orange',
        width: '100%',
        height: '95%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '50px',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
    },


    logo: {
        flex: 1,
        width: '100%',
        height: '300px',
        marginTop: '80px',
        flexDirection: 'row',
        textAlign: 'center',
        alignItens: 'center',
        justifyContent: 'center'
    },

    containerLogin: {
        width: '85%',
        height: '350px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
    },

    loginHeader: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center'
    },

    userIcon: {
        color: '#FF7152'
    },

    loginText: {
        marginTop: '15px',
        color: '#505050',
        fontSize: 28,
        fontFamily: 'Raleway_800ExtraBold'
    },

    containerInput: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
    },

    input: {
        marginVertical: '5px',
        marginHorizontal: '5px',
        paddingHorizontal: '7px',
        fontSize: '13px',
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        height: '45px',
        minWidth: '265px',
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
    },

    button: {
        width: 120,
        position: 'absolute',
        backgroundColor: 'orange',
        color: '#FFF',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
        bottom: '15%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    buttonText: {
        color: '#FFF',
        fontFamily: 'Raleway_700Bold',
    },

    texts: {
        color: '#505050',
        marginBottom: '15px'
    }

});

export default styles;