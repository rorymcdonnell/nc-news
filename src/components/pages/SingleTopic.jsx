import React from "react";
import { useParams } from "react-router-dom";
import Articles from "./Articles";
import codingImg from "../../images/coding.jpg";
import cookingImg from "../../images/cooking.jpg";
import footballImg from "../../images/football.jpg";
import Footer from "../common/Footer";

const SingleTopic = () => {
  const { topic_slug } = useParams();

  if (topic_slug === "coding") {
    return (
      <div className="single-topic">
        <h2 className="topic-slug"> {topic_slug}</h2>
        <img
          className="coding-img-cover"
          src={codingImg}
          alt={`${topic_slug}-cover`}
        ></img>
        <div className="latest-news-topic">
          <h3>Latest News</h3>
        </div>
        <Footer />
        <Articles />
      </div>
    );
  } else if (topic_slug === "cooking") {
    return (
      <div>
        <img src={cookingImg} alt={`${topic_slug}-cover`}></img>
        <h2> {topic_slug}</h2>
        <Footer />
        <Articles />
      </div>
    );
  } else if (topic_slug === "football") {
    return (
      <div>
        <img src={footballImg} alt={`${topic_slug}-cover`}></img>
        <h2> {topic_slug}</h2>
        <Articles />
        <Footer />
      </div>
    );
  }
};

export default SingleTopic;
