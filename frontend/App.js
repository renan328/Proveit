import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Pages/Home';
import { Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, useFonts } from '@expo-google-fonts/raleway';

export default function App() {

  const [fontsLoaded] = useFonts({ Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, });

  return (

    //View principal do app, define resolução, etc.
    <View style={{
      overflow: 'hidden',
      width: '100%',
    }}>

      <StatusBar translucent backgroundColor="transparent" />
      <Home />
    </View>
  );
}