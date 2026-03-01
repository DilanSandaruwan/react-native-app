import { Stack } from "expo-router";
import 'react-native-reanimated';

/**
 * RootLayout component serves as the main entry point for the application's navigation structure.
 * 
 * This component sets up the root-level navigation stack for the entire React Native application.
 * It defines the overall navigation hierarchy and configures how screens are presented.
 * 
 * @returns {JSX.Element} A Stack navigator component containing the (tabs) screen configuration.
 * 
 * @remarks
 * - Uses Expo Router's Stack navigator for managing the navigation stack.
 * - The (tabs) screen is the main screen group that will be displayed.
 * - The header is hidden for this screen (headerShown: false) to provide a cleaner UI without the default header bar.
 * 
 * @example
 * // The RootLayout automatically wraps the entire app, providing navigation context:
 * export default function App() {
 *   return <RootLayout />;
 * }
 */
export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}
/**
 * Root layout component that serves as the main navigation structure for the application.
 * 
 * Uses Stack navigation instead of Tabs at the root level because:
 * - Stack provides a hierarchical navigation model suitable for the top-level app structure
 * - Allows for screen-level navigation and transitions (push/pop behavior)
 * - The (tabs) group is nested within Stack, enabling tab-based navigation as a sub-feature
 * - Provides flexibility to add full-screen modals, authentication flows, or other stack-based screens at the root
 * - Separates concerns: Stack handles app-wide navigation structure, while (tabs) handles local tab navigation
 * 
 * @returns {JSX.Element} The root navigation stack with tabs as a child screen group
 */