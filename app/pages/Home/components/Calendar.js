import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Calendar() {
  const navigation = useNavigation();
  return (
    <View style={styles.calendar}>
      <Text
        style={{ ...styles.title, paddingHorizontal: 20 }}
        onPress={() => navigation.navigate("CalendarDetails")}
      >
        오늘 일정
      </Text>
      <ScrollView style={styles.flexbox}>
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
        <Text
          style={styles.title}
          onPress={() => navigation.navigate("CalendarDetails")}
        >
          오늘의 일정
        </Text>
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
    backgroundColor: "#e0e0e0",
  },
});
