import React from "react";
import { ScrollView } from "react-native";

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
