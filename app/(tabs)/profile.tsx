import { StyleSheet, View, Text } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <Text style={styles.description}>
                This is the profile screen of the app. Here you can view and edit your personal information, manage your account settings, and see your activity history.
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