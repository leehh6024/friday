import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import * as Location from "expo-location";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import BottomBar from "../../Home/components/BottomBar.js";

import axios from "axios";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snowflake",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lighting",
};

const BASE_IP = "http://172.16.239.139:8080";

export default function WeatherDetails() {
  const [city, setCity] = useState("Loading...");
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const navigation = useNavigation();

  const appId = useRef("");

  const convertUTCToTime = (weatherData) => {
    const data = weatherData;
    data.map((value) => {
      const convertData = value;
      convertData.dt = new Date(value.dt * 1000);
      return convertData;
    });
    return data;
  };

  const date = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const weatherAPI = async () => {
    console.log("getWeather: appId: ", appId);
    const res = await axios.get(
      `${BASE_IP}/weather/getWeather?appId=${appId.current}`
    );
    const json = await JSON.parse(res.data.weatherInfo);
    const convertData = convertUTCToTime(json.daily);
    setDays(convertData);
    // console.log(json.daily);
    // console.log(typeof json.daily);
    // console.log(res.data.city);
    setCity(res.data.city);
  };

  const setLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      const location = await Location.reverseGeocodeAsync(
        { latitude, longitude },
        { useGoogleMaps: false }
      );
      // setCity(location[0].city);
      console.log("done");
      createWeatherAPI(latitude, longitude, location[0].city);
    }
    weatherAPI();
  };

  const createWeatherAPI = async (latitude, longitude, city) => {
    const res = await axios.post(BASE_IP + "/weather/createWeather", {
      appId: appId.current,
      latitude,
      longitude,
      city,
    });
    console.log("createWeather: ", res.data.status);
  };

  useEffect(() => {
    weatherAPI();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>WEATHER</Text>
        <Ionicons
          name="home"
          style={styles.home}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={styles.body}>
        <ScrollView style={styles.weather}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          ></View>
          {days?.length === 0
            ? null
            : days?.map((day, index) => (
                <View key={index}>
                  <Text style={styles.today}>
                    {`${day.dt.getMonth() + 1}월 ${day.dt.getDate()}일 ${
                      date[day.dt.getDay()]
                    }`}
                  </Text>
                  <View>
                    {/* <View>
                <ActivityIndicator
                  animating={loading}
                  color="#A3C1C6"
                  size="small"
                  style={{ marginTop: 30 }}
                />
              </View> */}
                    <View style={styles.flexbox1}>
                      <Fontisto
                        name={icons[day.weather[0].main]}
                        size="50"
                        color="#999999"
                      />
                      <View>
                        <Text style={styles.city}>{city}</Text>
                        <Text style={styles.temp}>
                          {parseFloat(day.temp.day).toFixed(1)}º
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.feels_like}>{`  체감온도`}</Text>
                        <Text style={{ ...styles.feels_like, marginTop: 10 }}>
                          {`아침: ${day.feels_like.day}º
저녁: ${day.feels_like.night}º`}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.uviBox}>
                          <Text style={styles.uvi}>자외선</Text>
                          <Ionicons
                            name="sunny-sharp"
                            size={24}
                            color="#999999"
                          />
                          <Text style={styles.uvi}>
                            {parseFloat(day.uvi).toFixed(1)}
                          </Text>
                        </View>
                        <View style={styles.humidityBox}>
                          <Text style={styles.uvi}>습도</Text>
                          <Ionicons
                            name="water-sharp"
                            size={24}
                            color="#999999"
                          />
                          <Text style={styles.humidity}>{day.humidity}%</Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={styles.flexbox2}>
                    <Text style={styles.description}>
                      {day.weather[0].description}
                    </Text>
                  </View>
                </View>
              ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: "#e5e5e5",
    marginTop: 40,
    marginRight: 52,
  },
  home: {
    marginTop: 44,
    fontSize: 30,
    fontWeight: "800",
    color: "#e5e5e5",
  },

  flexbox1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  flexbox2: {
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#e2e2e2",
  },
  weather: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 1000,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
    marginHorizontal: 6,
  },
  today: { color: "#999999", fontSize: 20, fontWeight: "600", marginTop: 6 },
  city: { color: "#999999", fontSize: 20, fontWeight: "600", marginTop: -1 },
  temp: { color: "#999999", fontSize: 30, fontWeight: "600", marginTop: 4 },
  feels_like: {
    justifyContent: "center",
    alignItems: "center",
    color: "#999999",
    fontSize: 16,
    fontWeight: "600",
  },
  uvi: { color: "#999999", fontSize: 16, fontWeight: "600" },
  humidity: { color: "#999999", fontSize: 16, fontWeight: "600" },

  uviBox: { justifyContent: "center", alignItems: "center", marginRight: 10 },
  humidityBox: {},

  description: {
    color: "#999999",
    fontSize: 16,
    fontWeight: "600",
  },
});
