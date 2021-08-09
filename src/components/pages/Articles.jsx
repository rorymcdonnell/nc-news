import React, { useEffect, useState } from "react";
import { getAllArticles, getAllTopics } from "../../utils/api";
import { useParams, Link } from "react-router-dom";
import Expandable from "../common/Expandable";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [articleFilter, setArticleFilter] = useState("all");
  const [sortBy, setSortBy] = useState("created_at");
  const { topic_slug } = useParams();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sortBy).then((apiArticles) => {
      if (!apiArticles.articles) {
        setHasError(true);
        setArticles(apiArticles);
      } else {
      }
    });
    getAllTopics()
      .then((apiTopics) => {
        setTopics(apiTopics);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [sortBy]);

  const filterResults = () => {
    const filteredArticles = articles.filter(
      (article) => articleFilter === article.topic || articleFilter === "all"
    );
    return filteredArticles.map((article) => {
      console.log(article);
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

  if (isLoading)
    return (
      <div className="articles-section">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="articles-section">
      Filter by topic{" "}
      <select
        name="topic"
        id="topic"
        onChange={(event) => {
          setArticleFilter(event.target.value);
        }}
      >
        <option value="all">all</option>
        {topics.map((topic) => {
          return <option key={topic.slug}>{topic.slug}</option>;
        })}
      </select>
      <div className="articles-section">
        {/* <ul>
          {articles.map(
            ({
              article_id,
              title,
              body,
              topic,
              author,
              number_of_comments,
            }) => {
              return (
                <li className="article" key={article_id}>
                  <h2>{title}</h2>
                  <button>Read Article</button>
                  <p className="article-body">{body.substring(0, 100)}...</p>
                  <p>Written By: {author}</p>
                  <p>Comments: {number_of_comments}</p>
                </li>
              );
            }
          )}
        </ul> */}
        <ul className="all-articles">{filterResults()}</ul>
      </div>
    </div>
  );
};

export default Articles;
