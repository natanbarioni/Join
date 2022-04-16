import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { Colors } from "../../styles";

export const Header = styled.View`
    height: 110px;
    width: 100%;
    background-color: ${Colors.PRIMARY};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 24px;
    padding-top: ${getStatusBarHeight() + 24};
    margin-bottom: 24px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${Colors.WHITE};
    font-weight: bold;
    flex: 1;
    text-align: center;
    margin-left: -32px;
`;

export const Button = styled.TouchableOpacity`
    z-index: 100;
`;
