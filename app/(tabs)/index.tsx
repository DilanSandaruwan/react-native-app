import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Text style={styles.description}>
                This is the home screen of the app. Here you can find an overview of the app's features, recent activity, and quick access to important sections.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
    },
});