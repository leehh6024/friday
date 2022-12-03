import React from "react";

import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./app/pages/Home/Home.js";
import Header from "./app/pages/Home/Header.js";
import Settings from "./app/pages/Settings/Settings.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Home /> // screen에서 initialRouteName 값으로 사용하기 때문에 필요없어 보인다.
  );
}
