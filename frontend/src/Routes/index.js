import { View, StyleSheet, Appearance, useColorScheme, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionSpecs } from '@react-navigation/stack';

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ReceitaSingle from '../Pages/ReceitaSingle';
import Perfil from '../Pages/Perfil';
import CadastroDeUsuario from '../Pages/CadastroDeUsuario';
import CadastroDeReceita from '../Pages/CadastroDeReceita';
import Pesquisa from '../Pages/PesquisaPorReceita';
import Favoritos from '../Pages/Favoritos';
import Configuracoes from '../Pages/Configuracoes';
import EsqueciMinhaSenha from '../Pages/EsqueciMinhaSenha';
import Cod_EsqueciMinhaSenha from '../Pages/Cod_EsqueciMinhaSenha';
import Red_EsqueciMinhaSenha from '../Pages/Red_EsqueciMinhaSenha';
import CadastroDeCategoria from '../Pages/CadCategoria';
import EditarUsuario from '../Pages/EditarUsuario';
import EditarReceita from '../Pages/EditarReceita';
import ReceitasDoUsuario from '../Pages/ReceitasDoUsuario';
import AvaliacoesDoUsuario from '../Pages/AvaliacoesDoUsuario';
import EditarAvaliacao from '../Pages/EditarAvaliacao';
import Historico from '../Pages/Historico';
import PesquisaPorIngrediente from '../Pages/PesquisaPorIngrediente';
import ListagemCategoria from '../Pages/Categorias';
import Explore from '../Pages/Explore';
import FavoritosHistorico from '../Pages/FavoritosHistorico';
import Pesquisas from '../Pages/Pesquisas';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBookmark, faMagnifyingGlass, faUser, faPlus, faHistory } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export function TopTabNavigator() {

    const scheme = useColorScheme();

    return (
        <TopTab.Navigator screenOptions={{
            activeTintColor: '#FF7152',
            inactiveTintColor: '#505050',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: scheme === 'dark' ? '#202020' : '#eeeeee',
                padding: 10,
                borderRadius: 10,
                paddingHorizontal: 35,
                width: 250,
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 19,
                fontsize: 15,
                alignSelf: 'center',
                flexDirection: 'row',
            }
        }}>

            <TopTab.Screen name="Favoritos" component={Favoritos} options={{
                tabBarIcon: ({ focused }) => (
                    <Text style={{ color: focused ? '#FF7152' : '#808080', fontFamily: 'Raleway_700Bold', alignContent: 'stretch' }}>Favoritos</Text>
                ), headerShown: false
            }} />

            <TopTab.Screen name="Historico" component={Historico} options={{
                tabBarIcon: ({ focused }) => (
                    <Text style={{ color: focused ? '#FF7152' : '#808080', fontFamily: 'Raleway_700Bold', alignContent: 'stretch' }}>Histórico</Text>
                ), headerShown: false
            }} />

        </TopTab.Navigator>
    )
}

export function TopTabNavigatorPesquisas() {

    const scheme = useColorScheme();

    return (
        <TopTab.Navigator screenOptions={{
            activeTintColor: '#FF7152',
            inactiveTintColor: '#505050',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: scheme === 'dark' ? '#202020' : '#eeeeee',
                padding: 10,
                borderRadius: 10,
                paddingHorizontal: 35,
                width: 250,
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 19,
                fontsize: 15,
                alignSelf: 'center',
                flexDirection: 'row',
            }
        }}>

            <TopTab.Screen name="Pesquisa" component={Pesquisa} options={{
                tabBarIcon: ({ focused }) => (
                    <Text style={{ color: focused ? '#FF7152' : '#808080', fontFamily: 'Raleway_700Bold', alignContent: 'stretch' }}>Receitas</Text>
                ), headerShown: false
            }} />

            <TopTab.Screen name="PesquisaPorIngrediente" component={PesquisaPorIngrediente} options={{
                tabBarIcon: ({ focused }) => (
                    <Text style={{ color: focused ? '#FF7152' : '#808080', fontFamily: 'Raleway_700Bold', alignContent: 'stretch' }}>Ingredientes</Text>
                ), headerShown: false
            }} />

        </TopTab.Navigator>
    )
}

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
                borderTopColor: '#202020',
                backgroundColor: scheme === 'dark' ? '#202020' : '#fff',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.20,
                shadowRadius: 10,

                elevation: 15,
            }
        }}>

            <Tab.Screen name="Home" onPress={() => (!save)} component={HomeStack} options={{
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

            <Tab.Screen name='Pesquisar' component={Pesquisas} options={{
                tabBarIcon: ({ focused }) => (
                    <LinearGradient start={{ x: -1, y: 1 }}
                        end={{ x: 2, y: 1 }} colors={['#FF7152', '#FFB649']} style={styles.searchButton}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size={22} color={'#fff'} />
                    </LinearGradient>
                ), headerShown: false, tabBarLabel: ''
            }} />

            <Tab.Screen name="Favoritos" component={FavoritosHistorico} options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesomeIcon icon={faBookmark} size={22} color={focused ? '#FF7152' : '#808080'} />
                ), headerShown: false
            }} />

            <Tab.Screen name="Perfil" component={PerfilStack} options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesomeIcon icon={faUser} size={22} color={focused ? '#FF7152' : '#808080'} />
                ), headerShown: false
            }} />

            {/* <Tab.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenhaStack} options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesomeIcon icon={faUser} size={22} color={focused ? '#FF7152' : '#505050'} />
                ), headerShown: false
            }} /> */}

        </Tab.Navigator>
    );
};

//Stack screen do login
function LoginStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="CadastroDeUsuario" component={CadastroDeUsuario} options={{ headerShown: false }} />
            <Stack.Screen name="CadastroDeCategoria" component={CadastroDeCategoria} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}

//Stack screen da home
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
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
            <Stack.Screen options={{ headerShown: false }} name="CadastroDeReceita" component={CadastroDeReceita} />
        </Stack.Navigator>
    );
}

function PesquisaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Settings" component={Pesquisa} />
            <Stack.Screen options={{ headerShown: false }} name="PesquisaPorIngrediente" component={PesquisaPorIngrediente} />
        </Stack.Navigator>
    );
}

function FavoritosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Favoritos" component={Favoritos} />
            <Stack.Screen options={{ headerShown: false }} name="Historico" component={Historico} />
        </Stack.Navigator>
    );
}

function PerfilStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Perfil" component={Perfil} />
            <Stack.Screen options={{ headerShown: false }} name="Configuracoes" component={Configuracoes} />
            <Stack.Screen options={{ headerShown: false }} name="EditarUsuario" component={EditarUsuario} />
            <Stack.Screen options={{ headerShown: false }} name="EditarReceita" component={EditarReceita} />
            <Stack.Screen options={{ headerShown: false }} name="ReceitasDoUsuario" component={ReceitasDoUsuario} />
            <Stack.Screen options={{ headerShown: false }} name="AvaliacoesDoUsuario" component={AvaliacoesDoUsuario} />
            <Stack.Screen options={{ headerShown: false }} name="EditarAvaliacao" component={EditarAvaliacao} />
        </Stack.Navigator>
    );
}

function EsqueciMinhaSenhaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} />
            <Stack.Screen options={{ headerShown: false }} name="Cod_EsqueciMinhaSenha" component={Cod_EsqueciMinhaSenha} />
            <Stack.Screen options={{ headerShown: false }} name="Red_EsqueciMinhaSenha" component={Red_EsqueciMinhaSenha} />
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
                <Stack.Screen name="EsqueciMinhaSenhaStack" component={EsqueciMinhaSenhaStack} />
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