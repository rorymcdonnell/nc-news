import React, { useEffect, useState } from "react";
import { getAllArticles, getAllTopics } from "../../utils/api";
import { useParams, Link } from "react-router-dom";
import codingImg from "../../images/coding.jpg";
import cookingImg from "../../images/cooking.jpg";
import footballImg from "../../images/football.jpg";
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
          <Link to={`/articles/${article.article_id}`}>
            <h3 className="single-header">{article.title}</h3>
          </Link>

          <p>Posted on {article.created_at.slice(0, 10)}</p>
          <Link to={`/articles/${article.article_id}/comments`}>
            <p>This article has {article.number_of_comments} comments</p>
          </Link>
        </li>
      );
    });
  };

  if (topic_slug === "coding") {
    return (
      <div>
        <h1 className="single-topic-heading">{topic_slug}</h1>
        <img className="topic-img-cover" src={codingImg} alt={topic_slug}></img>
        <ul>{filterResults()}</ul>
      </div>
    );
  } else if (topic_slug === "cooking") {
    return (
      <div>
        <h1 className="single-topic-heading">{topic_slug}</h1>
        <img
          className="topic-img-cover"
          src={cookingImg}
          alt={topic_slug}
        ></img>
        <ul>{filterResults()}</ul>
      </div>
    );
  } else if (topic_slug === "football") {
    return (
      <div>
        <h1 className="single-topic-heading">{topic_slug}</h1>
        <img
          className="topic-img-cover"
          src={footballImg}
          alt={topic_slug}
        ></img>
        <ul>{filterResults()}</ul>
      </div>
    );
  }
};
export default SingleTopics;
