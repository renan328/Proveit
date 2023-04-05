import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    imageContainer: {
        display: 'flex',
        height: '20%',
    },

    main: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '100',
        borderTopRightRadius: 120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        /* top: "-70" */
    },

    circuloIcon: {
        display: 'flex',
        alignItems:'center',
        flexDirection:"column",
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: '70%',
        backgroundColor: '#FF7152',
    },

    Qualeoseu:{
        color: '#505050',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 36,
    },
});

export default styles;