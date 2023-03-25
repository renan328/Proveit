import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        width: '100%'
    },

    header: {
        height: 103,
        width: '100%',
        borderBottomLeftRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        justifyContent: 'flex-end',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },

    textAdd: {
        color: 'rgba(255, 255, 255, 0.65)',
        fontFamily: 'Raleway_700Bold',
        fontSize: 17,
        marginTop: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3

    },

    textReceitas: {
        color: '#fff',
        fontFamily: 'Raleway_700Bold',
        fontSize: 37,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 3
    },

    inputs: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    TextInput: {
        alignSelf: 'baseline',
        marginLeft: 47,
        fontSize: "15px",
        fontFamily: 'Raleway_600SemiBold'
    },

    allInput: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
        width: '296px',
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
        marginTop: 10,
        fontFamily: 'Raleway_600SemiBold'
    },

    categoriaInput: {
        display: 'flex',
        marginRight: 5,
        height: '50px',
        width: '296px',
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        fontFamily: 'Raleway_600SemiBold'
    },

    categoriaListaInput: {
        width: '296px',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4
    },

    inputTempo: {
        marginHorizontal: '47px',
        paddingHorizontal: '7px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
        width: '58px',
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
        marginTop: 10,
        fontFamily: 'Raleway_600SemiBold'
    },

    horaInput: {
        overflowX: 'hidden',
        display: 'flex',
        marginRight: 5,
        height: '50px',
        width: '115px',
        marginRight: '20px',
        marginLeft: '-35px',
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        fontFamily: 'Raleway_600SemiBold'
    },

    horaListaInput: {
        width: '115px',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginLeft: '-40px'
    },

    inputQntd: {
        marginHorizontal: '-10px',
        paddingHorizontal: '7px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
        width: '100px',
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
        marginTop: 10,
        fontFamily: 'Raleway_600SemiBold',
    },

    textPorcoes: {
        marginLeft: '65px',
        fontSize: "15px",
        fontFamily: 'Raleway_600SemiBold'
    },

    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
        width: '300px',
        alignItems: 'center'
    },

    checkbox: {
        alignSelf: 'center',
    },

    textMedida: {
        marginLeft: '20px',
        fontSize: "15px",
        fontFamily: 'Raleway_600SemiBold'
    },

    inputQuantidade: {
        marginHorizontal: '-10px',
        paddingHorizontal: '7px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
        width: '85px',
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
        marginTop: 10,
        fontFamily: 'Raleway_600SemiBold',
        marginLeft: 47
    },

    medidaInput: {
        overflowX: 'hidden',
        display: 'flex',
        height: '50px',
        width: '200px',
        marginLeft: '25px',
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        fontFamily: 'Raleway_600SemiBold'
    },

    medidaListaInput: {
        width: '200px',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginLeft: '25px',
    },

    button: {
        display: 'flex',
        marginBottom: 25,
        marginTop: 10,
        width: 200,
        backgroundColor: 'orange',
        color: '#FFF',
        borderRadius: 5,
        padding: 10,
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
});

export default styles;