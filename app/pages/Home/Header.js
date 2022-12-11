import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
