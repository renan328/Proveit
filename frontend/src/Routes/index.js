import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ReceitaSingle from '../Pages/ReceitaSingle';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ReceitaSingle"
                component={ReceitaSingle}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}