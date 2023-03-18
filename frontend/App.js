import React from 'react';
import Toast from 'react-native-toast-message';
import { Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, useFonts } from '@expo-google-fonts/raleway';

import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';
import Routes from './src/Routes';


export default function App() {
  const [fontsLoaded] = useFonts({ Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, });

  return (
    <Routes/>
  )
}

