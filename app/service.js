import axios from "axios";

const TownCleanerAPI = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const TrafficAPI = axios.create({});
const NewsAPI = axios.create({});
const TodoListAPI = axios.create({});
const WeatherAPI = axios.create({});

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
