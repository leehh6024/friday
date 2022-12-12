import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAppId = async (setter) => {
  const value = await AsyncStorage.getItem("@storage_Id");
  setter(value);
};

export const BASE_IP = "http://192.168.0.35:8080";
