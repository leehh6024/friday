import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>FRIDAY,</Text>
      <View style={styles.body}>
        <ScrollView style={styles.bodyScroll}>
          <View style={styles.ex}>
            <Text style={styles.exText}>FRIDAY,</Text>
            <Text style={styles.exText}>오늘 날씨 알려줘</Text>
          </View>
          <View style={styles.todolist}>
            <Text style={styles.exText}>FRIDAY,</Text>
            <Text style={styles.exText}>오늘 날씨 알려줘</Text>
          </View>
          <View style={styles.weather}>
            <Text style={styles.exText}>FRIDAY,</Text>
            <Text style={styles.exText}>오늘 날씨 알려줘</Text>
          </View>
          <View style={styles.bus}>
            <Text style={styles.exText}>FRIDAY,</Text>
            <Text style={styles.exText}>오늘 날씨 알려줘</Text>
          </View>
          <View style={styles.news}>
            <Text style={styles.exText}>FRIDAY,</Text>
            <Text style={styles.exText}>오늘 날씨 알려줘</Text>
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
  bodyScroll: {},
  ex: {
    height: 100,
    width: SCREEN_WIDTH,
    backgroundColor: "#eeeeee",
    borderRadius: 25,
  },
  exText: {
    width: SCREEN_WIDTH,
    color: "#999999",
    paddingHorizontal: 30,
    fontWeight: "700",
    fontSize: "26",
  },
  todolist: {
    width: SCREEN_WIDTH,
    backgroundColor: "#eeeeee",
    borderRadius: 25,
  },
  weather: {
    width: SCREEN_WIDTH,
    backgroundColor: "#eeeeee",
    borderRadius: 25,
  },
  bus: {
    width: SCREEN_WIDTH,
    backgroundColor: "#eeeeee",
    borderRadius: 25,
  },
  news: {
    width: SCREEN_WIDTH,
    backgroundColor: "#eeeeee",
    borderRadius: 20,
  },
  footer: {
    flex: 0.26,
    backgroundColor: "#B9CFDF",
    width: SCREEN_WIDTH,
  },
});
