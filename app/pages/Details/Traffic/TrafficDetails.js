import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function TrafficDetails() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TRAFFIC</Text>
      </View>
      <View style={styles.body}>
        <Text onPress={() => navigation.navigate("Home")}>go to Home</Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 0.3,
    backgroundColor: "#B9CFDF",
    // color: "#A3C1C6",
    color: "white",
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 2.0,
    backgroundColor: "#A3C1C6",
    width: SCREEN_WIDTH,
  },
  footer: {
    flex: 0.3,
    backgroundColor: "#B9CFDF",
    width: SCREEN_WIDTH,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#A3C1C6",
    marginTop: 44,
  },
});
