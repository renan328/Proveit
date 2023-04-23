
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

    header: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    userImage: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: '15px',
        width: 100,
        height: 100,
        maxWidth: '500px',
        backgroundColor: 'rgba(50, 50, 50, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontFamily: 'Raleway_800ExtraBold',
        marginTop: '10px',
        color: '#FF7152',
        fontSize: 28,
    },
    userName: {
        fontFamily: 'Raleway_700Bold',
        color: '#858585',
        fontSize: 12,
    },
    text: {
        fontFamily: 'Raleway_700Bold',
        marginTop: '50px',
        color: '#FF7152',
    },
    textUnder: {
        width: '350px',
        fontFamily: 'Raleway_700Bold',
        marginTop: '15px',
        color: '#505050',
        textAlign: 'center'
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
    }


});

export default styles;