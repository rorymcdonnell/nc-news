import React from "react";
import { useParams } from "react-router-dom";
import Articles from "./Articles";
import codingImg from "../../images/coding.jpg";
import cookingImg from "../../images/cooking.jpg";
import footballImg from "../../images/football.jpg";

const SingleTopic = () => {
  const { topic_slug } = useParams();

  if (topic_slug === "coding") {
    return (
      <div>
        <img
          className="coding-img-cover"
          src={codingImg}
          alt={`${topic_slug}-cover`}
        ></img>
        <h2> {topic_slug}</h2>
        <Articles />
      </div>
    );
  } else if (topic_slug === "cooking") {
    return (
      <div>
        <img src={cookingImg} alt={`${topic_slug}-cover`}></img>
        <h2> {topic_slug}</h2>
        <Articles />
      </div>
    );
  } else if (topic_slug === "football") {
    return (
      <div>
        <img src={footballImg} alt={`${topic_slug}-cover`}></img>
        <h2> {topic_slug}</h2>
        <Articles />
      </div>
    );
  }
};

export default SingleTopic;
