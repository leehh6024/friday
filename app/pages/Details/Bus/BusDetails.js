import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import BottomBar from "../../Home/components/BottomBar.js";
import axios from "axios";
import { getAppId } from "../../../service.js";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const BASE_IP = "http://172.16.239.139:8080";

export default function BusDetails() {
  const navigation = useNavigation();
  const [appId, setAppId] = useState("");
  const [inputBus, setInputBus] = useState("");
  const [numOfBus, setNumOfBus] = useState([]);
  const [busStations, setBusStations] = useState([]);

  useEffect(() => {
    getAppId(setAppId);
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
        <View style={styles.busNum}>
          <Text
            style={styles.inputBusNum}
          >{`자주이용하시는 버스 번호를 입력해주세요.`}</Text>
          <TextInput
            style={{ backgroundColor: "#e2e2e2" }}
            onChangeText={(text) => setInputBus(text)}
          />
          <Button title="전송" onPress={() => getBusData()} />
        </View>
        <View>
          {/* <Text>{numOfBus.map((value) => ({ routeId }))}</Text> */}
          {numOfBus.map((value, index) => {
            return (
              <View key={index}>
                <Text onPress={() => getStationListAPI(value.routeId)}>
                  버스번호 {value.routeName}
                </Text>
                <Text>데이터상 버스 아이디 {value.routeId}</Text>
              </View>
            );
          })}
          {busStations.map((busStation, index) => {
            return (
              <View key={index}>
                <Text
                  onPress={() =>
                    createBusInfo(
                      busStation.stationName,
                      busStation.stationId,
                      busStation.stationSeq
                    )
                  }
                >
                  {`=====================`}
                  {busStation.stationName}
                  {busStation.stationId}
                  {`=====================`}
                </Text>
              </View>
            );
          })}
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

  busNum: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 70,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 6,
  },
  inputBusNum: {
    width: SCREEN_WIDTH,
    color: "#A3C1C6",
    fontWeight: "800",
    fontSize: 20,
  },
});
