import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("friday/app/assets/images/friday_splash.png")} />
      <Text style={styles.appName}>FRIDAY,</Text>
      <Text onPress={() => navigation.navigate("Home")}>
        AI 스피커의 일련번호를 입력해주세요🤓
      </Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B9dddd",
  },
  appName: {
    fontSize: 44,
    marginTop: -70,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
  },
});
// flexDirection: "row", input 을 담는 영역에 필요한 속성값
