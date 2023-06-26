import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        backgroundColor: '#202020'
    },

    header: {
        width: '100%',
        textAlign: 'center',
        height: 130,
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    CadastreSe: {
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 36,
    },

    CadastreSe: {
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 36,
    },

    IconCamera: {
        color: '#FF7152'
    },

    ImagePencil: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },

    IconContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -29 }, { translateY: -29 }],
    },

    BorderIcon: {
        display: 'flex',
        width: 140,
        height: 140,
        marginTop: 10,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FF7152',
        borderStyle: 'dashed',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70
    },

    ImagePencil: {
        display: 'flex',
        alignSelf: 'center'
    },

    imagemUsu: {
        display: 'flex',
        width: 140,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70
    },

    texto_usuario: {
        color: '#fff',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 37,
    },

    botao: {
        alignSelf: 'flex-start',
        marginHorizontal: '3%',
        marginVertical: 20,
    },

    cadastro: {
        alignItems: 'center'
    },

    suafoto: {
        fontFamily: 'Raleway_700Bold',
        fontSize: 15,
        marginTop: 26,
        color: 'rgba(255,255,255,0.7)'
    },

    cadastro_imagem: {
        width: 200,
        height: 200,
        marginTop: 10,
        display: 'flex'
    },


    inputs: {
        marginTop: 40,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    inputSingle: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 20,
    },

    inputTitle: {
        display: 'flex',
        fontFamily: 'Raleway_800ExtraBold',
        color: 'rgba(255,255,255,0.7)',
    },

    defaultInput: {
        paddingHorizontal: 7,
        fontSize: 13,
        color: 'rgba(255,255,255,0.70)',
        height: 50,
        width: '100%',
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
        elevation: 3,
        marginTop: 10,
        fontFamily: 'Raleway_500Medium',
    },


    favcategoriaInput: {
        overflowX: 'hidden',
        width: 296,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        border: 'none'
    },

    favcategoriafonteInput: {
        fontSize: 11,
        color: '#505050',
        marginTop: 5,
    },

    favcategorialistaInput: {
        display: 'flex',
        width: 296,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    button: {
        display: 'flex',
        marginBottom: 50,
        marginTop: 30,
        width: 200,
        backgroundColor: 'orange',
        color: '#FFF',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 15,
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
        color: 'rgba(255,255,255,0.80)',
        fontFamily: 'Raleway_700Bold',
    },

    inputError: {
        borderWidth: 1,
        borderColor: '#ff375b'
    },

    textError: {
        alignSelf: 'center',
        color: '#ff375b',
        marginBottom: 8
    }
});

export default styles;