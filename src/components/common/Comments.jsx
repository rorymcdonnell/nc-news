import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleComments } from "../../utils/api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getArticleComments(article_id).then((apiComments) => {
      if (!apiComments) {
        setHasError(true);
      } else {
        setComments(apiComments);
      }
    });
  }, [article_id]);

  return (
    <div>
      <h1>Comments:</h1>
      <div>
        <h2 className="TitleCard">Comments</h2>
        <div></div>
        <ul>
          {comments.map((comment) => {
            return (
              <div className="ResultsCard">
                <li key={comment.comment_id}>
                  <p>{comment.author}</p>
                  <p> - commented - </p>
                  <p>{comment.body}</p>
                  <p> </p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
