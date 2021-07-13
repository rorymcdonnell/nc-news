import React, { useEffect, useState } from "react";
import { getAllTopics } from "../../utils/api";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });

    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="topics-section">
      <h1>All Topics:</h1>
      <ul>
        {topics.map(({ slug }) => {
          return (
            <li className="items-details" key={slug}>
              <h2>{slug}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
