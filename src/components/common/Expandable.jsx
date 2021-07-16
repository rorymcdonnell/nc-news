import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Expandable = ({ children, article_id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  if (isOpen === true) {
    return (
      <div>
        <button onClick={toggleIsOpen}>
          {isOpen ? "Close Preview" : "Preview Article"}
        </button>
        <Link to={`/articles/${article_id}`}>
          <button>View Full Article</button>
        </Link>
        {children}
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={toggleIsOpen}>
          {isOpen ? "Close Preview" : "Preview Article"}{" "}
        </button>

        <Link to={`/articles/${article_id}`}>
          <button>View Full Article</button>
        </Link>
        <h1>{article_id}</h1>
      </div>
    );
  }
};

export default Expandable;
