import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api-rm.herokuapp.com/api",
});

export const getAllTopics = async () => {
  const { data } = await newsApi.get("/topics");
  return data.topics;
};

export const getAllArticles = async () => {
  const { data } = await newsApi.get("/articles");
  return data.articles;
};

export const getAllUsers = async () => {
  const { data } = await newsApi.get("/users");
  return data;
};
