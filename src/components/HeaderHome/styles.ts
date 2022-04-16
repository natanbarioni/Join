import styled from 'styled-components/native';
import { Colors } from '../../styles';

export const Container = styled.View`
    width: 100%;
    height: 178px;
    background-color: ${Colors.PRIMARY};
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-horizontal: 24px;
`;

export const Avatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 5px;
`;

export const Title = styled.Text`
	color: ${Colors.WHITE};
    font-size: 20px;
`;

export const User = styled.View`
	flex: 1;
	margin-left: 12px;
`;

export const SubTitle = styled.Text`
	color: ${Colors.WHITE};
    font-size: 13px;
`;

export const Button = styled.TouchableOpacity`
    height: 56px;
    width: 56px;
    border-radius: 4px;
    border-color: ${Colors.BORDER};
    border-width: 1px;
    justify-content: center;
    align-items: center;
`;

