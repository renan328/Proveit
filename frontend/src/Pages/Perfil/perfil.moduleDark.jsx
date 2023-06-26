
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#202020',
        height: '100%'
    },

    header: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    configIcon: {
        marginVertical: 20,
        color: '#909090',
    },

    userImage: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 10,
        width: 100,
        height: 100,
        maxWidth: 500,
        backgroundColor: '#303030',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontFamily: 'Raleway_800ExtraBold',
        marginTop: 10,
        color: '#FF7152',
        fontSize: 28,
        textAlign: 'center'
    },
    userName: {
        fontFamily: 'Raleway_700Bold',
        color: '#909090',
        fontSize: 12,
        textAlign: 'center'
    },
    text: {
        fontFamily: 'Raleway_700Bold',
        marginTop: 50,
        color: '#FF7152',
    },
    textUnder: {
        width: 350,
        fontFamily: 'Raleway_700Bold',
        marginTop: 15,
        color: '#fff',
        textAlign: 'center'
    },
    imagemUsu: {
        display: 'flex',
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70
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