import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    
    header: {
        width: '100%',
        textAlign: 'center',
        height: 130,
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    textContainer: {
        marginTop: 20,
        textAlign: 'center',
    },

    botao:{
        marginTop: 20,
        marginLeft: 20
    },
    
    firstText: {
        fontFamily: 'Raleway_700Bold',
        color: '#505050',
        fontSize: 20,
        textAlign: 'center',
        top: 15,
    },
    subText: {
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152',
        fontSize: 40
    },
    CardsList: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '75%',
        alignSelf: 'center'
    },
    SubHeader: {
        position: 'relative',
        marginTop: 19,
        marginLeft: 33
    },

    ScreenSelect: {
        backgroundColor: '#cdcdcd',
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