import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { useParams } from "react-router-dom";
import Comments from "../common/Comments";
import Expandable from "../common/Expandable";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();

  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <div className="articles-section">
        <h1>Loading...</h1>
      </div>
    );

  if (
    topic_slug !== "cooking" &&
    topic_slug !== "coding" &&
    topic_slug !== "football"
  ) {
    return (
      <div className="articles-section">
        <ul>
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
        </ul>
      </div>
    );
  }

  return (
    <div className="articles-section">
      <ul>
        {articles
          .filter((article) => {
            if (article.topic === undefined) {
              return article;
            } else {
              return article.topic === topic_slug;
            }
          })
          .map(
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
                  <Expandable article_id={article_id}>
                    <p className="article-body">{body.substring(0, 100)}...</p>
                    <p>Written By: {author}</p>
                    <p>Comments: {number_of_comments}</p>
                  </Expandable>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

export default Articles;
