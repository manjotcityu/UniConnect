import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Chat } from "../screens/Chat";
import { Discussion } from "../screens/Discussion";



const Stack = createStackNavigator();

const ChatNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Discussion" component={Discussion} />
    </Stack.Navigator>
);

export default ChatNavigator;