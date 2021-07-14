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
                  <h3>{topic}</h3>
                  <button>Read Article</button>
                  <p className="article-body">{body}</p>
                  <p>{author}</p>
                  <p>{number_of_comments}</p>
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
                  <h3>{topic}</h3>
                  <Test>
                    <p className="article-body">{body}</p>
                    <p>{author}</p>
                    <p>{number_of_comments}</p>
                  </Test>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

const Test = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  if (isOpen === true) {
    return (
      <div>
        <button onClick={toggleIsOpen}>
          {isOpen ? "Close Article" : "Read Article"}
        </button>
        {children}
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={toggleIsOpen}>
          {isOpen ? "Close Article" : "Read Article"}{" "}
        </button>
      </div>
    );
  }
};

export default Articles;
