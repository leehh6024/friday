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
    if (appId === "") {
      return;
    }
    const res = await axios.get(`${BASE_IP}/bus/busArrival?appId=${appId}`);
    const json = res.data;
    setBusArrivalTime(json.arrivalInfo[0].predictTime1);
    setBusStationName(json.stationName);
    setBusLineNumber(json.lineNumber);
  };

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
      <View style={{ ...styles.bus, marginRight: 8, width: "49%" }}>
        <View style={styles.day}>
          <View style={styles.header}>
            <Text
              style={styles.title}
              onPress={() => navigation.navigate("BusDetails")}
            >
              자주타는 버스
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
      <View style={{ ...styles.bus, width: "49%" }}>
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
    height: 120,
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
    fontWeight: "800",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  station: { color: "#555555", fontSize: 17, fontWeight: "800", marginTop: 2 },
  info: { color: "#555555", fontSize: 17, fontWeight: "800", marginTop: 1 },
});
