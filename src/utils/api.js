import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api-rm.herokuapp.com/api",
});

export const getAllTopics = async () => {
  const { data } = await newsApi.get("/topics");
  return data.topics;
};

export const getAllArticles = async () => {
  const { data } = await newsApi.get(`/articles`);
  return data.articles;
};

export const getArticleById = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}`);
  return data.article;
};

export const getAllUsers = async () => {
  const { data } = await newsApi.get("/users");
  return data.users;
};

export const getLoggedInUser = async (username) => {
  const { data } = await newsApi.get(`/${username}`).catch((err) => {
    return err.response;
  });
  return data.user;
};

export const getArticleComments = async (article_id) => {
  const { data } = await newsApi.get(`/${article_id}/comments`).catch((err) => {
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

export const postComment = async (article_id, itemBody) => {
  const { reply } = await newsApi
    .post(`/articles/${article_id}/comments`, itemBody)
    .catch((err) => {
      return err.response;
    });
  return reply;
};
