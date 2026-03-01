import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
            <Tabs.Screen name="about" options={{ title: "About" }} />
        </Tabs>
    );
}
/**
 * TabsLayout component defines the tab-based navigation structure for the application.
 * It uses the `Tabs` component from `expo-router` to create a bottom tab navigator.
 * Each `Tabs.Screen` represents a different tab in the application.
 * 
 * @returns {JSX.Element} A tab navigator with Home, Profile, and About screens
 */