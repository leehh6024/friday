import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { getAppId } from "../../../service";
import { BASE_IP } from "../../../service";

export default function Bus() {
  const [appId, setAppId] = useState("");
  const navigation = useNavigation();

  const [busStationName, setBusStationName] = useState([]);
  const [busLineNumber, setBusLineNumber] = useState("");
  const [busArrivalTime, setBusArrivalTime] = useState("");

  const getBusArrivalAPI = async () => {
    console.log("getBusArrivalAPI start");
    const res = await axios.get(`${BASE_IP}/bus/busArrival?appId=${appId}`);
    const json = res.data;
    // console.log("=======================");
    // console.log("appId:", appId);
    // console.log(res.data);
    // console.log(typeof res.data);
    // console.log(res.data.arrivalInfo[0].predictTime1);
    // console.log(json.stationName);
    // console.log(json.lineNumber);
    // console.log("=======================");
    setBusArrivalTime(json.arrivalInfo[0].predictTime1);
    setBusStationName(json.stationName);
    setBusLineNumber(json.lineNumber);

    console.log("BUS json data", json);
    console.log("getBusArrivalAPI end");
  };
  console.log("time", busArrivalTime);

  useEffect(() => {
    getAppId(setAppId);
  }, []);

  useEffect(() => {
    getBusArrivalAPI();
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
            <Text style={styles.station}>{busStationName}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.info}>{busLineNumber}</Text>
            <Text style={styles.info}>{busArrivalTime}분 후</Text>
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
            <Text style={styles.station}>{busStationName}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.info}>{busLineNumber}</Text>
            <Text style={styles.info}>{busArrivalTime}분 후</Text>
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
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
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
  info: { color: "#999999", fontSize: 17, fontWeight: "500", marginTop: 1 },
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
