import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFlag, faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';

export default function ComentarioSingle({ usuario_id, userPicture, userName, stars, comment }) {

    function StarCounter() {

        const starsBox = [];

        for (let index = 0; index < stars; index++) {
            starsBox.push(
                <View key={index}>
                    <FontAwesomeIcon icon={faStar} color={'#FF7152'}/>
                </View>
            );
        }

        return (
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '5px', }}>{starsBox}</View>
        );
    };

    return (

        <View style={styles.container}>

            <View style={styles.imgContainer}>
                <Image source={userPicture} style={styles.userPic}></Image>
            </View>

            <View style={styles.textContainer}>
                <View style={styles.commentHeader}>
                    <Text style={styles.userName}>{userName}</Text>
                    <View>{StarCounter()}</View>
                </View>
                <View style={styles.quoteContainer}>
                    <FontAwesomeIcon icon={faQuoteLeft}  color={'rgba(0,0,0,0.3)'}/>
                </View>
                <View style={styles.text}>
                    <Text style={styles.comment}>{comment}</Text>
                </View>
                <View style={styles.footer}>
                    <FontAwesomeIcon icon={faQuoteRight} color={'rgba(0,0,0,0.3)'}/>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        minWidth: '80%',
        color: '#505050',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: '30px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
        elevation: 5,
        borderBottomStartRadius: 10,
        borderTopStartRadius: 10,
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10,
    },

    imgContainer: {
        flex: 25,
    },

    userPic: {
        width: '65px',
        height: '65px',
        top: -15,
        left: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderBottomStartRadius: 15,
        borderTopStartRadius: 15,
        borderBottomEndRadius: 15,
        borderTopEndRadius: 15,
        elevation: 5,
    },

    textContainer: {
        flex: 75,
        display: 'flex',
        paddingHorizontal: '20px',
        paddingVertical: '10px',
        borderBottomEndRadius: 20,
        borderTopEndRadius: 20,
        zIndex: 0,
    },

    commentHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    userName: {
        fontFamily: 'Raleway_700Bold',
        color: '#505050',
        fontSize: '16px'
    },

    quoteContainer: {
        marginVertical: '5px'
    },

    comment: {
        fontFamily: 'Raleway_600SemiBold',
        color: '#505050',
        fontSize: '14px'
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: '5px'
    }

});
