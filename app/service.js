import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect } from "react";

export const getAppId = async (setter) => {
  const value = await AsyncStorage.getItem("@storage_Id");
  setter(value);
};

export const BASE_IP = "http://192.168.0.35:8080";

// 1988 IP => 172.30.1.47

// console.log("weatherAPI start", appId);
// console.log("weatherAPI end", appId);
