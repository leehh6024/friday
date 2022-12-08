import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Modal,
  Button,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import BottomBar from "../Home/components/BottomBar.js";
import Tab from "./Tab.js";
import CalendarTab from "./components/CalendarTab.js";
import WeatherTab from "./components/WeatherTab.js";
import BusTab from "./components/BusTab.js";
import NewsTab from "./components/NewsTab.js";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Settings() {
  const navigation = useNavigation();
  const [showModalKeyword, setShowModalKeyword] = useState(false);
  const [showModalTime, setShowModalTime] = useState(false);

  const [activeTab, setActiveTab] = useState("C");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SETTINGS</Text>
        <Ionicons
          name="home"
          style={styles.home}
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <View style={styles.body}>
        <View style={styles.flexbox}>
          <Text style={styles.function}>{`키워드 설정`}</Text>
          <AntDesign
            name="rightcircleo"
            size={24}
            color="#A3C1C6"
            onPress={() => {
              setShowModalKeyword(!showModalKeyword);
            }}
          />
        </View>
        <View style={{ ...styles.flexbox, marginTop: 6 }}>
          <Text style={styles.function}>{`센서 작동 시간 설정`}</Text>
          <AntDesign
            name="rightcircleo"
            size={24}
            color="#A3C1C6"
            onPress={() => {
              setShowModalTime(!showModalTime);
            }}
          />
        </View>
        <View>
          {/* 키워드 모달창 컨테이너 */}
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={showModalKeyword}
            onRequestClose={() => {
              console.log("Modal has been closed.");
            }}
          >
            {/* 모달창 안에 들어가는 내용들 */}
            <View style={styles.modalContainer}>
              <View style={styles.keyword}>
                <View style={styles.keywordContainer}>
                  <View style={styles.category}>
                    <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
                  </View>
                  <View style={styles.contents}>
                    <ScrollView style={{ marginTop: 20 }}>
                      {activeTab == "C" ? <CalendarTab /> : null}
                      {activeTab == "W" ? <WeatherTab /> : null}
                      {activeTab == "B" ? <BusTab /> : null}
                      {activeTab == "N" ? <NewsTab /> : null}
                    </ScrollView>
                  </View>
                  <AntDesign
                    style={{
                      ...styles.keywordContainer,
                      marginTop: -46,
                      marginRight: 4,
                      height: 40,
                    }}
                    name="closecircle"
                    size={26}
                    color="#666666"
                    onPress={() => {
                      setShowModalKeyword(!showModalKeyword);
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.timeSet}>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={showModalTime}
            onRequestClose={() => {
              console.log("Modal has been closed.");
            }}
          >
            <View style={styles.modal}>
              <Text style={styles.text}>센서 작동 시간 설정 모달</Text>
              <Button
                title="Click To Close Modal"
                onPress={() => {
                  setShowModalTime(!showModalTime);
                }}
              />
            </View>
          </Modal>
        </View>
      </View>

      <View style={styles.footer}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  keyword: {
    flex: 0.6,
    backgroundColor: "#B9CFDF",
    borderRadius: 10,
    marginTop: 200,
    marginHorizontal: 40,
  },
  keywordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    height: 280,
  },
  category: {
    width: "24%",
    borderRightWidth: 2,
    borderColor: "#999999",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  contents: {
    width: "60%",
    justifyContent: "space-evenly",
    alignItems: "left",
    paddingHorizontal: 10,
  },

  timeSet: {},
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
    // color: "#A3C1C6",
    color: "#e5e5e5",
    marginTop: 40,
    marginRight: 54,
  },
  home: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "800",
    color: "white",
  },
  flexbox: {
    backgroundColor: "#eeeeee",
    borderRadius: 20,
    height: 60,
    paddingHorizontal: 20,
    marginHorizontal: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  function: {
    color: "#A3C1C6",
    fontWeight: "800",
    fontSize: 24,
  },
});
