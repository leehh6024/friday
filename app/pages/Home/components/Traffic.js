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
        교통 정보
      </Text>
      {/* map함수로 받아온 데이터 조회 */}
      <View style={styles.flexbox}>
        <View style={styles.flexItem1}>
          <Text style={{ ...styles.bus, fontSize: 18 }}>버스 도착 정보</Text>
          <Text style={{ ...styles.bus, fontSize: 17 }}>복우물마을</Text>
          <Text style={styles.bus}>{`302       잠실 행     5분후`}</Text>
          <Text style={styles.bus}>{`500-2   잠실 행     33분후`}</Text>
          <Text style={styles.bus}>{`303       왕십리 행  15분후`}</Text>
          <Text style={styles.bus}>{`G1690  갈매 행     55분후`}</Text>
        </View>
        <View style={styles.flexItem2}>
          <Text style={{ ...styles.way, fontSize: 18 }}>주변 도로 상황</Text>
          <Text style={styles.way}>way info</Text>
          <Text style={styles.way}>way info</Text>
          <Text style={styles.way}>way info</Text>
          <Text style={styles.way}>way info</Text>
        </View>
      </View>
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
  flexbox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
  },
  flexItem1: {
    width: "50%",
    alignItems: "left",
    justifyContent: "center",
    backgroundColor: "#B9CFDF",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  flexItem2: {
    width: "50%",
    alignItems: "left",
    justifyContent: "center",
    backgroundColor: "#B9CFDF",
  },
  bus: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  way: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
