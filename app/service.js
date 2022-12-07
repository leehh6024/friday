import axios from "axios";
import { useEffect } from "react";

const testAPI = async () => {
  const res = await axios.get("http://172.30.1.72:8080/user/default");
  console.log(res);
};
useEffect(() => {
  testAPI();
}, []);

const BusAPI = axios.create({});
const NewsAPI = axios.create({});
const CalendarAPI = axios.create({});
const WeatherAPI = axios.create({});

const TownCleanerAPI = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// baseURL: "http://43.200.121.200",

export const API = {
  getFixedPointIssue: async () => {
    try {
      return await TownCleanerAPI.get("/issue");
    } catch (err) {
      //console.log(err.response.data.message);
      return { success: false, message: err.response.data.message, data: null };
    }
  },
  getUserPointIssues: async (lat, lng) => {
    try {
      const { data } = await TownCleanerAPI.post("/issue", { lat, lng });
      return data;
    } catch (err) {
      //console.log(err.response.data.message);
      return { success: false, message: err.response.data.message, data: null };
    }
  },
  getPostList: async (path, inputData) => {
    try {
      const { data } = await TownCleanerAPI.get(`/society/${path}`, inputData);
      return data;
    } catch (err) {
      //console.log(err.response.data.message);
      return { success: false, message: err.response.data.message, data: null };
    }
  },
  createIssue: async (inputData) => {
    try {
      const { data } = await TownCleanerAPI.post("/issue/create", inputData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return data;
    } catch (err) {
      //console.log(err.response.data.message);
      return { success: false, message: err.response.data.message, data: null };
    }
  },
  createPostQuest: async (inputData) => {
    try {
      const { data } = await TownCleanerAPI.post("/society/quest", inputData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return data;
    } catch (err) {
      return { success: false, message: err.response.data.message, data: null };
    }
  },
  createPostTrade: async (inputData) => {
    try {
      const { data } = await TownCleanerAPI.post("/society/trade", inputData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return data;
    } catch (err) {
      return { success: false, message: err.response.data.message, data: null };
    }
  },
  serverLog: async () => {},
};
export async function serverLog(data) {
  return await TownCleanerAPI.get("/log", data);
}
