import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    imageContainer: {
        display: 'flex',
        height: '20%',
    },
    
    main: {
        backgroundColor: '#fff',
        width: '100%',
        height: '80%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '135px',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        top: "-70"
    },
   
});

export default styles;