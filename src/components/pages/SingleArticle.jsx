import React, { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import { useParams } from "react-router-dom";
import Comments from "../common/Comments";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      console.log(articleFromApi);
    });
    setIsLoading(false);
  }, [article_id]);

  if (isLoading)
    return (
      <div className="articles-section">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Comments />
    </div>
  );
};

export default SingleArticle;
