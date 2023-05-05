
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        width: '100%' ,
        height: '100%',
        justifyContent: 'flex-end',

    },

    imageContainer: {
        display: 'flex',
        height: '20%',
    },

    main: {
        backgroundColor: '#fff',
        width: '100%',
        height: '80%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 135,
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        top: -70
    },


    logo: {
        flex: 1,
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        textAlign: 'center',
        alignItens: 'center',
        justifyContent: 'center'
    },

    containerLogin: {
        width: '85%',
        height: 300,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        borderTopRightRadius: 90,
        borderTopLeftRadius: 90,
        marginBottom: 20
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
        color: '#505050',
        fontSize: 32,
        fontFamily: 'Raleway_800ExtraBold'
    },

    containerInput: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    input: {
        width: 300,
        marginVertical: 5,
        marginHorizontal: 5,
        paddingHorizontal: 7,
        fontSize: 13,
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        height: 45,
        minWidth: 265,
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
        width: 170,
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
        textAlign: 'center'
    },

    buttonText: {
        color: '#FFF',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center'
    },

    texts: {
        color: '#505050',
        marginBottom: 15,
        flexDirection: 'column',
        gap: 5
    },
    textError:{
        alignSelf: 'center',
        color: '#ff375b',
        marginBottom: 8
    },
    inputError:{
        borderWidth: 1,
        borderColor: '#ff375b'
    }

});

export default styles;