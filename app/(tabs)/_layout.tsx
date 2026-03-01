import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

/**
 * TabsLayout Component - Navigation Blueprint for the Application
 * 
 * @description
 * This file defines the bottom tab navigation structure for your app. It's like the skeleton
 * that organizes your app into multiple screens (Home, Profile, About) accessible via tabs
 * at the bottom of the screen.
 * 
 * @imports
 * - `Tabs` from "expo-router": Provides the tab navigation container
 * - `Ionicons` from "@expo/vector-icons": Provides icon graphics for tabs
 * - `React`: Core React library for building components
 * 
 * @screenOptions
 * These are global styling rules that apply to all tabs:
 * - `backgroundColor`: Sets the header's background color to a dark blue (#213d5c)
 * - `headerTintColor`: Sets the header text/icon color to white
 * - `tabBarActiveTintColor`: Color of the active tab (blue #007AFF) - the tab user is currently viewing
 * - `tabBarInactiveTintColor`: Color of inactive tabs (gray #999) - tabs user is not viewing
 * - `tabBarStyle`: Styling object for the tab bar at the bottom including:
 *   - `backgroundColor`: White background for the tab bar
 *   - `borderTopWidth`: Creates a thin line separator at the top of the tab bar
 *   - `borderTopColor`: Color of that separator line
 *   - `paddingBottom`: Space inside the tab bar at the bottom
 *   - `height`: Sets the tab bar height to 60 units
 *   - `shadowColor/shadowOffset/shadowOpacity`: Creates a shadow effect (iOS)
 *   - `elevation`: Creates a shadow effect (Android)
 * 
 * @tabBarIcon
 * This function automatically assigns icons to each tab based on the screen name:
 * - "index" screen → home icon (house symbol)
 * - "profile" screen → person icon (user symbol)
 * - "about" screen → information-circle icon (info symbol)
 * 
 * The `color` and `size` parameters are automatically handled by the navigation system.
 * 
 * @returns {JSX.Element} A tab navigation structure with Home, Profile, and About screens
 * 
 * @example
 * Users will see a bottom tab bar with three options:
 * 
 * [Home Icon]    [Profile Icon]    [About Icon]
 *    Home           Profile            About
 * 
 * Tapping any tab switches to that screen while keeping the tab bar visible.
 */
export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                // Header styling - the bar at the TOP of the screen
                headerStyle: { backgroundColor: "#213d5c" },
                headerTintColor: "#fff",
                
                // Tab bar styling - the bar at the BOTTOM of the screen
                tabBarActiveTintColor: "#007AFF",      // Blue color for active/selected tab
                tabBarInactiveTintColor: "#999",       // Gray color for inactive tabs
                tabBarStyle: {
                    backgroundColor: "#fff",           // White background
                    borderTopWidth: 1,                 // Thin line separator
                    borderTopColor: "#e0e0e0",         // Light gray separator color
                    paddingBottom: 8,                  // Space inside bottom
                    height: 60,                        // Total height of tab bar
                    // Shadow effects (makes tab bar appear elevated)
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 12,
                    elevation: 5,                      // Android shadow
                },
                
                // Icon assignment function
                // This runs for each tab and determines which icon to display
                tabBarIcon: ({ color, size }) => {
                    let iconName: any;  // Variable to hold the icon name
                    
                    // Check which screen/tab is being rendered and assign appropriate icon
                    if (route.name === "index") {
                        iconName = "home";                   // Home screen gets home icon
                    } else if (route.name === "profile") {
                        iconName = "person";                 // Profile screen gets person icon
                    } else if (route.name === "about") {
                        iconName = "information-circle";     // About screen gets info icon
                    }
                    
                    // Return the icon component with the given color and size
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            {/* Home Tab Screen */}
            {/* 
             * name="index" → Links to the index.tsx file in this folder
             * title="Home" → Text displayed in the header and below the icon
             */}
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            
            {/* Profile Tab Screen */}
            {/* 
             * name="profile" → Links to the profile.tsx file in this folder
             * title="Profile" → Text displayed in the header and below the icon
             */}
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
            
            {/* About Tab Screen */}
            {/* 
             * name="about" → Links to the about.tsx file in this folder
             * title="About" → Text displayed in the header and below the icon
             */}
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