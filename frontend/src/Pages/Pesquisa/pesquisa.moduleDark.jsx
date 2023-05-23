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

    inputContainer: {
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
        backgroundColor: '#303030',
        fontSize: 13,
        fontFamily: 'Raleway_700Bold',
        color: '#fff',
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
    }
});

export default styles;
