import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

import axios from "axios";
export default function BottomBar() {
  const navigation = useNavigation();

  //   const testAPI = async () => {
  //     const res = await fetch("http://172.16.239.139:8080/user/api-test").catch(
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //     const json = await res.json();
  //     console.log(json);
  //     console.log(typeof json.body);
  //     console.log(Object.keys(json));
  //   };

  //   testAPI();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Ionicons
          name="home"
          size={32}
          color="#e5e5e5"
          onPress={() => navigation.navigate("Home")}
        />
        <Text
          style={{ color: "#555555", fontWeight: "600", marginTop: 4 }}
          onPress={() => navigation.navigate("Home")}
        >
          홈
        </Text>
      </View>
      <View style={styles.box}>
        <FontAwesome
          name="calendar-check-o"
          size={32}
          color="#e5e5e5"
          onPress={() => navigation.navigate("CalendarDetails")}
        />
        <Text
          style={{ color: "#555555", fontWeight: "600", marginTop: 4 }}
          onPress={() => navigation.navigate("CalendarDetails")}
        >
          캘린더
        </Text>
      </View>
      <View style={styles.box}>
        <Ionicons
          name="partly-sunny-sharp"
          size={32}
          color="#e5e5e5"
          onPress={() => navigation.navigate("WeatherDetails")}
        />
        <Text
          style={{ color: "#555555", fontWeight: "600", marginTop: 4 }}
          onPress={() => navigation.navigate("WeatherDetails")}
        >
          날씨
        </Text>
      </View>
      <View style={styles.box}>
        <FontAwesome5
          name="bus"
          size={32}
          color="#e5e5e5"
          onPress={() => navigation.navigate("TrafficDetails")}
        />
        <Text
          style={{ color: "#555555", fontWeight: "600", marginTop: 4 }}
          onPress={() => navigation.navigate("TrafficDetails")}
        >
          버스
        </Text>
      </View>
      <View style={styles.box}>
        <Entypo
          name="news"
          size={32}
          color="#e5e5e5"
          onPress={() => navigation.navigate("NewsDetails")}
        />
        <Text
          style={{ color: "#555555", fontWeight: "600", marginTop: 4 }}
          onPress={() => navigation.navigate("NewsDetails")}
        >
          뉴스
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
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
