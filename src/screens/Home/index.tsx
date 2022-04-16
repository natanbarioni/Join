import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Button } from "../../components/Button";
import { HeaderHome } from "../../components/HeaderHome";
import {
    Container,
    Footer,
    ListCount,
    ListHeader,
    Title,
} from "./styles";

export function Home({ navigation }) {
    const [productsLength, setProductsLength] = useState([]);
    const [categoriesLength, setCategoriesLength] = useState([]);

    async function handleFetchData() {
        const products = await AsyncStorage.getItem("@join:products");
        const productsData = products ? JSON.parse(products) : [];
        setProductsLength(productsData);

        const categories = await AsyncStorage.getItem("@join:category");
        const categoriesData = categories ? JSON.parse(categories) : [];
        setCategoriesLength(categoriesData);
    }

    useFocusEffect(
        useCallback(() => {
            handleFetchData();
        }, [])
    );

    return (
        <Container>
            <HeaderHome />
            <ListHeader>
                <Title>Produtos</Title>
                <ListCount>{`${productsLength.length} ao total`}</ListCount>
            </ListHeader>

            <Footer>
                <Button
                    onPress={() => navigation.navigate("Produtos")}
                    title="Visualizar"
                />
            </Footer>

            <ListHeader>
                <Title>Categorias</Title>
                <ListCount>{`${categoriesLength.length} ao total`}</ListCount>
            </ListHeader>

            <Footer>
                <Button
                    onPress={() => navigation.navigate("Categorias")}
                    title="Visualizar"
                />
            </Footer>
        </Container>
    );
}
