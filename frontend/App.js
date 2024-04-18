import React, { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';

import useFonts from './hooks/useFonts';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/Routes';
import { MenuProvider } from 'react-native-popup-menu';
import EsqueciMinhaSenha from './src/Pages/EsqueciMinhaSenha';
import EsqueciMinhaSenhaSimple from './src/Pages/EsqueciMinhaSenhaSimple';

export default function App(props) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
        // Artificial delay for two seconds to simulate a slow loading
        // experience. Remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen when the app is ready
        await SplashScreen.hideAsync();
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  return (
    <MenuProvider>
      {isReady && (
        <>
          <Routes />
          <StatusBar hidden={true} />
          <Toast />
        </>
      )}
    </MenuProvider>
  );
}

