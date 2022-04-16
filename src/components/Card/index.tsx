import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { Button, Category, Container, Content, Title } from "./styles";

export type CardProps = {
    id: string;
    productName: string;
    category: string;
    categoryName: string;
};

type Props = {
    data: CardProps;
    onPress: () => void;
    products: boolean;
};

export function Card({ data, onPress, products }: Props) {
    const navigation: any = useNavigation();
    return (
        <Container>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Form", {
                        edit: data,
						produtos: products
                    })
                }
            >
                <MaterialIcons name="edit" size={22} color={Colors.EDIT} />
            </TouchableOpacity>

            <Content>
                <View>
                    {products ? (
                        <>
                            <Title>{data.productName}</Title>
                            <Category>{data.category}</Category>
                        </>
                    ) : (
                        <Title>{data.categoryName}</Title>
                    )}
                </View>
            </Content>

            <Button onPress={onPress}>
                <MaterialIcons name="delete" size={22} color={Colors.DELETE} />
            </Button>
        </Container>
    );
}
