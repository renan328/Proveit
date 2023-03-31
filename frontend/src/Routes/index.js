import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionSpecs } from '@react-navigation/stack';

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ReceitaSingle from '../Pages/ReceitaSingle';
import Perfil from '../Pages/Perfil';
import CadastroDeUsuario from '../Pages/CadastroDeUsuario';
import CadastroDeReceita from '../Pages/CadastroDeReceita';
import Pesquisa from '../Pages/Pesquisa';
import Favoritos from '../Pages/Favoritos';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBookmark, faMagnifyingGlass, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// Tab navigator principal, a com todas as stacks screens
function MainTabNavigator() {
    return (
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#FF7152',
                inactiveTintColor: '#505050',
                tabStyle: styles.navTab
            }}>

                <Tab.Screen name="Home" component={HomeStack} options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon style={styles.button} icon={faHome} size={22} color={focused ? '#FF7152' : '#505050'} />
                    ), headerShown: false, 
                }} />

                <Tab.Screen name="Adicionar" component={CadastroDeReceitaStack} options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon icon={faPlus} size={22} color={focused ? '#FF7152' : '#505050'} />
                    ), headerShown: false
                }} />

                <Tab.Screen name='Pesquisar' component={PesquisaStack} options={{
                    tabBarIcon: ({ focused }) => (
                        <LinearGradient start={{ x: -1, y: 1 }}
                            end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.searchButton}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size={22} color={'#fff'} />
                        </LinearGradient>
                    ), headerShown: false,  tabBarLabel: ''
                }} />

                <Tab.Screen name="Favoritos" component={FavoritosStack} options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon icon={faBookmark} size={22} color={focused ? '#FF7152' : '#505050'} />
                    ), headerShown: false
                }} />

                <Tab.Screen name="Perfil" component={PerfilStack} options={{
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
            <Stack.Screen name="CadastroDeUsuario" component={CadastroDeUsuario} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

//Stack screen da home
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="ReceitaSingle" component={ReceitaSingle} />
        </Stack.Navigator>
    );
}

//Stack screen das receitas
function CadastroDeReceitaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Settings" component={CadastroDeReceita} />
        </Stack.Navigator>
    );
}

function PesquisaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Settings" component={Pesquisa} />
        </Stack.Navigator>
    );
}

function FavoritosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Settings" component={Favoritos} />
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
                <Stack.Screen name="Login" component={LoginStackScreen} />
                <Stack.Screen name="Main" component={MainTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

const styles = StyleSheet.create({

    navTab: {
        backgroundColor: '#fff',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: '10px',
        paddingVertical: '5px',
    },

    button: {
    },

    searchButton: {
        color: '#fff',
        paddingHorizontal: '18px',
        paddingVertical: '5px',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        shadowRadius: 0,
        shadowColor: "#000",
        top: -2,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3,

        elevation: 9,
    }

});