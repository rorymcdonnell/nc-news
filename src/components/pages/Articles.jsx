import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { useParams } from "react-router-dom";

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

  return (
    <div className="articles-section">
      <h1>All Articles:</h1>
      {console.log(topic_slug)}
      <ul>
        {articles
          .filter((article) => {
            if (article.topic === undefined) {
              return (
                article.topic === "coding" ||
                article.topic === "cooking" ||
                article.topic === "football"
              );
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
                <li key={article_id}>
                  <h2>{title}</h2>
                  <h3>{topic}</h3>
                  <p>{body}</p>
                  <p>{author}</p>
                  <p>{number_of_comments}</p>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

export default Articles;
