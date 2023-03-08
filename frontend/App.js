import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Pages/Home';
import { Raleway_100Thin, Raleway_500Medium, Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';

export default function App() {

  const [fontsLoaded] = useFonts({ Raleway_100Thin, Raleway_500Medium, Raleway_700Bold });

  if (!fontsLoaded) {
    return 
      <AppLoading/>
    
    
  }
  else{
    <Home/>
  }
}