import { width } from '@fortawesome/free-solid-svg-icons/faUser';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',

    },

    header: {
        height: 103,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    textAdd: {
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 35,
    },

    textReceitas: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: 'Raleway_700Bold',
        fontSize: 35,
        top: -45,
    },

    IconCamera: {
        color: 'rgba(255, 113, 82, 0.75)'
    },

    BorderIcon: {
        display: 'flex',
        width: 240,
        height: 240,
        marginTop: 10,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FF7152',
        borderStyle: 'dashed',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },

    imagemReceita: {
        display: 'flex',
        width: 240,
        height: 240,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },

    inputs: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    stepNumber: {
        color: 'rgba(0,0,0,0.15)',
        fontSize: "45px",
        fontFamily: 'Raleway_900Black'
    },

    TextInput: {
        color: '#505050',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: "15px",
        fontFamily: 'Raleway_700Bold'
    },

    TextInput2: {
        color: '#505050',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        fontSize: "18px",
        fontFamily: 'Raleway_700Bold',
        position: 'relative',
        left: -12
    },

    allInput: {
        marginHorizontal: '47px',
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
        fontFamily: 'Raleway_600SemiBold'
    },

    defaultInput: {
        marginTop: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '80%'
    },

    addableComponent: {
        marginTop: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },

    categoriaInput: {
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        width: '310px',
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
        width: '100%',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4
    },

    inputTempo: {
        padding: 5,
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
        fontFamily: 'Raleway_600SemiBold'
    },

    horaInput: {
        overflowX: 'hidden',
        display: 'flex',
        height: '50px',
        width: 180,
        marginLeft: 25,
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
        width: 180,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginLeft: '25px',
        overflowX: 'hidden',
        border: 'none'
    },

    inputQntd: {
        paddingHorizontal: '8px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
        width: '24%',
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
        marginLeft: '72px',
        fontSize: "15px",
        fontFamily: 'Raleway_600SemiBold'
    },

    checkboxContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },

    checkbox: {
        alignSelf: 'center',
    },

    textMedida: {
        marginLeft: '20%',
        fontSize: "15px",
        fontFamily: 'Raleway_600SemiBold'
    },

    inputQuantidade: {
        padding: 5,
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
        fontFamily: 'Raleway_600SemiBold'
    },

    medidaInput: {
        overflowX: 'hidden',
        display: 'flex',
        height: '50px',
        width: 180,
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
        width: 180,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginLeft: '25px',
        overflowX: 'hidden',
        border: 'none'
    },

    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },

    addButton: {
        backgroundColor: 'rgba(255,113,82,0.2)',
        width: '60%',
        textAlign: 'center',
        paddingVertical: '12px',
        borderRadius: 10,
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    addButtonText: {
        fontFamily: 'Raleway_700Bold',
        color: '#FF7152'
    },

    removeButton: {
        textAlign: 'center',
        padding: '12px',
        borderRadius: 10,
        marginTop: '10px',
        backgroundColor: 'rgba(0,0,0,0.15)',
        marginLeft: '5px'
    },

    removeButtonText: {
        fontFamily: 'Raleway_700Bold',
        color: '#ff375b'
    },

    button: {
        display: 'flex',
        marginTop: 30,
        width: 200,
        backgroundColor: 'orange',
        color: '#FFF',
        borderRadius: 10,
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
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Raleway_700Bold',
    },
});

export default styles;