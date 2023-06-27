import { View, StyleSheet, Appearance, useColorScheme, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionSpecs } from '@react-navigation/stack';

import HomeScreen from '../Pages/Home'
import LoginScreen from '../Pages/Login'
import ReceitaSingle from '../Pages/ReceitaSingle';
import PerfilScreen from '../Pages/Perfil';
import CadastroDeUsuario from '../Pages/CadastroDeUsuario';
import CadastroDeReceitaScreen from '../Pages/CadastroDeReceita';
import Pesquisa from '../Pages/Pesquisa';
import FavoritosScreen from '../Pages/Favoritos';
import Configuracoes from '../Pages/Configuracoes';
import EsqueciMinhaSenha from '../Pages/EsqueciMinhaSenha';
import Cod_EsqueciMinhaSenha from '../Pages/Cod_EsqueciMinhaSenha';
import Red_EsqueciMinhaSenha from '../Pages/Red_EsqueciMinhaSenha';
import EsqueciMinhaSenhaSimple from '../Pages/EsqueciMinhaSenhaSimple';
import EditarUsuario from '../Pages/EditarUsuario';
import EditarReceita from '../Pages/EditarReceita';
import ReceitasDoUsuario from '../Pages/ReceitasDoUsuario';
import AvaliacoesDoUsuario from '../Pages/AvaliacoesDoUsuario';
import EditarAvaliacao from '../Pages/EditarAvaliacao';
import Historico from '../Pages/Historico';
import PesquisaPorIngrediente from '../Pages/PesquisaPorIngrediente';
import ListagemCategoria from '../Pages/Categorias';
import Explore from '../Pages/Explore';
import PreCadReceita from '../Pages/PreCadastroDeReceita';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faHeart, faMagnifyingGlass, faUser, faPlus, faHistory } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tab navigator principal, a com todas as stacks screens
function MainTabNavigator() {

    const scheme = useColorScheme();

    return (
        <Tab.Navigator screenOptions={{
            activeTintColor: '#FF7152',
            inactiveTintColor: '#505050',
            tabBarShowLabel: false,
            tabBarStyle: {
                marginTop: 100,
                position: 'absolute',
                width: '90%',
                bottom: 20,
                left: 20,
                right: 20,
                elevation: 0,
                borderRadius: 20,
                height: 55,
                borderTopColor: scheme === 'dark' ? '#2f2f2f' : '#fff',
                backgroundColor: scheme === 'dark' ? '#2f2f2f' : '#fff',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: scheme === 'dark' ? 0.40 : 0.20,
                shadowRadius: 10,

                elevation: 15,
            }
        }}>

            <Tab.Screen name="HomeStack" onPress={() => (!save)} component={HomeStack} options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesomeIcon icon={faHome} size={22} color={focused ? '#FF7152' : '#808080'} />
                ),
                headerShown: false,
            }}
            />


            <Tab.Screen name="Adicionar" component={CadastroDeReceitaStack} options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesomeIcon icon={faPlus} size={22} color={focused ? '#FF7152' : '#808080'} />
                ), headerShown: false
            }} />

            <Tab.Screen name='Pesquisar' component={PesquisaStack} options={{
                tabBarIcon: ({ focused }) => (
                    <LinearGradient start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.searchButton}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size={22} color={'#fff'} />
                    </LinearGradient>
                ), headerShown: false, tabBarLabel: ''
            }} />

            <Tab.Screen name="FavoritosStack" component={FavoritosStack} options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesomeIcon icon={faHeart} size={22} color={focused ? '#FF7152' : '#808080'} />
                ), headerShown: false
            }} />

            <Tab.Screen name="PerfilStack" component={PerfilStack} options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesomeIcon icon={faUser} size={22} color={focused ? '#FF7152' : '#808080'} />
                ), headerShown: false
            }} />

        </Tab.Navigator>
    );
};

//Stack screen do login
function LoginStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CadastroDeUsuario" component={CadastroDeUsuario} options={{ headerShown: false }} />
            <Stack.Screen options={{ headerShown: false }} name="EsqueciMinhaSenhaSimple" component={EsqueciMinhaSenhaSimple} />
        </Stack.Navigator>
    );
}

//Stack screen da home
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="ReceitaSingle" component={ReceitaSingle} />
            <Stack.Screen options={{ headerShown: false }} name="ListagemCategoria" component={ListagemCategoria} />
            <Stack.Screen options={{ headerShown: false }} name="Explore" component={Explore} />
        </Stack.Navigator>
    );
}

//Stack screen das receitas
function CadastroDeReceitaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="PreCadReceita" component={PreCadReceita} />
            <Stack.Screen options={{ headerShown: false }} name="CadastroDeReceitaScreen" component={CadastroDeReceitaScreen} />
        </Stack.Navigator>
    );
}

function PesquisaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="PesquisaScreen" component={Pesquisa} />
            <Stack.Screen options={{ headerShown: false }} name="PesquisaPorIngrediente" component={PesquisaPorIngrediente} />
        </Stack.Navigator>
    );
}

function FavoritosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="FavoritosScreen" component={FavoritosScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Historico" component={Historico} />
        </Stack.Navigator>
    );
}

function PerfilStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="PerfilScreen" component={PerfilScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Configuracoes" component={Configuracoes} />
            <Stack.Screen options={{ headerShown: false }} name="EditarUsuario" component={EditarUsuario} />
            <Stack.Screen options={{ headerShown: false }} name="EditarReceita" component={EditarReceita} />
            <Stack.Screen options={{ headerShown: false }} name="ReceitasDoUsuario" component={ReceitasDoUsuario} />
            <Stack.Screen options={{ headerShown: false }} name="AvaliacoesDoUsuario" component={AvaliacoesDoUsuario} />
            <Stack.Screen options={{ headerShown: false }} name="EditarAvaliacao" component={EditarAvaliacao} />
            <Stack.Screen options={{ headerShown: false }} name="EsqueciMinhaSenhaSimple" component={EsqueciMinhaSenhaSimple} />
        </Stack.Navigator>
    );
}

function EsqueciMinhaSenhaStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen options={{ headerShown: false }} name="EsqueciMinhaSenhaSimple" component={EsqueciMinhaSenhaSimple} /> */}
            {/*  <Stack.Screen options={{ headerShown: false }} name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} />
           <Stack.Screen options={{ headerShown: false }} name="Cod_EsqueciMinhaSenha" component={Cod_EsqueciMinhaSenha} />
            <Stack.Screen options={{ headerShown: false }} name="Red_EsqueciMinhaSenha" component={Red_EsqueciMinhaSenha} /> */}
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
                {/* <Stack.Screen name="EsqueciMinhaSenhaStack" component={EsqueciMinhaSenhaStack} /> */}
                <Stack.Screen name="Main" component={MainTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

const styles = StyleSheet.create({

    searchButton: {
        color: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 10,
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