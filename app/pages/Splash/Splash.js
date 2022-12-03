import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Home")}>
        스플래시 화면입니다.
      </Text>
      {/* <Image />
      <TextInput /> */}
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
