import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
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
    textContainer: {
        marginTop: 20,
        textAlign: 'center',
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
        flexDirection: 'row'
    },
    SubHeader: {
        position: 'relative',
        marginTop: 19,
        marginLeft: 33
    },

    ScreenSelect: {
        backgroundColor: '#eeeeee',
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


