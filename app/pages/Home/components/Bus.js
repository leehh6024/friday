import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Bus() {
  const navigation = useNavigation();

  // const busAPI = async () => {
  //   const res = await fetch(
  //     "http://apis.data.go.kr/6410000/busrouteservice/getBusRouteList?serviceKey=4gpM4FwLLV3c9v4j2o%2BALg3OJ7DDMEj7JQGIJWTyhQqaiZBtFkvbkuWuE2xLU6T9mBqWvLgqU%2FX7wN%2FBf950dw%3D%3D&keyword=1680"
  //   ).catch((error) => {
  //     console.log(error);
  //   });
  //   const json = await res.json();
  //   console.log(json);
  // };

  // busAPI();
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 6,
      }}
    >
      <View style={{ ...styles.bus, marginRight: 4, width: "49%" }}>
        <View style={styles.day}>
          <View style={styles.header}>
            <Text
              style={styles.title}
              onPress={() => navigation.navigate("BusDetails")}
            >
              버스 정보
            </Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.station}>복우물마을입구</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.info}>{`302       잠실 행     5분후`}</Text>
            <Text style={styles.info}>{`500-2   잠실 행     33분후`}</Text>
            <Text style={styles.info}>{`303       왕십리 행  15분후`}</Text>
            <Text style={styles.info}>{`G1690  갈매 행     55분후`}</Text>
          </View>
        </View>
      </View>
      <View style={{ ...styles.bus }}>
        <View style={styles.day}>
          <View style={styles.header}>
            <Text
              style={{ ...styles.title, marginTop: 4 }}
              onPress={() => navigation.navigate("BusDetails")}
            ></Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.station}>가천대학교</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.info}>{`302       잠실 행     5분후`}</Text>
            <Text style={styles.info}>{`500-2   잠실 행     33분후`}</Text>
            <Text style={styles.info}>{`303       왕십리 행  15분후`}</Text>
            <Text style={styles.info}>{`G1690  갈매 행     55분후`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bus: {
    width: "50%",
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 160,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 6,
  },
  day: {},
  header: {},
  body: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "left",
    marginTop: 4,
  },
  footer: {
    width: "100%",
    justifyContent: "left",
    alignItems: "left",
    marginTop: 6,
  },

  title: {
    color: "#A3C1C6",
    fontSize: 20,
    fontWeight: "700",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  station: { fontSize: 17, fontWeight: "600", marginTop: 2 },
  info: { fontSize: 15, fontWeight: "500", marginTop: 1 },
});
