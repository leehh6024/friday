import { StyleSheet, Text, View } from "react-native";

export default function Traffic() {
  return (
    <View style={styles.traffic}>
      <Text style={styles.title}>버스 정보</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  traffic: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 160,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  title: { color: "#A3C1C6", fontSize: 18, fontWeight: "700" },
});
