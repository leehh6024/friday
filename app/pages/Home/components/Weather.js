import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { MaterialCommunityIcons, Fontisto, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAppId, BASE_IP } from "../../../service";

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snowflake",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lighting",
};

export default function Weather() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const navigation = useNavigation();

  const [appId, setAppId] = useState("");

  const weatherAPI = async () => {
    const res = await axios.get(`${BASE_IP}/weather/getWeather?appId=${appId}`);

    const json = await JSON.parse(res.data.weatherInfo);
    const convertData = convertUTCToTime(json.daily);

    setDays(convertData);
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
      createWeatherAPI(latitude, longitude, location[0].city);
    }
    weatherAPI();
  };

  useEffect(() => {
    getAppId(setAppId);
    weatherAPI();
  }, []);

  const reloadWeather = () => {
    setLocation();
  };

  const createWeatherAPI = async (latitude, longitude, city) => {
    const res = await axios.post(`${BASE_IP} + "/weather/createWeather`, {
      appId: appId,
      latitude,
      longitude,
      city,
    });
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Id", value);
    } catch (e) {
      // saving error
    }
  };

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

  return (
    <View>
      <View style={styles.weather}>
        {days.length === 0 ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#555555", fontSize: 16, fontWeight: "800" }}>
              오늘 날씨 알려드릴게요, 잠시만 기다려주세요!
            </Text>
          </View>
        ) : (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={styles.title}
              // onPress={() => AsyncStorage.clear()} // 사용금지
            >
              <MaterialCommunityIcons
                name="weather-partly-cloudy"
                size={22}
                color="#464646"
              />
              {`${days[0]?.dt.getMonth() + 1}월 ${days[0]?.dt.getDate()}일 ${
                date[days[0]?.dt.getDay()]
              }`}{" "}
              날씨
            </Text>
            <Ionicons
              name="reload-circle-outline"
              size={16}
              color="#555555"
              onPress={() => reloadWeather()}
            />
          </View>
        )}

        {days?.length === 0 ? null : (
          <View>
            <View style={styles.container}>
              <View style={styles.flexbox1}>
                <Fontisto
                  name={icons[days[0].weather[0].main]}
                  size="50"
                  color="#555555"
                />
                <View>
                  <Text style={styles.city}>{city}</Text>
                  <Text style={styles.temp}>
                    {parseFloat(days[0].temp.day).toFixed(1)}º
                  </Text>
                </View>
                <View>
                  <Text style={styles.feels_like}>{`  체감온도`}</Text>
                  <Text style={{ ...styles.feels_like, marginTop: 10 }}>
                    {`아침: ${days[0].feels_like.day}º
저녁: ${days[0].feels_like.night}º`}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.uviBox}>
                    <Text style={styles.uvi}>자외선</Text>
                    <Ionicons name="sunny-sharp" size={24} color="#555555" />
                    <Text style={styles.uvi}>
                      {parseFloat(days[0].uvi).toFixed(1)}
                    </Text>
                  </View>
                  <View style={styles.humidityBox}>
                    <Text style={styles.uvi}>습도</Text>
                    <Ionicons name="water-sharp" size={24} color="#555555" />
                    <Text style={styles.humidity}>{days[0].humidity}%</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flexbox2}>
              <Text style={styles.description}>
                {days[0].weather[0].description}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  weather: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 130,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
    marginHorizontal: 6,
  },
  flexbox1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  flexbox2: { flexDirection: "row", paddingHorizontal: 4 },

  title: {
    color: "#A3C1C6",
    fontSize: 20,
    fontWeight: "900",
    alignItems: "center",
  },

  city: { color: "#555555", fontSize: 20, fontWeight: "800", marginTop: -1 },
  temp: { color: "#555555", fontSize: 30, fontWeight: "800", marginTop: 4 },
  feels_like: {
    justifyContent: "center",
    alignItems: "center",
    color: "#555555",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 1,
  },
  uvi: { color: "#555555", fontSize: 16, fontWeight: "800" },
  humidity: { color: "#555555", fontSize: 16, fontWeight: "800" },

  uviBox: { justifyContent: "center", alignItems: "center", marginRight: 10 },
  humidityBox: {},

  description: {
    color: "#555555",
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 6,
  },
});
