import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";

import BottomBar from "../../Home/components/BottomBar.js";
import axios from "axios";
import { BASE_IP, getAppId } from "../../../service.js";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function BusDetails() {
  const navigation = useNavigation();
  const [appId, setAppId] = useState("");
  const [inputBus, setInputBus] = useState("");
  const [numOfBus, setNumOfBus] = useState([]);
  const [busStations, setBusStations] = useState([]);

  useEffect(() => {
    getAppId(setAppId);
    // console.log("numOfBus", numOfBus);
  }, []);

  const [lineNumber, setLineNumber] = useState("");
  const [stationName, setStationName] = useState("");
  const [stationId, setStationId] = useState("");
  const [routeId, setRouteId] = useState("");
  const [staOrder, setStaOrder] = useState("");

  const getBusListAPI = async () => {
    const res = await axios.get(
      `${BASE_IP}/bus/busList?lineNumber=${inputBus}`
    );
    console.log(res.data);
    // res.data.forEach((value) => console.log(value));
    const busNum = res.data[0].routeName;
    const busStation = res.data[0].routeId;
    setNumOfBus(res.data);
    setRouteId(busStation.toString());
    setLineNumber(inputBus.toString());
  };

  const getStationListAPI = async (routeId) => {
    const res = await axios.get(
      `${BASE_IP}/bus/busStation?routeId=${routeId}`
      // `http://172.16.239.139:8080/bus/busStation?routeId=${"200000085"}`
    );
    setBusStations(res.data);
    console.log(res.data);
  };

  const createBusInfo = async (stationName, stationId, staOrder) => {
    const res = await axios.post(`${BASE_IP}/bus/updateBus`, {
      appId,
      lineNumber: lineNumber.toString(),
      stationName: stationName.toString(),
      stationId: stationId.toString(),
      routeId: routeId.toString(),
      staOrder: staOrder.toString(),
    });
  };

  const getBusData = () => {
    getBusListAPI();
    getStationListAPI();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BUS</Text>
        <Ionicons
          name="home"
          style={styles.home}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.busContainer}>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.inputBox}
              onChangeText={(text) => setInputBus(text)}
              placeholder="버스 번호를 검색해주세요."
            />
            <FontAwesome5
              name="search"
              size={28}
              color="#555555"
              onPress={() => getBusData()}
            />
          </View>
        </View>
        <View>
          {numOfBus.map((value, index) => {
            return (
              <View key={index} style={styles.busNumList}>
                <Text
                  style={styles.busNumItem}
                  onPress={() => getStationListAPI(value.routeId)}
                >
                  <FontAwesome5 name="bus" size={20} color="black" />
                  {value.routeName}
                </Text>
                <Text
                  style={styles.busNumItem}
                  onPress={() => getStationListAPI(value.routeId)}
                >
                  {value.regionName}
                </Text>
                <Text
                  style={styles.busNumItem}
                  onPress={() => getStationListAPI(value.routeId)}
                >
                  {value.routeTypeName}
                </Text>
              </View>
            );
          })}
          <ScrollView style={{ marginTop: 10, marginBottom: 160 }}>
            <View style={styles.busStationContainer}>
              {busStations.map((busStation, index) => {
                return (
                  <View key={index} style={styles.busStationList}>
                    <View>
                      <Text
                        style={styles.busStationItem}
                        onPress={() =>
                          createBusInfo(
                            busStation.stationName,
                            busStation.stationId,
                            busStation.stationSeq
                          )
                        }
                      >
                        {busStation.stationName}
                      </Text>
                    </View>
                    <Feather
                      style={{
                        position: "absolute",
                        left: -10,
                        backgroundColor: "#eeeeee",
                        color: "teal",
                      }}
                      name="arrow-down-circle"
                      size={18}
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
      {/* <View style={styles.busNum}>
          <Text>
            {numOfBus.map((stationList, index) => (
              <View key={index} style={styles.inputBusNum}>
                {stationList.}
              </View>
            ) )}
          </Text>
        </View> */}
      <View style={styles.footer}>
        <BottomBar />
      </View>
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
    fontSize: 44,
    fontWeight: "800",
    color: "#e5e5e5",
    marginTop: 40,
    marginRight: 106,
  },
  home: {
    marginTop: 44,
    fontSize: 30,
    fontWeight: "800",
    color: "#e5e5e5",
  },

  busContainer: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 70,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 6,
    marginTop: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    paddingVertical: 10,
  },
  inputBox: {
    width: 290,
    height: 30,
    backgroundColor: "#e2e2e2",
    marginRight: 10,
    fontSize: 24,
    fontWeight: "600",
  },
  busNumList: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 70,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 6,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  busNumItem: {
    fontSize: 18,
    fontWeight: "600",
  },
  busStationContainer: {
    paddingHorizontal: 30,
    marginHorizontal: 6,
    backgroundColor: "#eeeeee",
    borderRadius: 10,
  },
  busStationList: {
    position: "relative",
    backgroundColor: "#eeeeee",
    paddingHorizontal: 40,
    paddingVertical: 14,
    marginHorizontal: 6,
    borderLeftWidth: 2,
    borderLeftColor: "teal",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  busStationItem: { fontSize: 18, fontWeight: "600" },
});
