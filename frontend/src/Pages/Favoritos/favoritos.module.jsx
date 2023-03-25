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

    firstText: {
        fontFamily: 'Raleway_700Bold',
        color: '#505050',
        fontSize: 20
    },

    subText: { 
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        fontSize: 40
    },

});

export default styles;