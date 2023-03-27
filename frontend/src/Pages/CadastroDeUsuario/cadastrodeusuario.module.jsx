import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        backgroundColor: '#fff'
    },

    header: {
        display: 'flex',
        height: 103,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexWrap: 'wrap'
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
        color: 'rgba(255, 113, 82, 0.75)'
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

    texto_usuario: {
        color: '#fff',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 37,
    },


    cadastro: {
        alignItems: 'center'
    },

    suafoto: {
        fontFamily: 'Raleway_700Bold',
        fontSize: 15,
        marginTop: 26,
        color: '#505050'
    },

    cadastro_imagem: {
        width: 200,
        height: 200,
        marginTop: 10,
        display: 'flex'
    },


    inputs: {
        marginTop: '40px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    inputSingle: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
    },

    inputTitle: {
        display: 'flex',
        fontFamily: 'Raleway_800ExtraBold',
        color: '#505050',
    },

    defaultInput: {
        paddingHorizontal: '7px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
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
        marginTop: 10,
        fontFamily: 'Raleway_600SemiBold',
    },

    validator: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 50,
        fontFamily: 'Raleway_800ExtraBold',
        color: 'rgba(61, 7, 7, 0.78)',
        backgroundColor: 'rgba(255, 0, 0, 0.24)',
        width: '20%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    InputCategoria: {
        marginTop: 10
    },

    favcategoriaInput: {
        overflowX: 'hidden',
        width: '296px',
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
        fontSize: '11px',
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
        marginBottom: 49,
        marginTop: 49,
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