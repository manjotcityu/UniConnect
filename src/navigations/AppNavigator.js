import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import routes from "./routes";
import { Chat } from "../screens/Chat";
import ChatNavigator from "./ChatNavigator";
import { Home } from "../screens/Home";
import { Profile } from "../components/Profile";
import { ProfileCard } from "../components/ProfileCard";
import { Explore } from "../screens/Explore";
import SwipeCards from "../screens/SwipeCards";
import Dummy from "../screens/Dummy";




const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
            name="Home"
            component={Explore}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="Messages"
            component={ChatNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="message" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;
