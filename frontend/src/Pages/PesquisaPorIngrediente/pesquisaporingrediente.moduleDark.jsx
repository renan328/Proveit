import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#202020'
    },

    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textContainer: {
        marginTop: 20,
        },

    subText: {
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        fontSize: 40,
        textAlign: 'center',

    },

    defaultInput: {
        marginTop: 25,
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '75%'
    },

    input: {
        marginVertical: 5,
        marginHorizontal: 5,
        marginRight: 15,
        paddingHorizontal: 7,
        backgroundColor: '#303030',
        fontSize: 13,
        fontFamily: 'Raleway_700Bold',
        color: '#fff',
        height: 45,
        minWidth: '75%',
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
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    cardList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        marginVertical: 50
    },
    footerText: {
        fontFamily: 'Raleway_600SemiBold',
        color: 'rgba(0,0,0,0.4)',
        fontSize: 15
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
        color: '#FFF',
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
    },
    ScreenSelect: {
        backgroundColor: '#131313',
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 35,
        width: 250,
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 19,
        fontsize: 15,
        alignSelf: 'center',
        flexDirection: 'row',
    },

    addableComponent: {
        marginTop: 25,
        display: 'flex',
        alignItems: 'center',
    },
    titleContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    
    stepNumber: {
        color: '#505050',
        fontSize: 45,
        fontFamily: 'Raleway_900Black'
    },

    TextInput2: {
        color: '#ffffff7d',
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
        color: '#fff',
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

    addRemoveButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    addButton: {
        backgroundColor: 'rgba(255,113,82,0.4)',
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
        backgroundColor: 'rgba(0,0,0,0.35)',
        marginLeft: 5
    },

    removeButtonText: {
        fontFamily: 'Raleway_700Bold',
        color: '#ff375b'
    },

    CardsList: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },

});

export default styles;