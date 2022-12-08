import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tab({ activeTab, setActiveTab }) {
  return (
    <View>
      <Text
        style={styles.category}
        isActive={activeTab === "C"}
        onPress={() => setActiveTab("C")}
      >
        일정
      </Text>
      <Text
        style={styles.category}
        isActive={activeTab === "W"}
        onPress={() => setActiveTab("W")}
      >
        날씨
      </Text>
      <Text
        style={styles.category}
        isActive={activeTab === "B"}
        onPress={() => setActiveTab("B")}
      >
        버스
      </Text>
      <Text
        style={styles.category}
        isActive={activeTab === "N"}
        onPress={() => setActiveTab("N")}
      >
        뉴스
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    width: "24%",
    borderRightWidth: 2,
    borderColor: "#999999",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
