import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Button } from "../../components/Button";
import { Card, CardProps } from "../../components/Card";
import { HeaderHome } from "../../components/HeaderHome";
import Icon from "react-native-vector-icons/Ionicons";
import {
    Container,
    ContainerAlert,
    EmptyData,
    Footer,
    List,
    ListCount,
    ListHeader,
    SubEmptyData,
    Title,
} from "./styles";
import { Colors } from "../../styles";

export function Produtos() {
    const [data, setData] = useState<CardProps[]>([]);

    const { getItem, setItem, removeItem } = useAsyncStorage("@join:products");

    async function handleFetchData() {
        const response = await getItem();
        const data = response ? JSON.parse(response) : [];
        setData(data);
    }

    async function handleRemove(id: string) {
        const response = await getItem();
        const previousData = response ? JSON.parse(response) : [];

        const data = previousData.filter((item: CardProps) => item.id !== id);
        setItem(JSON.stringify(data));
        setData(data);
    }

    async function handleRemoveAll() {
        await removeItem();
        setData([]);
    }

    useFocusEffect(
        useCallback(() => {
            handleFetchData();
        }, [])
    );

    return (
        <Container>
            <HeaderHome add={true} produtos={true} />

            <ListHeader>
                <Title>Produtos</Title>
                <ListCount>{`${data.length} ao total`}</ListCount>
            </ListHeader>

            {data.length == 0 ? (
                <ContainerAlert>
                    <Icon
                        name={"alert-circle"}
                        size={40}
                        color={Colors.ALERT}
                    />
                    <EmptyData>Nenhum produto cadastrado.</EmptyData>
                    <SubEmptyData>Cadastre um novo.</SubEmptyData>
                </ContainerAlert>
            ) : (
                <>
                    <List
                        data={data}
                        keyExtractor={(item: any) => item.id}
                        contentContainerStyle={{
                            padding: 24,
                            paddingBottom: 150,
                        }}
                        renderItem={({ item }: any) => (
                            <Card
                                products={true}
                                data={item}
                                onPress={() => handleRemove(item.id)}
                            />
                        )}
                    />

                    <Footer>
                        <Button
                            onPress={() => {
                                handleRemoveAll();
                            }}
                            title="Limpar lista"
                        />
                    </Footer>
                </>
            )}
        </Container>
    );
}
