import React from "react";
import { useParams } from "react-router-dom";

const Footer = () => {
  const { topic_slug } = useParams();

  return (
    <div>
      <ul>
        <li>Contact</li>
        <li>About</li>
        <li>Social Media</li>
      </ul>
      <h2>{topic_slug}</h2>
    </div>
  );
};

export default Footer;
