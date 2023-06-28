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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textAdd: {
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 35,
        top: 15,
        textAlign: 'center'
    },

    textReceitas: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: 'Raleway_700Bold',
        fontSize: 35,
    },

    IconCamera: {
        color: 'rgba(255, 113, 82, 0.75)'
    },

    IconCameraError: {
        color: '#ff375b'
    },

    BorderIcon: {
        display: 'flex',
        width: 240,
        height: 240,
        marginTop: 10,
        borderWidth: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FF7152',
        borderStyle: 'dashed',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },

    BorderIconError: {
        borderWidth: 3.5,
        borderColor: '#ff375b',
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
        fontSize: 45,
        fontFamily: 'Raleway_900Black'
    },

    TextInput: {
        color: '#505050',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: 15,
        fontFamily: 'Raleway_700Bold'
    },

    TextInput2: {
        color: '#505050',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        fontSize: 18,
        fontFamily: 'Raleway_700Bold',
        position: 'relative',
        left: -12
    },
    TextInput2Error: {
        color: 'rgba(255, 55, 92, 0.6)',
    },

    allInput: {
        marginHorizontal: 47,
        paddingHorizontal: 7,
        fontSize: 13,
        color: '#505050',
        height: 50,
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
        elevation: 3,
        marginTop: 10,
        fontFamily: 'Raleway_500Medium',
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
        height: 50,
        width: 310,
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
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 10
    },

    inputTempo: {
        padding: 5,
        fontSize: 13,
        color: '#505050',
        height: 50,
        width: '35%',
        marginRight: 25,
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
        elevation: 3,
        marginTop: 10,
        fontFamily: 'Raleway_500Medium',
    },

    horaInput: {
        overflowX: 'hidden',
        display: 'flex',
        height: 50,
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

    addRemoveButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    ListaInput: {
        width: 160,
        height: 50,
        fontSize: 13,
        color: '#505050',
        backgroundColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
        marginTop: 10,
        overflowX: 'hidden',
        border: 'none',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    inputQntd: {
        paddingHorizontal: 8,
        fontSize: 13,
        color: '#505050',
        height: 50,
        width: '35%',
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
        marginLeft: 72,
        fontSize: 15,
        fontFamily: 'Raleway_600SemiBold'
    },

    checkboxContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    checkbox: {
        alignSelf: 'center',
    },

    textMedida: {
        marginLeft: '20%',
        fontSize: 15,
        fontFamily: 'Raleway_600SemiBold'
    },

    inputQuantidade: {
        padding: 5,
        fontSize: 13,
        color: '#505050',
        height: 50,
        width: '35%',
        marginRight: 25,
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
        elevation: 3,
        marginTop: 10,
        fontFamily: 'Raleway_500Medium',
    },

    medidaInput: {
        overflowX: 'hidden',
        display: 'flex',
        height: 50,
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

    medidaListaInput: {
        width: 180,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginLeft: 25,
        overflowX: 'hidden',
        border: 'none'
    },

    addButton: {
        backgroundColor: 'rgba(255,113,82,0.2)',
        textAlign: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10
    },

    addButtonText: {
        fontFamily: 'Raleway_700Bold',
        color: '#FF7152'
    },

    removeButton: {
        textAlign: 'center',
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'rgba(0,0,0,0.15)',
        marginLeft: 5
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
        fontSize: 18,
        fontFamily: 'Raleway_700Bold',
    },

    inputPasso: {
        paddingHorizontal: 7,
        fontSize: 13,
        color: '#505050',
        height: 50,
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

    inputError: {
        borderWidth: 1,
        borderColor: '#ff375b'
    },

    textError: {
        alignSelf: 'center',
        color: '#ff375b',
        marginTop: 5
    },

    StepTextError: {
        alignSelf: 'center',
        color: 'rgba(255, 55, 92, 0.6)',
        marginTop: 5
    },

    descricaoInput: {
        marginHorizontal: 47,
        padding: 10,
        fontSize: 13,
        color: '#505050',
        height: 80,
        width: '100%',
        backgroundColor: '#FFF',
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

    PickerItem: {
        color: '#505050',
        fontFamily: 'Raleway_500Medium',
    },


    BoxInfo: {
        width: 35,
        height: 35,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
    },
    ButtonText: {
        color: '#505050',
        fontFamily: 'Raleway_700Bold',
        fontSize: 24,
    },
});

export default styles;