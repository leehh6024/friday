import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_IP } from "../../service";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Splash() {
  const [appId, setAppId] = useState("");
  const [userId, setUserId] = useState(false);

  const navigation = useNavigation();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Id", value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    const value = await AsyncStorage.getItem("@storage_Id");

    if (value == null) {
    } else {
      setAppId(value);
      const setHome = setTimeout(() => {
        navigation.reset({ routes: [{ name: "Home" }] });
      }, 5000);
    }
    // console.log(value);
  };

  useEffect(() => {
    getData();
  }, []);

  const sendData = async () => {
    const date = Date.now().toString();
    const res = await axios.post(`${BASE_IP}/user/addUser`, {
      macId: null,
      appId: date,
    });

    await AsyncStorage.setItem("@storage_Id", date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {`매일 아침을
금요일처럼
느끼고 싶다면,`}
        </Text>
      </View>
      <View style={styles.body}>
        <Image
          style={styles.image}
          source={require("friday/app/assets/images/friday_splash.png")}
        />
        <Text style={styles.appName}>FRIDAY,</Text>
      </View>
      {appId === "" ? (
        <View style={styles.footer}>
          <Text style={styles.text}>
            비서를 호출하는 중입니다. 잠시만 기다려주세요...
          </Text>
          <Button title="ID가 없으신가요 ?" onPress={() => setId(false)} />
        </View>
      ) : (
        <View style={styles.footer}>
          <Text style={styles.text}>AI 스피커의 일련번호를 입력해주세요🤓</Text>
          <TextInput
            style={styles.input}
            placeholder="- 표시를 포함해서 작성해주세요."
            onSubmitEditing={() => sendData()}
          />
          <Button title="ID가 있으신가요 ?" onPress={() => getData()} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B9dddd",
    width: SCREEN_WIDTH,
  },
  header: {
    flex: 0.8,
    width: SCREEN_WIDTH,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  body: {
    flex: 1.6,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
  },
  title: { fontSize: 36, color: "white", fontWeight: "800" },
  image: { height: 380 },
  appName: {
    marginBottom: 40,
    fontSize: 56,
    color: "white",
    fontWeight: "700",
  },
  text: { marginTop: 40, color: "white", fontWeight: "800", fontSize: 16 },
  input: {
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginTop: 4,
    fontSize: 14,
  },
});
