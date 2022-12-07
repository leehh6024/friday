import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Calendar() {
  const navigation = useNavigation();
  return (
    <View style={styles.calendar}>
      <Text
        style={styles.title}
        onPress={() => navigation.navigate("CalendarDetails")}
      >
        오늘 일정
      </Text>
      <View style={styles.flexbox}>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate("CalendarDetails")}
        >
          오늘의 일정
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate("CalendarDetails")}
        >
          오늘의 일정
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 120,
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginTop: 6,
    marginHorizontal: 6,
  },
  title: { color: "#A3C1C6", fontSize: 20, fontWeight: "700" },

  flexbox: {
    marginTop: 8,
    alignItems: "left",
    justifyContent: "left",
    width: "100%",
    backgroundColor: "#B9CFDF",
  },
});
