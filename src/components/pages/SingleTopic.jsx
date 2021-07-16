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
        <img
          className="topic-img-cover"
          src={codingImg}
          alt={`${topic_slug}-cover`}
        ></img>
        <div className="latest-news-topic">
          <h3>Latest News</h3>
        </div>

        <Articles />
        <Footer />
      </div>
    );
  } else if (topic_slug === "cooking") {
    return (
      <div className="single-topic">
        <img
          className="topic-img-cover"
          src={cookingImg}
          alt={`${topic_slug}-cover`}
        ></img>
        <div className="latest-news-topic">
          <h3>Latest News</h3>
        </div>
        <Articles />
        <Footer />
      </div>
    );
  } else if (topic_slug === "football") {
    return (
      <div className="single-topic">
        <img
          className="topic-img-cover"
          src={footballImg}
          alt={`${topic_slug}-cover`}
        ></img>
        <div className="latest-news-topic">
          <h3>Latest News</h3>
        </div>
        <Articles />
        <Footer />
      </div>
    );
  }
};

export default SingleTopic;
