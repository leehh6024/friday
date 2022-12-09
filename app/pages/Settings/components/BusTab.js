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
        return (
          <View style={styles.contextBox}>
            <Text key={index} style={styles.contentText}>
              {buses}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  contextBox: {
    borderBottomColor: "#e1e1e1",
    borderBottomWidth: 1,
    marginBottom: 4,
  },
  contentText: {
    marginBottom: 6,
    fontSize: 18,
    color: "#666666",
    fontWeight: "700",
  },
});
