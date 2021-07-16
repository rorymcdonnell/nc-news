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

export const getArticleById = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}`);
  return data.articles;
};

export const getAllUsers = async () => {
  const { data } = await newsApi.get("/users");
  return data;
};

export const getArticleComments = async (article_id) => {
  const { data } = await newsApi
    .get(`/articles/${article_id}/comments`)
    .catch((err) => {
      return err.response;
    });
  return data.comments;
};

export const getAllComments = async () => {
  const { data } = await newsApi.get("/comments").catch((err) => {
    return err.response;
  });
  return data;
};
