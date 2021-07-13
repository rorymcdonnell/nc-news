import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Articles from "./Articles";
// import { fetchTopicBySlug } from "../../utils/api";

const SingleTopic = () => {
  const [topic, setTopic] = useState({});
  const { topic_slug } = useParams();

  // useEffect(() => {
  //   fetchTopicBySlug(topic_slug).then((topicData) => {
  //     setTopic(topicData);
  //   });
  // }, [topic_slug]);

  return (
    <div>
      <h2> {topic_slug}</h2>
      <Articles />
    </div>
  );
};

export default SingleTopic;
