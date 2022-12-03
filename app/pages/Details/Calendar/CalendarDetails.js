import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CalendarDetails() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>CalendarDetails</Text>
      <Text onPress={() => navigation.navigate("Home")}>go to Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
