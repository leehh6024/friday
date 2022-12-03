import React from "react";

import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Splash from "./app/pages/Splash/Splash.js";
import Home from "./app/pages/Home/Home.js";
import Header from "./app/pages/Home/Header.js";
import Settings from "./app/pages/Settings/Settings.js";
import Guide from "./app/pages/Guide/Guide.js";

import Calendar from "./app/pages/Home/components/Calendar.js";
import CalendarDetails from "./app/pages/Details/Calendar/CalendarDetails.js";
import Weather from "./app/pages/Home/components/Weather.js";
import WeatherDetails from "./app/pages/Details/Weather/WeatherDetails.js";
import Traffic from "./app/pages/Home/components/Traffic.js";
import TrafficDetails from "./app/pages/Details/Traffic/TrafficDetails.js";
import News from "./app/pages/Home/components/News.js";
import NewsDetails from "./app/pages/Details/News/NewsDetails.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Guide" component={Guide} />

        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="CalendarDetails" component={CalendarDetails} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
        <Stack.Screen name="Traffic" component={Traffic} />
        <Stack.Screen name="TrafficDetails" component={TrafficDetails} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
