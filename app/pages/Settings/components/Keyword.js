import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Keyword() {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Text style={styles.buttontext}>키워드 설정</Text>
      </TouchableOpacity>
      <Modal
        offset={offset}
        open={open}
        modalDidOpen={() => console.log("modal did open")}
        modalDidClose={() => {
          console.log("modal did close");
          setOpen(false);
        }}
        style={{ alignItems: "center" }}
      >
        <View>
          <Text style={{ fontSize: 20 }}>키워드를 선택해주세요.</Text>
          <Text style={{ fontSize: 20 }}>날씨 일정 버스 뉴스</Text>
          <TouchableOpacity
            style={{ margin: 3 }}
            onPress={() => setOpen(false)}
          >
            <Text style={styles.text}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 3,
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  buttontext: {
    position: "relative",
    left: 170,
    bottom: 350,
    fontSize: 20,
  },
  text: {
    position: "relative",
    fontSize: 15,
    fontWeight: "700",
    left: "40%",
  },
});
