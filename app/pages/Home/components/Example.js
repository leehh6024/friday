import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
export default function Example() {
  return (
    <View style={styles.ex}>
      <Text style={styles.exText}>"FRIDAY, 오늘 날씨 알려줘"</Text>
      <Text
        style={{
          ...styles.exText,
          fontSize: 22,
          fontWeight: "400",
          flexDirection: "row",
        }}
      >
        와 같이 말씀해보세요.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
