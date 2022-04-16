import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Routes from "./src/router/Routes";

export default function App() {
	//AsyncStorage.clear()
	return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
	);
}
