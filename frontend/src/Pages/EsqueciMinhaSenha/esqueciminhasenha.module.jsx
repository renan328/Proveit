import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    imageContainer: {
        display: 'flex',
        height: '10%',
    },

    main: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '63%',
        display: 'flex',
       /*  textAlign: 'center',
        alignItems: 'flex-center',
        justifyContent: 'flex-start', */
        justifyContent:'space-between',
        marginTop: '100',
        borderTopRightRadius: 120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        /* top: "-70" */
    },

    circuloIcon: {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150,
        height: 150,
        borderRadius: '50%',
        backgroundColor: '#fff',
        top: '20px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    

    Qualeoseu:{
        color: '#505050',
        fontFamily: 'Raleway_700Bold',
        fontSize: 40,
    },

    Email:{
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 35,
        textDecorationLine: 'underline',
        marginBottom: '15px'
    },
    
    Desc:{
        color: '#505050',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
        opacity: '80%',
        marginBottom: '15px'
    },

    inputSingle: {
        width: '80%',
        display: 'flex',
        alignSelf: 'center'

    },  

    defaultInput: {
        paddingHorizontal: '7px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
        width: '100%',
        alignSelf: 'center',
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
        /* marginTop: 10, */
        fontFamily: 'Raleway_600SemiBold',
    },

    button: {
        display: 'flex',
        /* marginBottom: 49,
        marginTop: 49, */
        width: 275,
        backgroundColor: 'orange',
        color: '#FFF',
        borderRadius: 5,
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

    Texts:{
        display: 'flex',
        width: '70%',
        alignSelf: 'center',
        textAlign: 'center',
    },
});

export default styles;