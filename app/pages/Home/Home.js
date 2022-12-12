import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Example from "./components/Example.js";
import Calendar from "./components/Calendar.js";
import Weather from "./components/Weather.js";
import Bus from "./components/Bus.js";
import News from "./components/News.js";
import BottomBar from "./components/BottomBar.js";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Ionicons
          name="ios-settings"
          size={32}
          color="#e5e5e5"
          onPress={() => navigation.navigate("Settings")}
        />
        <Text style={styles.appname}>FRIDAY,</Text>
        <Feather
          name="help-circle"
          size={36}
          color="#e5e5e5"
          onPress={() => navigation.navigate("Guide")}
        />
      </View>

      <View style={styles.body}>
        <ScrollView>
          <Example />
          <Calendar />
          <Weather />
          <Bus />
          <News />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    backgroundColor: "#B9CFDF",
    color: "white",
    paddingHorizontal: 10,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    flex: 2.0,
    backgroundColor: "#A3C1C6",
  },
  footer: {
    flex: 0.3,
    backgroundColor: "#B9CFDF",
  },

  appname: {
    fontSize: 44,
    fontWeight: "800",
    color: "#e5e5e5",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
});
