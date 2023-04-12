import { width } from '@fortawesome/free-solid-svg-icons/faUser';
import { StyleSheet } from 'react-native';

const toastStyle = StyleSheet.create({ 

    successToast: {
        backgroundColor: '#2dc254',
        height: '55px',
        width: '92%',
        borderRadius: '15px',
        paddingHorizontal: '10px',
        position: 'absolute',
        zIndex: '5',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    failToast: {
        backgroundColor: '#c22d2d',
        height: '55px',
        width: '92%',
        borderRadius: '15px',
        paddingHorizontal: '10px',
        position: 'absolute',
        zIndex: '5',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    

    toastText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Raleway_600SemiBold'
    }

});

export default toastStyle;