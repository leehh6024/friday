import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect } from "react";

export const getAppId = async (setter) => {
  const value = await AsyncStorage.getItem("@storage_Id");
  setter(value);
};

export const BASE_IP = "http://172.16.239.139:8080";

// const testAPI = async () => {
//   const res = await axios.get("http://172.30.1.72:8080/user/default");
//   console.log(res);
// };
// useEffect(() => {
//   testAPI();
// }, []);

// const BusAPI = axios.create({});
// const NewsAPI = axios.create({});
// const CalendarAPI = axios.create({});
// const WeatherAPI = axios.create({});

// export const appId = AsyncStorage.getItem("@storage_Id");
// const idTestAPI = async () => {
//   const value = await AsyncStorage.getItem("@storage_Id");

//   console.log("value", value);
//   if (value == null) {
//     const id = Date.now().toString();

//     appId.current = id;
//     const response = await axios.post(BASE_IP + "/user/addUser", {
//       macId: "E4:5F:01:D6:0F:91",
//       appId: id,
//     });
//     console.log("idTest : ", response.data.status);
//     storeData(id);
//   } else {
//     console.log("appId is OK");
//     appId.current = value;
//   }
// };
