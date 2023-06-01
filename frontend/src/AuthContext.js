import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt from "jwt-decode";
import { useNavigation } from "@react-navigation/native";


export async function SalvarJWT(jwtData) {
    const userData = jwt(jwtData);

    await AsyncStorage.setItem("@jwt", jwtData);
    await AsyncStorage.setItem("@userData", JSON.stringify(userData));
}

export async function HeaderRequisicao() {
    const usuarioLogado = await ChecarLoginUsuario();
    const navigation = useNavigation();

    if (usuarioLogado == false) {
        navigation.navigate('Login')
    }

    const token = await AsyncStorage.getItem("@jwt");
    return new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
    });
}

export async function ChecarLoginUsuario() {

    const token = await AsyncStorage.getItem("@jwt");
    if (!token) {
        return false;
    }

    const userData = JSON.parse(await AsyncStorage.getItem("@userData"));
    const actualDate = Date.parse(new Date()) / 1000;

    if (actualDate > userData.exp) {
        //usuario expirado
        await AsyncStorage.remove("@jwt");
        return false;
    }

    return true;
}