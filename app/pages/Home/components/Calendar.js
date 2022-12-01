import { StyleSheet, Text, View } from "react-native";

export default function Calendar() {
  return (
    <View style={styles.calendar}>
      <Text style={styles.title}>오늘의 일정</Text>
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
  },
  title: { color: "#A3C1C6", fontSize: 18, fontWeight: "700" },
});
