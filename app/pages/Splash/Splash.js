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
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Splash() {
  const [id, setId] = useState(true);

  const navigation = useNavigation();

  // 유저가 앱을 키자마자 실행 될 함수 => 1. API에 appId 조회 요청
  // appId 있으면 => setTimeout(); 이때, 앱 화면은 기본 스플래시 창을 제공
  // appId 없으면 => <TextInput /> 에 AI스피커의 mac주소를 입력하고,
  // 서버에 해당 mac주소 전송 및 서버 내의 조회. 조회에 성공하면 Home 화면으로 이동.
  useEffect(() => {
    if (id == true) {
      const goHome = setTimeout(() => {
        navigation.navigate("Home");
      }, 3000);
    }
  });

  {
    /* appId가 있는 유저라면 자동으로 홈화면으로 이동할 수 있게 설계 */
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {`매일 아침을
금요일처럼
느끼고 싶다면,`}
        </Text>
        <Ionicons
          name="help-outline"
          size={30}
          color="#999999"
          onPress={() => navigation.navigate("Guide")}
        />
      </View>
      <View style={styles.body}>
        <Image
          style={styles.image}
          source={require("friday/app/assets/images/friday_splash.png")}
        />
        <Text style={styles.appName}>FRIDAY,</Text>
      </View>
      {id ? (
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
          />
          <Button title="ID가 있으신가요 ?" onPress={() => setId(true)} />
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
    flex: 1,
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    flex: 1.6,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
  },

  title: { fontSize: 32, color: "#999999", fontWeight: "600" },

  image: { height: 380 },
  appName: {
    fontSize: 40,
    color: "#999999",
    fontWeight: "600",
  },

  text: { marginTop: 40, color: "#999999" },
  input: {
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 4,
    fontSize: 14,
  },
});
