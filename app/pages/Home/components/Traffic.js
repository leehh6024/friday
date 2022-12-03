import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Traffic() {
  const navigation = useNavigation();
  return (
    <View style={styles.traffic}>
      <Text
        style={styles.title}
        onPress={() => navigation.navigate("TrafficDetails")}
      >
        버스 정보
      </Text>
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
