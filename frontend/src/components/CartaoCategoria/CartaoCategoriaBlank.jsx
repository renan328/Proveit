import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, SectionList, TouchableOpacity, Appearance, useColorScheme } from 'react-native';
import { BlurView } from 'expo-blur';

export default function CartaoCategoriaBlank({ categoria }) {
    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight
    return (
        <View style={styles.caixaPrincipal}>
            <View style={styles.imgCategoria}>
                <View style={styles.textContainer}>
                    <View style={styles.titulo}></View>
                </View>
            </View>
        </View>
    )
}
const stylesLight = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        paddingVertical: 2,
        marginBottom: 10
    },

    imgCategoria: {
        backgroundColor: '#dcdcdc',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24
    },

    caixaPrincipal: {
        height: 88,
        width: 134,
        textAlign: 'center',
        borderRadius: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 4,
        marginRight: 10
    },

    textContainer: {
        backgroundColor: 'rgba(255,255,255)',
        height: 25,
        display: 'flex',
        alignItems: 'center',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },

    titulo: {
        fontFamily: 'Raleway_600SemiBold',
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#000',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255, 0.9)',
        display: 'flex',
        alignSelf: 'center',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        textAlign: 'center'
    },

    CarrosselContainer: {
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row'
    },

})
const stylesDark = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        paddingVertical: 2
    },

    imgCategoria: {
        backgroundColor: '#181818',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24
    },

    caixaPrincipal: {
        height: 88,
        width: 134,
        textAlign: 'center',
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 4,
        marginRight: 10
    },

    textContainer: {
        backgroundColor: 'rgba(0,0,0,0.1 )',
        height: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24
    },

    titulo: {
        fontFamily: 'Raleway_600SemiBold',
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#fff',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0.1)',
        display: 'flex',
        alignSelf: 'center',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        textAlign: 'center'
    },

    CarrosselContainer: {
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row'
    }
})