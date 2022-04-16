import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { Home } from "../screens/Home";
import { Produtos } from "../screens/Produtos";
import { Categorias } from "../screens/Categorias";
import { Form } from "../screens/Form";

export default function Routes() {
    const Stack: any = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Produtos" component={Produtos} />
            <Stack.Screen name="Categorias" component={Categorias} />
            <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
    );
}
