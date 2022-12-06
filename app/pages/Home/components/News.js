import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function News() {
  const navigation = useNavigation();
  return (
    <View style={styles.news}>
      <Text
        style={styles.title}
        onPress={() => navigation.navigate("NewsDetails")}
      >
        오늘의 주요 뉴스
      </Text>
      <View style={styles.flexbox}>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate("NewsDetails")}
        >
          주요뉴스 헤드라인
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate("NewsDetails")}
        >
          주요뉴스 헤드라인
        </Text>
      </View>
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
    marginTop: 6,
    marginHorizontal: 6,
  },
  title: { color: "#A3C1C6", fontSize: 22, fontWeight: "700" },
  flexbox: {
    marginTop: 8,
    alignItems: "left",
    justifyContent: "left",
    width: "100%",
    backgroundColor: "#B9CFDF",
  },
});
