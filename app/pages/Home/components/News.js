import { StyleSheet, Text, View } from "react-native";

export default function News() {
  return (
    <View style={styles.news}>
      <Text style={styles.title}>오늘 주요 뉴스</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  news: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 125,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  title: { color: "#A3C1C6", fontSize: 18, fontWeight: "700" },
});
