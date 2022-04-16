import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Colors } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F3F5",
        alignItems: "center",
    },
    form: {
        flex: 1,
        padding: 24,
    },
    label: {
        fontSize: 15,
        color: "#888D97",
        marginBottom: 7,
    },
    labelRed: {
        fontSize: 15,
        color: Colors.ALERT,
        marginBottom: 7,
    },
    content: {
        width: "100%",
    },
    containerPicker: {
        height: 56,
        width: "100%",
        borderColor: "#E3E3E3",
        borderWidth: 1,
        paddingLeft: 22,
        borderRadius: 4,
        backgroundColor: "#fff",
    },
    footer: {
        width: "100%",
        padding: 24,
        marginBottom: getBottomSpace() + 24,
    },
    picker: {
        width: '100%',
        height: 56,
    }
});
