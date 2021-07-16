import React from "react";
import { useParams } from "react-router-dom";

const Footer = () => {
  const { topic_slug } = useParams();

  return (
    <div className="footer">
      <ul>
        <li>Contact</li>
        <li>About</li>
        <li>Social Media</li>
        <h3>{topic_slug}</h3>
      </ul>
    </div>
  );
};

export default Footer;
