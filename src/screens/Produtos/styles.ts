import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Colors } from "../../styles";

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.BACKGROUND_WHITE};
    align-items: center;
`;

export const ListHeader = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    padding-horizontal: 24px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.TEXT};
`;

export const ListCount = styled.Text`
    font-size: 13px;
    color: ${Colors.TEXT};
`;

export const List = styled.FlatList`
    flex: 1;
    width: 100%;
`;

export const Footer = styled.View`
    width: 100%;
    padding: 24px;
    margin-bottom: ${getBottomSpace()};
`;

export const ContainerAlert = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const EmptyData = styled.Text`
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
    color: ${Colors.TEXT};
`;

export const SubEmptyData = styled.Text`
    font-size: 18px;
    color: ${Colors.TEXT};
`;
