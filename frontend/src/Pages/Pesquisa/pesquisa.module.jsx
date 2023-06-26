import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#fff'
    },

    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    CardsList: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
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

    inputContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    input: {
        marginVertical: 5,
        marginHorizontal: 5,
        marginRight: 15,
        paddingHorizontal: 7,
        fontSize: 13,
        fontFamily: 'Raleway_500Medium',
        color: '#505050',
        height: 45,
        minWidth: '75%',
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
        backgroundColor: '#eee',
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
    }
});

export default styles;
