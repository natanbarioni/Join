import styled from "styled-components/native";
import { Colors } from "../../styles";

export const Container = styled.View`
    height: 80px;
    width: 100%;
    background-color: ${Colors.WHITE};
    flex-direction: row;
    align-items: center;
    border-color: ${Colors.BORDER};
    border-width: 1px;
    padding-left: 22px;
    margin-bottom: 8px;
    border-radius: 4px;
`;

export const Content = styled.View`
    flex: 1;
    padding: 22px;
`;

export const Title = styled.Text`
    font-size: 15px;
    line-height: 18;
    color: ${Colors.TEXT};
    font-weight: bold;
`;

export const Category = styled.Text`
    color: ${Colors.TEXT};
    font-size: 13px;
`;

export const Button = styled.TouchableOpacity`
    height: 80px;
    width: 56px;
    align-items: center;
    justify-content: center;
    border-left-width: 1px;
    border-left-color: ${Colors.BORDER};
`;
