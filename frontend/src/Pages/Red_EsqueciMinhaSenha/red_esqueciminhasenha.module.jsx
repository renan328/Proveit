import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    imageContainer: {
        display: 'flex',
        height: '16%',
        
    },
    
    main: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '84%',
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '100',
        flexDirection: 'column',
        borderTopRightRadius: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        /* top: "-70" */
    },

    main2:{
        display:'flex',
        height: '75%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent:'center',
        alignItems:'center',
    },

    main3:{
        width: '100%',
        height: '65%',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems:'center'
    },

    circuloIcon: {
        display: 'flex',
        alignContent:'space-around',
        alignItems:'center',
        flexDirection:"column",
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150,
        height: 150,
        borderRadius: '70%',
        backgroundColor: '#FF7152',
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },
    
    Texts:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        width: '82%',
        height: '25%',
    },

    Texts2:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
     
    },

    Redefinasua:{
        display:'flex',
        color: '#505050',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 33,
    },

    Senha:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 33,
    },

    Desc:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        color: '#505050',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
        opacity: '80%',
    },



    inputSingle: {
        width: '80%',
        display: 'flex',
        flexDirection:'row',
        alignSelf:'center',
    },  

    defaultInput: {
        paddingHorizontal: '7px',
        fontSize: '13px',
        color: '#505050',
        height: '50px',
        width: '100%',
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
        fontFamily: 'Raleway_600SemiBold',
    },

    button: {
        display: 'flex',
        marginTop:2,
        width: '470%',
        backgroundColor: 'orange',
        color: '#FFF',
        borderRadius: 5,
        padding: 8,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Raleway_700Bold',
    },

});

export default styles;