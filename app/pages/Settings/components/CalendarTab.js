import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CalendarTab() {
  const [calendar, setCalendar] = useState([
    "오늘 일정 알려줘",
    "오늘 할 일",
    "스케줄",
    "나 오늘 뭐해",
    "오늘 할 일 알려줘",
  ]);
  return (
    <View>
      {calendar.map((calendars, index) => {
        return <Text style={styles.contentText}>{calendars}</Text>;
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  contentText: {
    marginBottom: 6,
    fontSize: 18,
    color: "#666666",
    fontWeight: "700",
  },
});
