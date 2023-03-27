import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';

export default function ComentarioSingle({ userPicture, userName, stars, comment }) {

    function StarCounter() {
        for (let index = 0; index < stars; index++)
            return (
                <View style={styles.starsContainer}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </View>
            );
    };

    return (

        <View style={styles.container}>

            <View style={styles.imgContainer}>
                <Text>{userPicture}</Text>
            </View>

            <View style={styles.textContainer}>
                <View style={styles.commentHeader}>
                    <Text>{userName}</Text>
                    <Text>{StarCounter()}</Text>
                </View>
                <View>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </View>
                <View style={styles.text}>
                    <Text>{comment}</Text>
                </View>
                <View style={styles.footer}>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        width: '80%',
        color: '#505050',
        flexDirection: 'row',
        marginTop: '20px',
    },

    imgContainer: {
        flex: 25,
        backgroundColor: 'blue',
    },

    textContainer: {
        flex: 75,
        display: 'flex',
        backgroundColor: 'red',
        paddingHorizontal: '20px',
        paddingVertical: '10px',
    },

    commentHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    starsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

});
