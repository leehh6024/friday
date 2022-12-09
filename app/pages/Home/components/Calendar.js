import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAppId } from "../../../service";
import axios from "axios";
import { BASE_IP } from "../../../service";

export default function Calendar() {
  const [appId, setAppId] = useState("");
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  const updateToDOAPI = async (toDos) => {
    const res = await axios.post(`${BASE_IP}/todo/updateToDo`, {
      appId,
      toDos: JSON.stringify(toDos),
    });
  };

  useEffect(() => {
    getAppId(setAppId);
  });

  const addToDo = () => {
    console.log("addToDos!");
    if (!text) {
      return;
    }

    const newToDos = {
      ...toDos,
      [Date.now()]: {
        text,
        isCompleted: false,
      },
    };
    setToDos(newToDos);
    updateToDOAPI(newToDos);
    console.log(newToDos);
    setText("");
  };

  const deleteToDos = (key) => {
    const newToDos = { ...toDos };
    delete newToDos[key];
    setToDos(newToDos);
    updateToDOAPI(newToDos);
  };
  return (
    <View style={styles.calendar}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{ ...styles.title, paddingHorizontal: 20 }}
          onPress={() => navigation.navigate("CalendarDetails")}
        >
          오늘 일정
        </Text>
        <TextInput
          style={{
            display: "flex",
            flex: 1,
            backgroundColor: "#e2e2e2",
            borderRadius: 15,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
          placeholder="이곳에 할 일을 입력해주세요!"
          value={text}
          onChangeText={setText}
          returnKeyType="done"
          onSubmitEditing={addToDo}
        />
      </View>
      <ScrollView style={styles.flexbox}>
        {Object.keys(toDos).map((key, idx) => (
          <View
            key={idx}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 4,
              borderBottomWidth: 1,
              borderBottomColor: "teal",
            }}
          >
            <Text onPress={() => navigation.navigate("CalendarDetails")}>
              {toDos[key].text}
            </Text>
            <View>
              <TouchableOpacity onPress={() => deleteToDos(key)}>
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  color="teal"
                  style={{ fontSize: 28 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 220,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    marginHorizontal: 6,
  },
  title: {
    color: "#A3C1C6",
    fontSize: 20,
    fontWeight: "700",
  },

  flexbox: {
    marginTop: 8,
    marginVertical: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: "100%",
  },
});
