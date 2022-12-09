import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Linking } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_IP } from "../../../service";

export default function News() {
  const [news, setNews] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getNewsAPI();
  }, []);

  const getNewsAPI = async () => {
    const res = await axios.get(`${BASE_IP}/news/getNews?category=all`);
    // console.log("news", res.data.result);
    const json = JSON.parse(res.data.result);
    // console.log("JSON DATA", JSON.parse(res.data.result));
    console.log("article length", json.articles.length);
    json.articles.forEach((value) => {
      value.url;
      console.log("value title", value.title);
      console.log("value url", value.url);
    });
    setNews(json.articles);
  };

  return (
    <View style={styles.news}>
      <Text
        style={{ ...styles.title, paddingHorizontal: 15 }}
        onPress={() => navigation.navigate("NewsDetails")}
      >
        주요 뉴스
      </Text>
      <ScrollView style={styles.flexbox}>
        {/* test 용 */}
        <View style={styles.articleBox}>
          <Text style={styles.article}>
            안녕하소 황희찬 손흥민 황인범 이강인 김민재 진짜진짜 월드컵 잘햇다
            브라질전은 진짜 눈물이 나지만 어절수 없지
          </Text>
        </View>
        <Text style={styles.article}>
          안녕하소 황희찬 손흥민 황인범 이강인 김민재 진짜진짜 월드컵 잘햇다
          브라질전은 진짜 눈물이 나지만 어절수 없지
        </Text>
        <Text style={styles.article}>
          안녕하소 황희찬 손흥민 황인범 이강인 김민재 진짜진짜 월드컵 잘햇다
          브라질전은 진짜 눈물이 나지만 어절수 없지
        </Text>
        <Text style={styles.article}>
          안녕하소 황희찬 손흥민 황인범 이강인 김민재 진짜진짜 월드컵 잘햇다
          브라질전은 진짜 눈물이 나지만 어절수 없지
        </Text>
        <Text style={styles.article}>
          안녕하소 황희찬 손흥민 황인범 이강인 김민재 진짜진짜 월드컵 잘햇다
          브라질전은 진짜 눈물이 나지만 어절수 없지
        </Text>
        <Text style={styles.article}>
          안녕하소 황희찬 손흥민 황인범 이강인 김민재 진짜진짜 월드컵 잘햇다
          브라질전은 진짜 눈물이 나지만 어절수 없지
        </Text>
        <Text style={styles.article}>안녕하소</Text>
        <Text style={styles.article}>안녕하소</Text>
        <Text style={styles.article}>안녕하소</Text>
        <Text style={styles.article}>안녕하소</Text>

        {news.map((article, index) => (
          <Text onPress={() => Linking.openURL(article.url)}>
            {article.title}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  news: {
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    height: 240,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    marginHorizontal: 6,
  },
  title: { color: "#A3C1C6", fontSize: 20, fontWeight: "800" },
  flexbox: {
    marginTop: 8,
    marginBottom: 10,
    width: "100%",
  },
  articleBox: { borderBottomWidth: 2 },
  article: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },
});
