import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';

export function ActionModal({ handleClose, handleAction, status }) {
  let message = '';
  let confirmButtonColor = '';
  
  if (status === 'post') {
    message = 'Certeza que a receita está correta? Se sim, confirme';
    confirmButtonColor = '#22ff6c';
  } else if (status === 'put') {
    message = 'Atenção! Esta operação pode ser arriscada.';
    confirmButtonColor = '#ffb936';
  } else if (status === 'delete') {
    message = 'Tem certeza de que deseja apagar essa receita?';
    confirmButtonColor = '#ff4848d1';
  }

  console.log(handleAction);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={handleClose}></TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.headerText}>{message}</Text>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.cancelButton}
          onPress={handleClose}
        >
          <Text style={styles.cancelText}>Não, cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={[styles.confirmButton, { backgroundColor: confirmButtonColor }]}
          onPress={handleAction}
        >
          <Text style={styles.confirmText}>Sim</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginVertical: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  confirmButton: {
    zIndex: 99,
    borderRadius: 10,
    marginRight: 25,
    marginLeft: 25,
    marginTop: 8,
    padding: 10,
    marginVertical: 20
  },
  confirmText: {
    textAlign: 'center',
    fontFamily: 'Raleway_700Bold',
    color: '#FFF'
  },
  headerText: {
    width: '80%' ,
    fontFamily: 'Raleway_800ExtraBold',
    alignSelf: 'center',
    marginVertical: 10,
  },

  cancelButton: {
    zIndex: 99,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginRight: 25,
    marginLeft: 25,
    marginTop: 8,
    padding: 10,
    marginVertical: 20
  },

  cancelText: {
    textAlign: 'center',
    fontFamily: 'Raleway_700Bold',
    color: '#000',
  },
});