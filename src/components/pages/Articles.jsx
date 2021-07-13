import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    <div>
      <h1>All Articles:</h1>
      <ul>
        {articles.map(
          ({ article_id, title, body, topic, author, number_of_comments }) => {
            return (
              <li className="items-details" key={article_id}>
                <h2>{title}</h2>
                <h3>{topic}</h3>
                <p>{body}</p>
                <p>author</p>
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
