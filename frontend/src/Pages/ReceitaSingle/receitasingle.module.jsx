
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#fff'
    },

    header: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },

    headerIcon: {
        color: '#fff',
        marginVertical: '20px',
        marginHorizontal: '12px',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        paddingVertical: '10px',
        paddingHorizontal: '5px',
        backgroundColor: 'rgba(80, 80, 80, 0.46)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        top: -60,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },

    mainHeader: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '90%'
    },

    starsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '15px'
    },

    star: {
        marginBottom: 0
    },

    mainTexts: {
        display: 'flex',
        alignItems: 'center',
        top: -18,
        maxWidth: '100%'
    },

    mainTitle: {
        color: '#505050',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: '25px',
        textAlign: 'center',
        width: '85%',
        flexGrow: 1
    },

    description: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.55)',
        fontFamily: 'Raleway_500Medium',
        width: '85%',
        textAlign: 'center',
    },

    caloryCounter: {
        paddingHorizontal: '12px',
        paddingVertical: '2px',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        flex: 1
    },

    caloryText: {
        fontSize: 11,
        color: '#fff',
        fontFamily: 'Raleway_500Medium'
    },

    detailsContainer: {
        marginVertical: '10px',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: '20px',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 4,
    },

    subDetail: {
        flex: 1,
        alignItems: 'center',
        color: '#fff',
    },

    divBar: {
        height: '90%',
        width: '2px',
        backgroundColor: '#fff'
    },

    detailText: {
        fontFamily: 'Raleway_700Bold',
        color: '#fff',
        marginTop: '5px',
        fontSize: '15px'
    },

    detailIcon: {
        color: '#fff',
    },

    markButton: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'space-between',
        paddingVertical: '20px',
        paddingHorizontal: '30px',
    },

    userPic: {
        width: '100%',
        height: '100%'
    },

    mainUserText: {
        fontSize: '25px',
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152'
    },

    linkUserText: {
        fontSize: '15px',
        fontFamily: 'Raleway_700Bold',
        color: '#505050'
    },

    steps: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    stepsHeader: {
        marginTop: '17px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    stepsTitle: {
        marginLeft: '15px',
        fontFamily: 'Raleway_800ExtraBold',
        color: '#505050',
        fontSize: 25,
        marginTop: '7px',
    },

    stepList: {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },

    ingredients: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    ingredientsHeader: {
        marginTop: '17px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    ingredientsTitle: {
        marginLeft: '15px',
        fontFamily: 'Raleway_800ExtraBold',
        color: '#505050',
        fontSize: 25,
        marginTop: '7px',
    },

    ingredientsList: {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },

    ready: {
        marginTop: '15px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },

    readySubText: {
        fontFamily: 'Raleway_700Bold',
        color: '#999999',
        fontSize: '15px'
    },

    readyMainText: {
        fontFamily: 'Raleway_900Black',
        fontSize: '42px',
        color: '#505050',
        letterSpacing: '10px'
    },

    rating: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    ratePresentation: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: '20px',
        marginTop: '20px',
        color: '#505050'
    },

    ratingContainer: {
        marginTop: '20px',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
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
        shadowRadius: 5,
    },

    commentInput: {
        color: '#505050',
        backgroundColor: '#fff',
        fontFamily: 'Raleway_600SemiBold',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        padding: '10px',
        marginTop: '10px',
        flexGrow: true,
        height: '100px'
    },

    rateButton: {
        marginTop: '25px',
        paddingVertical: '8px',
        textAlign: 'center',
        width: '70%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5,
    },

    rateButtonText: {
        fontFamily: 'Raleway_700Bold',
        color: '#FF7152'
    },

    comments: {
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    commentsHeader: {
        paddingVertical: '30px'
    },

    commentsTitle: {
        fontSize: '25px',
        fontFamily: 'Raleway_800ExtraBold',
        color: '#505050',
    },

    commentSingle: {
        paddingVertical: '7px',
        paddingHorizontal: '7px',
        textAlign: 'left',
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
        marginTop: 10,
        fontFamily: 'Raleway_600SemiBold',
    },

    commentsContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },

});

export default styles;