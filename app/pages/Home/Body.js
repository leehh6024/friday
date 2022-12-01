import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Example from "./components/Example.js";
import Weather from "./components/Weather.js";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Body() {
  return (
    <ScrollView>
      <Example />
      <Weather />
    </ScrollView>
  );
}
