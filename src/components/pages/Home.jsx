import React from "react";
import Header from "../common/Header";
import codingImg from "../../images/coding.jpg";
import cookingImg from "../../images/cooking.jpg";
import footballImg from "../../images/football.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <h3 className="banner">
        BREAKING NEWS: ENGLAND LOSE ON PENALTIES AGAIN! #SOUTHGATEOUT
      </h3>
      <div className="home-page-section">
        <div className="latest-news">
          <h3>Latest News</h3>
        </div>
        <Link to="/topics/coding">
          <img className="coding-img" src={codingImg} alt="coding-cover"></img>
        </Link>
        <Link to="/topics/cooking">
          <img
            className="cooking-img"
            src={cookingImg}
            alt="cooking-cover"
          ></img>
        </Link>
        <Link to="/topics/football">
          <img
            className="football-img"
            src={footballImg}
            alt="football-cover"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Home;
