import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar, Button, Container, SubTitle, Title, User } from "./styles";

export function HeaderHome(props) {
    const navigation: any = useNavigation();
    var add = props.add;
    var produtos = props.produtos;
    var categorias = props.categorias;

    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-back" size={30} color="#FFF" />
            </TouchableOpacity>

            <Avatar source={require("../../assets/icon.png")} />
            {add ? (
                <>
                    <User>
                        <Title></Title>
                    </User>
                    <Button
                        onPress={() =>
                            navigation.navigate("Form", {
                                produtos: produtos,
                                categorias: categorias,
                            })
                        }
                    >
                        <Icon name="add" size={22} color="#FFF" />
                    </Button>
                </>
            ) : (
                <User>
                    <Title>Olá, Join</Title>
                    <SubTitle>Seja bem-vindo(a)!</SubTitle>
                </User>
            )}
        </Container>
    );
}
