import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionSpecs } from '@react-navigation/stack';

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ReceitaSingle from '../Pages/ReceitaSingle';
import Perfil from '../Pages/Perfil';

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
    <Tab.Navigator style={styles.navTab} options={{
      activeTintColor: '#FF7152',
      inactiveTintColor: '#505050',
      tabStyle: { margin: 10 },
    }}>

      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon icon={faHome} size={22} color={focused ? '#FF7152' : '#505050'} />
        ), headerShown: false
      }} />

      <Tab.Screen name="Adicionar" component={ReceitaStack} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon icon={faPlus} size={22} color={focused ? '#FF7152' : '#505050'} />
        ), headerShown: false
      }} />

      <Tab.Screen name='Pesquisar' component={ReceitaStack} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon icon={faMagnifyingGlass} size={22} color={focused ? '#FF7152' : '#505050'} />
        ), headerShown: false
      }} />

      <Tab.Screen name="Favoritos" component={ReceitaStack} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon icon={faBookmark} size={22} color={focused ? '#FF7152' : '#505050'} />
        ), headerShown: false
      }} />

      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon icon={faUser} size={22} color={focused ? '#FF7152' : '#505050'} />
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

export default function Routes() {

  return (
    <NavigationContainer style={{ overflowX: 'hidden', width: '100%' }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: TransitionSpecs.FadeInFromBottomAndroidSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec,
          },
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress,
            },
          }),
        }}
      >
        <Stack.Screen name="Login" component={LoginStackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({

  navTab: {
    backgroundColor: 'black'
  }
});