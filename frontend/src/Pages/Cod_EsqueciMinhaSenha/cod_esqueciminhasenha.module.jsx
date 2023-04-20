import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        height: '100%',
    },

    imageContainer: {
        display: 'flex',
        height: '16%',
        
    },
    
    main: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '85%',
        display: 'flex',
        marginTop: '100',
        flexDirection: 'column',
        textAlign: 'justify-content',
        borderTopRightRadius: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
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
        height: '55%',
        justifyContent: 'space-between',
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
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },

    IconDocu:{
        marginLeft:10,
    },
    
    Texts:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-around',
        width: '82%',
        height: '40%',
    },

    Texts1:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
    },

    Digiteo:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        color: '#505050',
        fontFamily: 'Raleway_700Bold',
        fontSize: 40,
    },

    codigo:{
        display:'flex',
        color: '#FF7152',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 40,
    },

    Desc:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        color: '#505050',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
        opacity: '80%',
    },


    Inputs_container:{
        display:'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    Inputs: {
        width: '80%',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
    },  

    Input_Styles: {
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 28,
        textAlign: 'center',
        width: 52,
        height: 67,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        fontFamily: 'Raleway_700Bold',
        color: '#505050',
      },

    code: {
        textAlign: 'center',
        color: '#FF785B',
        textDecorationLine:'underline',
        fontFamily: 'Raleway_600SemiBold',
    },
      
    
});

export default styles;