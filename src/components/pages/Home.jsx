import React from "react";
import Header from "../common/Header";
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
