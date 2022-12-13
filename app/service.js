import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAppId = async (setter) => {
  const value = await AsyncStorage.getItem("@storage_Id");
  setter(value);
};

// My Home "skylife"
// export const BASE_IP = "http://192.168.0.35:8080";

// 영민 Home
export const BASE_IP = "http://172.30.1.48:8080";
