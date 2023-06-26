import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#fff'
    },

    header: {
        width: '100%',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },

    headerIcon: {
        color: '#505050',
        marginVertical: 20,
        marginHorizontal: 12,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    mainImage:{
        height: screenHeight * 0.55, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },

    mainHeader: {
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderBottomLeftRadius: 50, borderBottomRightRadius: 50,
        borderTopLeftRadius: 50, borderTopRightRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.40,
        shadowRadius: 7,
        elevation: 7
    },

    mainHeaderWhite: {
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderBottomLeftRadius: 50, borderBottomRightRadius: 50,
        borderTopLeftRadius: 50, borderTopRightRadius: 50,
        paddingLeft: 20
    },

    starsContainer: {
        marginTop: 15
    },

    star: {
        marginBottom: 0
    },

    mainTexts: {
        display: 'flex',
        textAlign: 'left',
        top: -18,
        width: '100%'
    },

    mainTitle: {
        color: '#505050',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 20,
        textAlign: 'left',
        width: '100%',
        flexGrow: 1
    },

    description: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.55)',
        fontFamily: 'Raleway_500Medium',
        width: '80%',
        textAlign: 'justify',
    },

    caloryCounter: {
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        flex: 1,
        marginVertical: 10
    },

    caloryText: {
        fontSize: 11,
        color: '#fff',
        fontFamily: 'Raleway_500Medium'
    },

    detailsContainer: {
        marginVertical: 10,
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        paddingVertical: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 4,
        backgroundColor: '#fff'
    },

    subDetail: {
        flex: 1,
        alignItems: 'center',
        color: '#fff',
    },

    divBar: {
        height: '90%',
        width: 2,
        backgroundColor: '#fff'
    },

    subDetailText: {
        fontFamily: 'Raleway_500Medium',
        color: 'rgba(255,255,255,0.7)',
        marginTop: 5,
        fontSize: 12,
    },

    detailText: {
        fontFamily: 'Raleway_700Bold',
        color: '#fff',
        marginTop: 5,
        fontSize: 17,
        textTransform: 'uppercase'
    },

    detailIcon: {
        color: '#fff',
    },

    markButton: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 30,
    },

    userPic: {
        width: '100%',
        height: '100%'
    },

    mainUserText: {
        fontSize: 25,
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FF7152'
    },

    linkUserText: {
        fontSize: 15,
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
        marginTop: 17,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    stepsTitle: {
        marginLeft: 15,
        fontFamily: 'Raleway_800ExtraBold',
        color: '#505050',
        fontSize: 25,
        marginTop: 7,
    },

    stepList: {
        marginTop: 20,
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
        marginTop: 17,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    ingredientsTitle: {
        marginLeft: 15,
        fontFamily: 'Raleway_800ExtraBold',
        color: '#505050',
        fontSize: 25,
        marginTop: 7,
    },

    ingredientsList: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },

    ready: {
        marginTop: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },

    readySubText: {
        fontFamily: 'Raleway_700Bold',
        color: '#999999',
        fontSize: 15
    },

    readyMainText: {
        fontFamily: 'Raleway_900Black',
        fontSize: 42,
        color: '#505050',
        letterSpacing: 10
    },

    rating: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    ratePresentation: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 20,
        marginTop: 20,
        alignSelf: 'center',
        color: '#505050'
    },

    ratingContainer: {
        marginTop: 20,
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
        elevation: 4,
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
        elevation: 4,

        padding: 10,
        marginTop: 10,
        // flexGrow: true,
        height: 100
    },

    rateButton: {
        marginTop: 25,
        paddingVertical: 8,
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
        elevation: 4,
    },

    rateButtonText: {
        fontFamily: 'Raleway_700Bold',
        color: '#FF7152',
        textAlign: 'center'
    },

    comments: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    commentsHeader: {
        paddingVertical: 30
    },

    commentsTitle: {
        fontSize: 25,
        fontFamily: 'Raleway_800ExtraBold',
        color: '#505050',
    },

    commentSingle: {
        paddingVertical: 7,
        paddingHorizontal: 7,
        textAlign: 'left',
        fontSize: 13,
        color: '#505050',
        height: 50,
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