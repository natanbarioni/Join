import React, { useEffect, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Toast from "react-native-toast-message";
import uuid from "react-native-uuid";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { HeaderForm } from "../../components/HeaderForm";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { styles } from "./styles";

export function Form({ route }) {
    var { edit } = route.params;
    var { produtos } = route.params;
    const [category, setCategory] = useState(edit ? edit.category : "");
    const [productName, setProductName] = useState(
        edit ? edit.productName : ""
    );
    const [categoryName, setCategoryName] = useState(
        edit ? edit.categoryName : ""
    );
    const [categoriesList, setCategoriesList] = useState([]);
    const { getItem, setItem } = useAsyncStorage(
        produtos ? "@join:products" : "@join:category"
    );

    function Validate() {
        var error = false;
        if (produtos) {
            if (productName == "") {
                Toast.show({
                    type: "error",
                    text1: "Preencha todos os campos.",
                });
                error = true;
            }
            if (category == "") {
                Toast.show({
                    type: "error",
                    text1: "Preencha todos os campos.",
                });
                error = true;
            }
        } else {
            if (categoryName == "") {
                Toast.show({
                    type: "error",
                    text1: "Preencha todos os campos.",
                });
                error = true;
            }
        }
        return !error;
    }

    async function handleNew() {
        try {
            const id = uuid.v4();

            const newDataProducts = {
                id,
                productName,
                category,
            };

            const newDataCategory = {
                id,
                categoryName,
            };

            const response = await getItem();
            const previousData = response ? JSON.parse(response) : [];

            const data = [
                ...previousData,
                produtos ? newDataProducts : newDataCategory,
            ];

            await setItem(JSON.stringify(data));
            Toast.show({
                type: "success",
                text1: "Cadastrado com sucesso!",
            });
        } catch (error) {
            console.log(error);

            Toast.show({
                type: "error",
                text1: "Não foi possível cadastrar.",
            });
        }
    }

    async function fetchCategoriesList() {
        const { getItem } = useAsyncStorage("@join:category");
        const id = uuid.v4();

        const response = await getItem();
        const data = response ? JSON.parse(response) : [];
        setCategoriesList(data);
    }

    async function handleEdit() {
        const response = await getItem();
        const data = JSON.parse(response);
        const editItem = [...data].map((item: any) => {
            if (item.id === edit.id) {
                return produtos
                    ? {
                          ...item,
                          productName: productName,
                          category: category,
                      }
                    : {
                          ...item,
                          categoryName: categoryName,
                      };
            } else {
                return item;
            }
        });
        await setItem(JSON.stringify(editItem));
        Toast.show({
            type: "success",
            text1: "Editado com sucesso!",
        });
    }

    useEffect(() => {
        fetchCategoriesList();
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.content}>
                <View style={{ position: "relative", zIndex: 999 }}>
                    <Toast visibilityTime={1200} />
                </View>
                <ScrollView>
                    <HeaderForm title={produtos ? "Produtos" : "Categorias"} />

                    <View style={styles.form}>
                        {produtos ? (
                            <>
                                <Input
                                    value={productName}
                                    onChangeText={setProductName}
                                    label="Nome do produto"
                                />
                                <Text style={styles.label}>Categoria</Text>
                                <View style={styles.containerPicker}>
                                    <Picker
                                        selectedValue={category}
                                        style={styles.picker}
                                        onValueChange={(itemValue) =>
                                            setCategory(itemValue)
                                        }
                                    >
                                        <Picker.Item
                                            label="Selecione a categoria"
                                            value=""
                                        />
                                        {categoriesList &&
                                            categoriesList.map((item) => (
                                                <Picker.Item
                                                    key={item.id}
                                                    label={item.categoryName}
                                                    value={item.categoryName}
                                                />
                                            ))}
                                    </Picker>
                                </View>
                                {categoriesList.length == 0 && (
                                    <Text style={styles.labelRed}>
                                        Nenhuma categoria cadastrada.
                                    </Text>
                                )}
                            </>
                        ) : (
                            <Input
                                value={categoryName}
                                onChangeText={setCategoryName}
                                label="Nome da categoria"
                            />
                        )}
                    </View>

                    <View style={styles.footer}>
                        <Button
                            title="Salvar"
                            onPress={() => {
                                if (Validate()) {
                                    if (edit) {
                                        handleEdit();
                                    } else {
                                        handleNew();
                                    }
                                }
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}
