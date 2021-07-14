import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Articles from "./Articles";
import codingImg from "../../images/coding.jpg";
import cookingImg from "../../images/cooking.jpg";
import footballImg from "../../images/football.jpg";

const SingleTopic = () => {
  const { topic_slug } = useParams();

  return (
    <div>
      <img src={`${topic_slug}Img`} alt={`${topic_slug}-cover`}></img>
      <h2> {topic_slug}</h2>
      <Articles />
    </div>
  );
};

export default SingleTopic;
