import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BusTab() {
  const [bus, setBus] = useState([
    "버스 정보",
    "버스 도착",
    "버스",
    "버스 언제와",
    "버스 어디있어",
  ]);
  return (
    <View>
      {bus.map((buses, index) => {
        return <Text style={styles.contentText}>{buses}</Text>;
      })}
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
