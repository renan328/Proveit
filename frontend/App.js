import React from 'react';
import Toast from 'react-native-toast-message';
import { Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, useFonts } from '@expo-google-fonts/raleway';

import { StatusBar } from 'expo-status-bar';

import Routes from './src/Routes';
import ReceitaSingle from './src/Pages/ReceitaSingle'
import Home from './src/Pages/Home';
import Perfil from './src/Pages/Perfil';
import Pesquisar from './src/Pages/Pesquisa';
import CadastroDeReceita from './src/Pages/CadastroDeReceita';
import CadastroDeUsuario from './src/Pages/CadastroDeUsuario';
import EsqueciMinhaSenha from './src/Pages/EsqueciMinhaSenha';
import Favoritos from './src/Pages/Favoritos';
import Configuracoes from './src/Pages/Configuracoes';
import { Route } from 'expo-router/src/Route';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import Loading from './src/Pages/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, });

  if (!fontsLoaded) {
    return <Loading />
  }

  else {
    return (
      <MenuProvider>
        <Routes />
      </MenuProvider>
    )
  }
}

