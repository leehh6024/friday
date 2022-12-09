import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { getAppId } from "../../../service";

const BASE_IP = "http://172.16.239.139:8080";

export default function Bus() {
  const [appId, setAppId] = useState("");
  const navigation = useNavigation();

  const [busStationName, setBusStationName] =
    useState("등록된 정류소가 없습니다.");
  const [busLineNumber, setBusLineNumber] = useState("");
  const [busArrival, setBusArrival] = useState("");

  const getBusStationInfo = async () => {
    const res = await axios.post(`${BASE_IP}/bus/getBusStationInfo`);
  };

  const getBusArrival = async () => {
    const res = await axios.get(`${BASE_IP}/bus/busArrival?appId=${appId}`);
    const json = res.data;
    console.log("BUS json data", json);
  };

  useEffect(() => {
    getAppId(setAppId);
  }, []);

  useEffect(() => {
    getBusArrival();
  }, [appId]);
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 6,
      }}
    >
      <View style={{ ...styles.bus, marginRight: 4, width: "49%" }}>
        <View style={styles.day}>
          <View style={styles.header}>
            <Text
              style={styles.title}
              onPress={() => navigation.navigate("BusDetails")}
            >
              버스
            </Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.station}>복우물마을입구</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.info}>{`302       잠실 행     5분후`}</Text>
            <Text style={styles.info}>{`500-2   잠실 행     33분후`}</Text>
            <Text style={styles.info}>{`303       왕십리 행  15분후`}</Text>
            <Text style={styles.info}>{`G1690  갈매 행     55분후`}</Text>
          </View>
        </View>
      </View>
      <View style={{ ...styles.bus }}>
        <View style={styles.day}>
          <View style={styles.header}>
            <Text
              style={{ ...styles.title, marginTop: 4 }}
              onPress={() => navigation.navigate("BusDetails")}
            ></Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.station}>가천대학교</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.info}>{`302       잠실 행     5분후`}</Text>
            <Text style={styles.info}>{`500-2   잠실 행     33분후`}</Text>
            <Text style={styles.info}>{`303       왕십리 행  15분후`}</Text>
            <Text style={styles.info}>{`G1690  갈매 행     55분후`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bus: {
    width: "50%",
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 160,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  day: {},
  header: {},
  body: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "left",
    marginTop: 4,
  },
  footer: {
    width: "100%",
    justifyContent: "left",
    alignItems: "left",
    marginTop: 6,
  },

  title: {
    color: "#A3C1C6",
    fontSize: 20,
    fontWeight: "700",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  station: { color: "#999999", fontSize: 17, fontWeight: "600", marginTop: 2 },
  info: { color: "#999999", fontSize: 15, fontWeight: "500", marginTop: 1 },
});

// const getBusListAPI = async () => {
//   const res = await fetch(
//     `http://172.16.239.139:8080/bus/busList?lineNumber=${302}`
//   ).catch((error) => {
//     console.log(error);
//   });
//   const json = await res.json();
//   console.log(json);
//   console.log(typeof json.body);
//   console.log(Object.keys(json));
//   console.log(res.data);
// };
