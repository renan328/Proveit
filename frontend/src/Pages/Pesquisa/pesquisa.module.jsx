import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        width: '100%'
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
        textAlign: 'center',
    },

    subText: {
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        fontSize: 40
    },

    input: {
        marginVertical: 5,
        marginHorizontal: 5,
        paddingHorizontal: 7,
        fontSize: 13,
        fontFamily: 'Raleway_700Bold',
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
    cardList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
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
