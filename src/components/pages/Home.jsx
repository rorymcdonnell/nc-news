import React from "react";
import Header from "../common/Header";
import codingImg from "../../images/coding-banner.png";
import cookingImg from "../../images/cooking-banner.png";
import footballImg from "../../images/football-banner.png";
import { Link } from "react-router-dom";
import Footer from "../../components/common/Footer";
import Articles from "./Articles";

const Home = () => {
  return (
    <div>
      <Header />
      <h3 className="banner">
        BREAKING NEWS: ENGLAND LOSE ON PENALTIES AGAIN! #SOUTHGATEOUT
      </h3>
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
