import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleComments } from "../../utils/api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleComments(article_id).then((apiComments) => {
      setComments(apiComments);
    });
  }, [article_id]);

  return (
    <div>
      <h1>Comments:</h1>
      <div>
        <div></div>
        <ul>
          {comments.map((comment) => {
            return (
              <div className="ResultsCard">
                <li key={comment.comment_id}>
                  <p>
                    {comment.author}: {comment.body}
                  </p>
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
