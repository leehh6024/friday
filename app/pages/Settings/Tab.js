import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tab({ activeTab, setActiveTab }) {
  return (
    <View>
      <View style={styles(activeTab).categoryText11}>
        <Text
          style={styles(activeTab).categoryText1}
          isActive={activeTab === "C"}
          onPress={() => setActiveTab("C")}
        >
          일정
        </Text>
      </View>
      <Text
        style={styles(activeTab).categoryText2}
        isActive={activeTab === "W"}
        onPress={() => setActiveTab("W")}
      >
        날씨
      </Text>
      <Text
        style={styles(activeTab).categoryText3}
        isActive={activeTab === "B"}
        onPress={() => setActiveTab("B")}
      >
        버스
      </Text>
      <Text
        style={styles(activeTab).categoryText4}
        isActive={activeTab === "N"}
        onPress={() => setActiveTab("N")}
      >
        뉴스
      </Text>
    </View>
  );
}

const styles = (activeTab) =>
  StyleSheet.create({
    categoryText1: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 30,
      fontSize: 18,
      color: "#666666",
      fontWeight: "700",
    },
    categoryText11: {
      justifyContent: "center",
      alignItems: "center",
      borderWidth: activeTab === "C" ? 1 : null,
      backgroundColor: activeTab === "C" ? "blue" : "red",
      borderRadius: activeTab === "C" ? "15" : null,
    },
    categoryText2: {
      marginBottom: 30,
      fontSize: 18,
      color: "#666666",
      fontWeight: "700",
      backgroundColor: activeTab === "W" ? "blue" : null,
    },
    categoryText3: {
      marginBottom: 30,
      fontSize: 18,
      color: "#666666",
      fontWeight: "700",
      backgroundColor: activeTab === "B" ? "blue" : null,
    },
    categoryText4: {
      marginBottom: 30,
      fontSize: 18,
      color: "#666666",
      fontWeight: "700",
      backgroundColor: activeTab === "N" ? "blue" : null,
    },
  });
