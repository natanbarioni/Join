import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Header, Title } from "./styles";
import { Colors } from "../../styles";

export function HeaderForm(props) {
    const navigation = useNavigation();
    var title = props.title;

    return (
        <Header>
            <Button onPress={() => navigation.goBack()}>
                <MaterialIcons name="chevron-left" size={35} color={Colors.WHITE} />
            </Button>

            <Title>{title}</Title>
        </Header>
    );
}
