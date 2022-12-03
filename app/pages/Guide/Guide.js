import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Guide() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Guide Page</Text>
      <Button title="go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    alignItems: "center",
    justifyContent: "center",
  },
});
