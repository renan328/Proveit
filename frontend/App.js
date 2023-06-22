import React, { useState, useEffect } from 'react';
import * as Font from "expo-font";
import Toast from 'react-native-toast-message';

import useFonts from './hooks/useFonts';
import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';
import Routes from './src/Routes';
import ReceitaSingle from './src/Pages/ReceitaSingle'
import Home from './src/Pages/Home';
import Perfil from './src/Pages/Perfil';
import Pesquisar from './src/Pages/Pesquisas';
import CadastroDeReceita from './src/Pages/CadastroDeReceita';
import CadastroDeUsuario from './src/Pages/CadastroDeUsuario';
import EsqueciMinhaSenhaSimple from './src/Pages/EsqueciMinhaSenhaSimple';
import EsqueciMinhaSenha from './src/Pages/EsqueciMinhaSenha';
import Cod_EsqueciMinhaSenha from './src/Pages/Cod_EsqueciMinhaSenha';
import Red_EsqueciMinhaSenha from './src/Pages/Red_EsqueciMinhaSenha';
import Favoritos from './src/Pages/Favoritos';
import Configuracoes from './src/Pages/Configuracoes';
import { Route } from 'expo-router/src/Route';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import Login from './src/Pages/Login';

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
      <Routes/>
      <StatusBar hidden={true} />
      <Toast />
    </MenuProvider>
  )
}

