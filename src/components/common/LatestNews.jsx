import React, { useEffect, useState } from "react";
import { getAllArticles, getAllTopics } from "../../utils/api";
import { useParams, Link } from "react-router-dom";
const LatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articleFilter, setArticleFilter] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const { topic_slug } = useParams();
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
      (article) => articleFilter === topic_slug || articleFilter === "all"
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

  return (
    <div>
      <h3>Southgate resigns!</h3>
      <h3>Paulie C tops charts!</h3>
      <h3>NorthCoders voted best coding bootcamp</h3>
    </div>
  );
};

export default LatestNews;
