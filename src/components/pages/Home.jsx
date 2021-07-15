import React from "react";
import Header from "../common/Header";
import codingImg from "../../images/coding.png";
import cookingImg from "../../images/cooking.png";
import footballImg from "../../images/football.png";
import { Link } from "react-router-dom";
import Footer from "../../components/common/Footer";

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
          <div className="container">
            <img
              className="coding-img"
              src={codingImg}
              alt="coding-cover"
            ></img>
            <h3 className="centered">Coding</h3>
          </div>
        </Link>
        <Link to="/topics/cooking">
          <div className="container">
            <img
              className="cooking-img"
              src={cookingImg}
              alt="cooking-cover"
            ></img>
            <h3 className="centered">Cooking</h3>
          </div>
        </Link>
        <Link to="/topics/football">
          <div className="container">
            <img
              className="football-img"
              src={footballImg}
              alt="football-cover"
            ></img>
            <h3 className="centered">Football</h3>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
