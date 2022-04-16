import styled from "styled-components/native";
import { Colors } from "../../styles";

export const Container = styled.TouchableOpacity`
    height: 56px;
    width: 100%;
    background-color: ${Colors.BUTTON};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    color: ${Colors.TEXT};
    font-size: 15px;
`;
