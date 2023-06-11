import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt from "jwt-decode";

export async function SalvarJWT(jwtData) {
    const userData = jwt(jwtData);

    await AsyncStorage.setItem("@jwt", jwtData);
    await AsyncStorage.setItem("@userData", JSON.stringify(userData));
}

export async function HeaderRequisicao(navigation) {
    const usuarioLogado = await ChecarLoginUsuario();

    if (usuarioLogado == false) {
        navigation.navigate('Login');
    }

    const token = await AsyncStorage.getItem("@jwt");
    // console.log(token);
    return new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
    });
}

export async function ChecarLoginUsuario() {

    const token = await AsyncStorage.getItem("@jwt");

    // console.log(token);

    if (!token) {
        return false;
    }

    const userData = JSON.parse(await AsyncStorage.getItem("@userData"));

    // console.log(userData);
    const actualDate = Date.parse(new Date()) / 1000;

    if (actualDate > userData.exp) {
        //usuario expirado
        await AsyncStorage.remove("@jwt");
        return false;
    }

    return true;
}

export async function Logout() {
    await AsyncStorage.removeItem("@jwt");
}

export async function DadosUsuario() {
    return JSON.parse(await AsyncStorage.getItem("@userData"));
}