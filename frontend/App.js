import React, { useState } from 'react';
import Toast from 'react-native-toast-message';

import useFonts from './hooks/useFonts';
import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';
import Routes from './src/Routes';
import { MenuProvider } from 'react-native-popup-menu';

export default function App(props) {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }

  return (
    <MenuProvider>
      <Routes />
      <StatusBar hidden={true} />
      <Toast />
    </MenuProvider>
  )
}

