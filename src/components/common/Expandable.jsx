import React from "react";
import { useState } from "react";
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
        {children}
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={toggleIsOpen}>
          {isOpen ? "Close Preview" : "Read More"}
        </button>
      </div>
    );
  }
};

export default Expandable;
