import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect } from "react";

export const getAppId = async (setter) => {
  const value = await AsyncStorage.getItem("@storage_Id");
  setter(value);
};

export const BASE_IP = "http://172.16.239.139:8080";
