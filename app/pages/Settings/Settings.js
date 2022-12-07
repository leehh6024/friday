import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
// import Keyword from "./components/Keyword.js";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Settings() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SETTINGS</Text>
        <Ionicons
          name="ios-home-outline"
          style={styles.home}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.flexbox}>
          <Text style={styles.function}>{`키워드 설정`}</Text>
          <AntDesign name="rightcircleo" size={24} color="#A3C1C6" />
          {/* <Keyword /> */}
        </View>
        <View style={{ ...styles.flexbox, marginTop: 6 }}>
          <Text style={styles.function}>{`센서 작동 시간 설정`}</Text>
          <AntDesign name="rightcircleo" size={24} color="#A3C1C6" />
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
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
    marginRight: 70,
  },
  home: {
    marginTop: 44,
    fontSize: 30,
    fontWeight: "800",
    color: "white",
  },
  flexbox: {
    backgroundColor: "#eeeeee",
    borderRadius: 20,
    height: 60,
    paddingHorizontal: 20,
    marginHorizontal: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  function: {
    color: "#A3C1C6",
    fontWeight: "800",
    fontSize: 24,
  },
});
