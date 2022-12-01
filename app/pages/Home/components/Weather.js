import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
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

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);

    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    ).catch((error) => {
      console.log(error);
    });
    const json = await response.json();
    setDays(json.daily);
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>FRIDAY,</Text>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.ex}>
            <Text style={styles.exText}>FRIDAY,</Text>
            <Text style={{ ...styles.exText, fontWeight: "400" }}>
              오늘 날씨 알려줘
            </Text>
          </View>

          <View style={styles.weather}>
            {days?.length === 0 ? (
              <View>
                <ActivityIndicator
                  color="#aaaaaa"
                  size="large"
                  style={{ marginTop: 30 }}
                />
              </View>
            ) : (
              <View>
                <Text style={styles.title}>WEATHER</Text>
                <View style={styles.day}>
                  <View>
                    <Fontisto
                      name={icons[days[0].weather[0].main]}
                      size="50"
                      color="#aaaaaa"
                    />
                    <Text style={styles.description}>
                      {days[0].weather[0].main}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.city}>{city}</Text>
                    <Text style={styles.temp}>
                      {parseFloat(days[0].temp.day).toFixed(1)}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      <Text style={styles.footer}>hello im footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.24,
    backgroundColor: "#B9CFDF",
    // color: "#A3C1C6",
    color: "white",
    width: SCREEN_WIDTH,
  },
  body: {
    flex: 2.0,
    backgroundColor: "#464646",
    width: SCREEN_WIDTH,
  },
  ex: {
    height: 100,
    width: SCREEN_WIDTH,
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  exText: {
    width: SCREEN_WIDTH,
    color: "#A3C1C6",
    paddingHorizontal: 30,
    fontWeight: "800",
    fontSize: "26",
  },

  weather: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 100,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  day: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    width: "100%",
  },
  title: { color: "#A3C1C6", fontSize: 18, fontWeight: "700" },
  city: { color: "#aaaaaa", marginLeft: 14, fontSize: 20 },
  temp: { color: "#aaaaaa", marginLeft: 14, marginBottom: 20, fontSize: 28 },

  description: {
    color: "#aaaaaa",
    marginTop: -10,
    marginLeft: 10,
  },

  footer: {
    flex: 0.26,
    backgroundColor: "#B9CFDF",
    width: SCREEN_WIDTH,
  },
});
