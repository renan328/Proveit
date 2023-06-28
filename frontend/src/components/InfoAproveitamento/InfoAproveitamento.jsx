import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

export function InfoAproveitamento({ handleClose }) {

  const scheme = useColorScheme();
  const styles = scheme === 'dark' ? stylesDark : stylesLight;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={handleClose}>
        <View style={styles.box}>
          <FontAwesomeIcon icon={faSeedling} style={{ color: '#52FF6E' }} size={25}></FontAwesomeIcon>
          <Text style={styles.title}>O que são receitas com reaproveitáveis?</Text>
          <Text style={styles.content}>
            Receitas com reaproveitáveis são pratos que utilizam ingredientes geralmente descartados, como talos e cascas, evitando o desperdício. Essas receitas criativas transformam esses ingredientes em pratos deliciosos e sustentáveis, promovendo uma cozinha consciente e ajudando a reduzir o impacto ambiental.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    zIndex: 99,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    top: '30%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Raleway_700Bold',
    marginBottom: 10,
    color: '#FF7152',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#505050',
    fontFamily: 'Raleway_500Medium',
  },

  button: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 20,
  },
  buttonText: {
    color: '#FF7152',
    fontFamily: 'Raleway_700Bold',
    fontSize: 16,
  },

});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    zIndex: 99,
    backgroundColor: '#3a3a3a',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    top: '30%'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Raleway_700Bold',
    marginBottom: 10,
    color: '#FF7152',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#DDD',
    fontFamily: 'Raleway_500Medium',
  },

  button: {
    backgroundColor: '#404040',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 20,
  },
  buttonText: {
    color: '#FF7152',
    fontFamily: 'Raleway_700Bold',
    fontSize: 16,
  }
});