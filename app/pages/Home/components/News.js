import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Linking } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import axios from "axios";

const BASE_IP = "http://172.16.239.139:8080";

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
        style={styles.title}
        onPress={() => navigation.navigate("NewsDetails")}
      >
        주요 뉴스
      </Text>
      <ScrollView style={styles.flexbox}>
        {news.map((article, index) => (
          <Text
            style={styles.title}
            onPress={() => Linking.openURL(article.url)}
          >
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
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginTop: 10,
    marginHorizontal: 6,
  },
  title: { color: "#A3C1C6", fontSize: 20, fontWeight: "700" },
  flexbox: {
    marginTop: 8,
    width: "100%",
    backgroundColor: "#B9CFDF",
  },
});
