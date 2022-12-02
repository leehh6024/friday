import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { Image } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      {/* <Image source={require("~/assets/images/briefingBtn.png")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  briefingBtn: {
    backgroundColor: "white",
    borderRadius: "100",
    alignItems: "center",
    justifyContent: "center",
  },
});
