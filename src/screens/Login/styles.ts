import styled from "styled-components/native";
import { Colors } from "../../styles";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.PRIMARY};
`;

export const Logo = styled.Image`
    width: 200;
    height: 200;
    margin-bottom: 30px;
`;

export const Input = styled.TextInput`
    width: 70%;
    height: 50px;
    padding: 10px;
    padding-left: 15px;
    border-radius: 10px;
    background-color: ${Colors.SECONDARY};
    color: ${Colors.TEXT};
`;

export const Label = styled.Text`
    width: 70%;
    padding: 5px;
    color: ${Colors.WHITE};
    font-size: 18px;
    font-weight: bold;
`;

export const BtnAcessar = styled.TouchableOpacity`
    width: 70%;
    height: 50px;
    background-color: ${Colors.TERTIARY};
    border-radius: 10px;
    justify-content: center;
    margin-top: 10px;
    align-items: center;
`;

export const TxtAcessar = styled.Text`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 17px;
`;

