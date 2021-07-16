import React, { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      console.log(articleFromApi);
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
      <ul>
        {article.map(
          ({ article_id, title, body, author, number_of_comments }) => {
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
};

export default SingleArticle;
