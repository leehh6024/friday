import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tab({ activeTab, setActiveTab }) {
  return (
    <View>
      <Text
        style={styles.categoryText}
        isActive={activeTab === "C"}
        onPress={() => setActiveTab("C")}
      >
        일정
      </Text>
      <Text
        style={styles.categoryText}
        isActive={activeTab === "W"}
        onPress={() => setActiveTab("W")}
      >
        날씨
      </Text>
      <Text
        style={styles.categoryText}
        isActive={activeTab === "B"}
        onPress={() => setActiveTab("B")}
      >
        버스
      </Text>
      <Text
        style={styles.categoryText}
        isActive={activeTab === "N"}
        onPress={() => setActiveTab("N")}
      >
        뉴스
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryText: {
    marginBottom: 30,
    fontSize: 18,
    color: "#666666",
    fontWeight: "700",
  },
});
