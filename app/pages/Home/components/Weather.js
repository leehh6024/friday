import React, { useState, useEffect, useRef } from "react";
import * as Location from "expo-location";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const API_KEY = "ef3118cc42b4ccfbf7cc900504e6b835";

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

  const weatherAPI = async () => {
    const res = await axios.get(
      "http://172.16.239.139:8080/weather/getWeather?appId=1234"
    );
    console.log(JSON.parse(res.data.res).daily);
    console.log(typeof JSON.parse(res.data.res));
  };
  weatherAPI();
  // const getCoordinate = async () => {
  //   const res = await getWeatherAPI();
  //   console.log(res.data);
  // };

  // useEffect(() => {
  //   // AsyncStorage.clear(); // 사용금지
  //   idTestAPI();
  //   getCoordinate();
  // }, []);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
      const latitude = 37.511336;
      const longitude = 127.086262;
      const location = await Location.reverseGeocodeAsync(
        { latitude, longitude },
        { useGoogleMaps: false }
      );
      setCity(location[0].city);

      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&lang=kr&exclude=alerts&appid=${API_KEY}&units=metric`
      ).catch((error) => {
        console.log(error);
      });
      const json = await response.json();
      setDays(json.daily);
      // console.log(latitude, longitude);
      // console.log(typeof latitude, typeof longitude);
    } else {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      const location = await Location.reverseGeocodeAsync(
        { latitude, longitude },
        { useGoogleMaps: false }
      );
      setCity(location[0].city);

      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&lang=kr&exclude=alerts&appid=${API_KEY}&units=metric`
      ).catch((error) => {
        console.log(error);
      });
      const json = await response.json();
      setDays(json.daily);
      // createWeatherAPI(latitude, longitude);
      // console.log(latitude, longitude);
      // console.log(typeof latitude, typeof longitude);
    }
  };

  const reloadWeather = () => {
    getWeather();
  };

  useEffect(() => {
    getWeather();
  }, []);

  // const getWeatherAPI = async () => {
  //   const res = await axios.get(
  //     "http://172.30.1.72:8080/weather/get-coordinate"
  //   );
  //   console.log(res.data);
  //   return res;
  // };
  // const createWeatherAPI = async (latitude, longitude) => {
  //   const res = await axios.post(
  //     "http://172.30.1.72:8080/weather/createWeather",
  //     {
  //       appId: appId.current,
  //       latitude,
  //       longitude,
  //     }
  //   );
  //   // console.log(res.data);
  // };

  // const testAPI = async () => {
  //   const res = await axios.get("http://172.30.1.72:8080/user/default");
  //   console.log(res.data);
  // };

  // // const [appId, setAppId] = useState("");
  // const appId = useRef("");

  // const idTestAPI = async () => {
  //   const value = await AsyncStorage.getItem("@storage_Id");

  //   console.log("value", value);

  //   if (value == null) {
  //     const id = Date.now().toString();
  //     storeData(id);
  //     appId.current = id;
  //     const response = await axios.post(
  //       "http://172.30.1.72:8080/user/addUser",
  //       {
  //         macId: "E4:5F:01:D6:0F:91",
  //         appId: id,
  //       }
  //     );
  //   } else appId.current = value;
  // };

  // 첫 실행시 Id 값 조회, 없으면 => date 저장하게하고, 있으면 => main으로 value를 props로 전달시켜주
  // 있으면 서버랑 통신할 Id로 사용.

  // const storeData = async (value) => {
  //   try {
  //     await AsyncStorage.setItem("@storage_Id", value);
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  return (
    <View>
      <View style={styles.weather}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={styles.title}
            onPress={() => navigation.navigate("WeatherDetails")}
          >
            오늘 날씨
          </Text>
          <Ionicons
            name="reload-circle-outline"
            size={16}
            color="#999999"
            onPress={() => reloadWeather()}
          />
        </View>

        {days?.length === 0 ? (
          <View>
            <ActivityIndicator
              color="#A3C1C6"
              size="small"
              style={{ marginTop: 30 }}
            />
          </View>
        ) : (
          <View>
            <View style={styles.container}>
              <View style={styles.flexbox1}>
                <Fontisto
                  name={icons[days[0].weather[0].main]}
                  size="50"
                  color="#999999"
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
                    <Ionicons name="sunny-sharp" size={24} color="#999999" />
                    <Text style={styles.uvi}>
                      {parseFloat(days[0].uvi).toFixed(1)}
                    </Text>
                  </View>
                  <View style={styles.humidityBox}>
                    <Text style={styles.uvi}>습도</Text>
                    <Ionicons name="water-sharp" size={24} color="#999999" />
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
  flexbox1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  flexbox2: { flexDirection: "row", paddingHorizontal: 4 },

  weather: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 120,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 6,
    marginHorizontal: 6,
  },
  title: {
    color: "#A3C1C6",
    fontSize: 20,
    fontWeight: "700",
    alignItems: "center",
    paddingHorizontal: 10,
  },

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
