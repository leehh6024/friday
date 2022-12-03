import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Ionicons
        name="settings-outline"
        size={24}
        color="black"
        onPress={() => navigation.navigate("Settings")}
      />
      <Text style={styles.appname}>FRIDAY,</Text>
      <Ionicons
        name="help-outline"
        size={24}
        color="black"
        onPress={() => navigation.navigate("Guide")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appname: {
    fontSize: 36,
    fontWeight: "800",
    color: "#A3C1C6",
  },
});
