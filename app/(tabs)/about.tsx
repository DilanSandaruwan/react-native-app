import { StyleSheet, Text, View } from "react-native";

/**
 * AboutScreen Component
 * 
 * @description
 * Renders the About page of the application. This screen displays general information
 * about the app, including its purpose, key features, and user instructions.
 * 
 * This is a functional component that returns JSX elements wrapped in a View container.
 * It uses two Text components to display the screen title and descriptive content.
 * 
 * @beginnerNote
 * A functional component is a JavaScript function that returns JSX (React elements).
 * The `export default` keyword makes this component available for import in other files.
 * The `View` component is a React Native container (similar to a `div` in web development),
 * and `Text` is used to display text content (similar to `<p>` or `<span>` tags).
 * The `style` prop applies styling defined in the `styles` object using StyleSheet.
 * 
 * @returns {JSX.Element} A View containing the about screen title and description
 * 
 * @example
 * ```
 * import AboutScreen from './about';
 * 
 * // Use in your app navigation
 * <Stack.Screen name="About" component={AboutScreen} />
 * ```
 */
export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Screen</Text>
            <Text style={styles.description}>
                This is the about screen of the app. Here you can find information about the application, its features, and how to use it.
            </Text>
        </View>
    );
}

/**
 * Styles for the About screen component.
 * 
 * This object defines the visual appearance and layout of the About screen using React Native's StyleSheet API.
 * StyleSheet is a React Native utility that optimizes styles for performance by converting style objects into efficient native code.
 * 
 * @property {Object} container - Main container style that fills the screen
 *   - `flex: 1` - Makes the container take up all available space
 *   - `justifyContent: "center"` - Centers content vertically
 *   - `alignItems: "center"` - Centers content horizontally
 *   - `padding: 16` - Adds 16 units of space inside the container on all sides
 * 
 * @property {Object} title - Style for the screen title text
 *   - `fontSize: 24` - Sets text size to 24 units (larger, prominent text)
 *   - `fontWeight: "bold"` - Makes text bold for emphasis
 *   - `marginBottom: 16` - Adds 16 units of space below the title
 * 
 * @property {Object} description - Style for the description or body text
 *   - `fontSize: 16` - Sets text size to 16 units (standard readable size)
 *   - `textAlign: "center"` - Aligns text to the center horizontally
 */
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