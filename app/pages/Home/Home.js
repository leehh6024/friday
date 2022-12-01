import React from "react";
import Body from "./Body.js";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* <Header /> */}
        <Text style={styles.header}>FRIDAY,</Text>
      </View>
      <View style={styles.body}>
        <Body />
      </View>
      <View style={styles.footer}>
        {/* <Footer /> */}
        <Text style={styles.footer}>hello im footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.24,
    backgroundColor: "#B9CFDF",
    // color: "#A3C1C6",
    color: "white",
    width: SCREEN_WIDTH,
  },
  body: {
    flex: 2.0,
    backgroundColor: "#464646",
    width: SCREEN_WIDTH,
  },
  footer: {
    flex: 0.26,
    backgroundColor: "#B9CFDF",
    width: SCREEN_WIDTH,
  },
});
