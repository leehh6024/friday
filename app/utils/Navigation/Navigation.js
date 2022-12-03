import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../../pages/Home/Home.js";
import Header from "../../pages/Home/Header.js";
import Settings from "../../pages/Settings/Settings.js";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenA">
        <Stack.Screen name="Header" component={<Header />} />
        <Stack.Screen name="Settings" component={<Settings />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
