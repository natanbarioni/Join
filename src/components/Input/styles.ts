import styled from "styled-components/native";
import { Colors } from "../../styles";

export const Container = styled.View`
    width: 100%;
    margin-bottom: 16px;
`;

export const Label = styled.Text`
    font-size: 15px;
    color: ${Colors.LABEL};
    margin-bottom: 7px;
`;

export const Inputt = styled.TextInput`
    height: 56px;
    width: 100%;
    border-color: ${Colors.BORDER};
    border-width: 1px;
    padding-left: 22px;
    border-radius: 4px;
    background-color: ${Colors.WHITE};
`;
