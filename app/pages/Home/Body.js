import React from "react";
import { ScrollView } from "react-native";
import Example from "./components/Example.js";
import Calendar from "./components/Calendar.js";
import Weather from "./components/Weather.js";
import Bus from "./components/Bus.js";
import News from "./components/News.js";

export default function Body() {
  return (
    <ScrollView>
      <Example />
      <Calendar />
      <Weather />
      <Bus />
      <News />
    </ScrollView>
  );
}
