import React, { useEffect, useState } from "react";
import { getAllArticles, getAllTopics } from "../../utils/api";
import { useParams, Link } from "react-router-dom";
import codingImg from "../../images/coding-banner.png";
import cookingImg from "../../images/cooking-banner.png";
import footballImg from "../../images/football-banner.png";
import footieArticle from "../../images/football-article.jpg";
import codingArticle from "../../images/coding-article.jpg";
import cookingArticle from "../../images/cooking-article.jpg";
import Footer from "../common/Footer";

const SingleTopics = () => {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sortBy).then((apiArticles) => {
      setArticles(apiArticles);
      setIsLoading(false);
    });
  }, [sortBy]);

  const filterResults = () => {
    const filteredArticles = articles.filter(
      (article) => article.topic === topic_slug
    );
    return filteredArticles.map((article) => {
      return (
        <li key={article.article_id} className="single-article">
          <div className="article-preview-container">
            <img
              className="article-photo"
              src={
                topic_slug === "football"
                  ? footieArticle
                  : topic_slug === "cooking"
                  ? cookingArticle
                  : codingArticle
              }
              alt="article topic"
            ></img>
            <div className="text-for-article">
              <Link to={`/articles/${article.article_id}`}>
                <h3 className="single-header">{article.title}</h3>
              </Link>
              <p>Posted on {article.created_at.slice(0, 10)}</p>
              <Link to={`/articles/${article.article_id}/comments`}>
                <p className="comment-count">
                  View {article.number_of_comments} comments
                </p>
              </Link>
            </div>
          </div>
        </li>
      );
    });
  };

  if (isLoading) {
    return (
      <div>
        <h1>LOADING...</h1>
      </div>
    );
  }

  if (topic_slug === "coding") {
    return (
      <div>
        <div className="topic-container">
          <h1 className="single-topic-heading">{topic_slug}</h1>
          <img
            className="topic-img-cover"
            src={codingImg}
            alt={topic_slug}
          ></img>
        </div>
        <ul className="all-articles">{filterResults()}</ul>
        <Footer />
      </div>
    );
  } else if (topic_slug === "cooking") {
    return (
      <div>
        <div className="topic-container">
          <h1 className="single-topic-heading">{topic_slug}</h1>
          <img
            className="topic-img-cover"
            src={cookingImg}
            alt={topic_slug}
          ></img>
        </div>
        <ul className="all-articles">{filterResults()}</ul>
        <Footer />
      </div>
    );
  } else if (topic_slug === "football") {
    return (
      <div>
        <div className="topic-container">
          <img
            className="topic-img-cover"
            src={footballImg}
            alt={topic_slug}
          ></img>
          <h1 className="single-topic-heading centered">{topic_slug}</h1>
        </div>
        <ul className="all-articles">{filterResults()}</ul>
        <Footer />
      </div>
    );
  }
};
export default SingleTopics;
