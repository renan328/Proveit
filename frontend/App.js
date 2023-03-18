import React from 'react';
import Toast from 'react-native-toast-message';
import { Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, useFonts } from '@expo-google-fonts/raleway';
import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import Routes from './src/Routes';

import Home from './src/Pages/Home'
import Login from './src//Pages/Login'
import ReceitaSingle from './src/Pages/ReceitaSingle';
import Perfil from './src/Pages/Perfil';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// Tab navigator principal, a com todas as stacks screens
function MainTabNavigator() {
  return (
    <Tab.Navigator options={{
      activeTintColor: '#FF7152',
      inactiveTintColor: '#505050',
      tabStyle: { margin: 10 },
    }}>

      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon icon={faHome} size={22} color={focused ? '#FF7152' : '#505050'}/>
        ), headerShown: false
      }} />

      <Tab.Screen name="Adicionar" component={ReceitaStack} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon icon={faPlus} size={22} color={focused ? '#FF7152' : '#505050'}/>
        ), headerShown: false
      }} />

      <Tab.Screen name='Pesquisar' component={ReceitaStack} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon icon={faMagnifyingGlass} size={22}  color={focused ? '#FF7152' : '#505050'}/>
        ), headerShown: false
      }} />

      <Tab.Screen name="Favoritos" component={ReceitaStack} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon icon={faBookmark} size={22}  color={focused ? '#FF7152' : '#505050'}/>
        ), headerShown: false
      }} />

      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon icon={faUser} size={22}  color={focused ? '#FF7152' : '#505050'}/>
        ), headerShown: false
      }} />


    </Tab.Navigator>
  );
}

//Stack screen do login
function LoginStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

//Stack screen da home
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="Details" component={ReceitaSingle} />
    </Stack.Navigator>
  );
}

//Stack screen das receitas
function ReceitaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Settings" component={ReceitaSingle} />
    </Stack.Navigator>
  );
}

function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Settings" component={Perfil} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({ Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black, });

  return (
    <NavigationContainer style={{ overflowX: 'hidden', width: '100%' }}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginStackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
