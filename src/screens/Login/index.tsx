import React, { useState } from "react";
import {
    Container,
    Input,
    BtnAcessar,
    TxtAcessar,
    Label,
    Logo,
} from "./styles";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Colors } from "../../styles";

export default function Login({ navigation }: any) {
    const [user, setUser] = useState("admin");
    const [password, setPassword] = useState("123456");

    const Validate = () => {
        let error = false;

        if (user !== "admin") {
            alert("Usuário incorreto.");
            error = true;
            return;
        }
        if (password !== "123456") {
            alert("Senha incorreta.");
            error = true;
            return;
        }
        return !error;
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <Container>
                    <Logo source={require("../../assets/icon.png")} />
                    <Label>Usuário</Label>
                    <Input
                        placeholder="Usuário"
                        value={user}
                        keyboardType={"email-address"}
                        onChangeText={setUser}
                        autoCapitalize={"none"}
                        placeholderTextColor={Colors.TEXT}
                    />
                    <Label>Senha</Label>
                    <Input
                        placeholder="*******"
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize={"none"}
                        placeholderTextColor={Colors.TEXT}
                        secureTextEntry
                    />
                    <BtnAcessar
                        onPress={() => {
                            if (Validate()) {
                                navigation.navigate("Home");
                            }
                        }}
                        activeOpacity={0.6}
                    >
                        <TxtAcessar>Acessar</TxtAcessar>
                    </BtnAcessar>
                </Container>
        </TouchableWithoutFeedback>
    );
}
