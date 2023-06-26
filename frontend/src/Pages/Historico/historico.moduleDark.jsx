import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202020',
        height: '100%'
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202020'
    },
    textContainer: {
        marginTop: 20,
        textAlign: 'center',
    },
    firstText: {
        fontFamily: 'Raleway_700Bold',
        color: '#fff',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    SubHeader: {
        position: 'relative',
        marginTop: 19,
        marginLeft: 33
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
    }
});

export default styles;