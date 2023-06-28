import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, useColorScheme } from 'react-native';

export function ActionModal({ handleClose, handleAction, status }) {
  let message = '';
  let confirmButtonColor = '';

  if (status === 'post') {
    message = 'Certeza que a receita está correta? Se sim, confirme.';
    confirmButtonColor = '#00ff5583';
  } else if (status === 'put') {
    message = 'Atenção! Esta ação pode ser arriscada.';
    confirmButtonColor = '#ffb936';
  } else if (status === 'putUsuario') {
    message = 'Atenção! Você realmente quer alterar seu perfil?.';
    confirmButtonColor = '#ffb936';
  } else if (status === 'deleteReceita') {
    message = 'Tem certeza de que deseja excluir essa receita?';
    confirmButtonColor = '#ff4848d1';
  } else if (status === 'delete') {
    message = 'Tem certeza de que deseja excluir?';
    confirmButtonColor = '#ff4848d1';
  } else if (status === 'postUsuario') {
    message = 'Certeza que seus dados estão corretos? Se sim, confirme.';
    confirmButtonColor = '#4879ffd1';
  }

  const scheme = useColorScheme()
  const styles = scheme === 'dark' ? StylesDark : StylesLight;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={handleClose}></TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.headerText}>{message}</Text>

        <TouchableOpacity
          activeOpacity={0.4}
          style={[styles.confirmButton, { backgroundColor: confirmButtonColor }]}
          onPress={handleAction}
        >
          <Text style={styles.confirmText}>Sim</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.cancelButton}
          onPress={handleClose}
        >
          <Text style={styles.cancelText}>Não, cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const StylesLight = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 7,
    marginVertical: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  confirmButton: {
    zIndex: 99,
    borderRadius: 10,
    marginHorizontal: 25,
    marginTop: 8,
    padding: 10,
    paddingVertical: 10
  },

  confirmText: {
    textAlign: 'center',
    fontFamily: 'Raleway_700Bold',
    color: '#FFF'
  },
  headerText: {
    width: '80%',
    fontFamily: 'Raleway_800ExtraBold',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: '#505050'
  },

  cancelButton: {
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    marginHorizontal: 25,
    marginTop: 8,
    padding: 20,
    marginVertical: 20
  },

  cancelText: {
    textAlign: 'center',
    fontFamily: 'Raleway_700Bold',
    color: '#505050',
  },
});

const StylesDark = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 7,
    marginVertical: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: '#404040'
  },
  confirmButton: {
    zIndex: 99,
    borderRadius: 10,
    marginHorizontal: 25,
    marginTop: 8,
    padding: 10,
    paddingVertical: 10
  },
  confirmText: {
    textAlign: 'center',
    fontFamily: 'Raleway_700Bold',
    color: '#FFF'
  },
  headerText: {
    width: '80%',
    fontFamily: 'Raleway_800ExtraBold',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: '#fff'
  },

  cancelButton: {
    zIndex: 99,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    marginHorizontal: 25,
    marginTop: 8,
    padding: 20,
    marginVertical: 20
  },

  cancelText: {
    textAlign: 'center',
    fontFamily: 'Raleway_700Bold',
    color: '#fff',
  },
});