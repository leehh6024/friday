import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function BottomBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Ionicons
          name="home"
          size={32}
          color="#e5e5e5"
          onPress={() => navigation.reset({ routes: [{ name: "Home" }] })}
        />
        <Text
          style={{ color: "#555555", fontWeight: "600", marginTop: 4 }}
          onPress={() => navigation.reset({ routes: [{ name: "Home" }] })}
        >
          홈
        </Text>
      </View>
      <View style={styles.box}>
        <Ionicons
          name="partly-sunny-sharp"
          size={32}
          color="#e5e5e5"
          onPress={() =>
            navigation.reset({ routes: [{ name: "WeatherDetails" }] })
          }
        />
        <Text
          style={{ color: "#555555", fontWeight: "600", marginTop: 4 }}
          onPress={() =>
            navigation.reset({ routes: [{ name: "WeatherDetails" }] })
          }
        >
          날씨
        </Text>
      </View>
      <View style={styles.box}>
        <FontAwesome5
          name="bus"
          size={32}
          color="#e5e5e5"
          onPress={() => navigation.navigate("BusDetails")}
        />
        <Text
          style={{ color: "#555555", fontWeight: "600", marginTop: 4 }}
          onPress={() => navigation.navigate("BusDetails")}
        >
          버스
        </Text>
      </View>
      <View style={styles.box}>
        <Ionicons
          name="settings"
          size={32}
          color="#e5e5e5"
          onPress={() => navigation.navigate("Settings")}
        />
        <Text
          style={{ color: "#555555", fontWeight: "600", marginTop: 4 }}
          onPress={() => navigation.navigate("NewsDetails")}
        >
          환경설정
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 60,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    // backgroundColor: "#eeeeee",
    // borderRadius: 10,
    // width: "20%",
    // height: 70,
  },
});
