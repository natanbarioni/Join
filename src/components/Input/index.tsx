import { TextInputProps } from "react-native";
import { Container, Inputt, Label } from "./styles";

type Props = TextInputProps & {
    label: string;
};

export function Input({ label, ...rest }: Props) {
    return (
        <Container>
            <Label>{label}</Label>

            <Inputt {...rest} />
        </Container>
    );
}
