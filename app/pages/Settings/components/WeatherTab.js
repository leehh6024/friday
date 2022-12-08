import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherTab() {
  const [weather, setWeather] = useState([
    "오늘 날씨알려줘",
    "오늘 날씨",
    "날씨",
    "오늘 날씨 어때",
  ]);
  return (
    <View>
      <Text style={styles.contentText}>{weather}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  contentText: {
    marginBottom: 6,
    fontSize: 18,
    color: "#666666",
    fontWeight: "700",
  },
});
