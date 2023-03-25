
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textContainer: {
        marginTop: '20px',
        textAlign: 'center',
    },  

    subText: { 
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        fontSize: 40
    },

    input: {
        marginVertical: '5px',
        marginHorizontal: '5px',
        paddingHorizontal: '7px',
        fontSize: '13px',
        fontFamily: 'Raleway_700Bold',
        color: '#505050',
        height: '45px',
        minWidth: '265px',
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

});

export default styles;