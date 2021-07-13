import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-nc-news.png";

const Header = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo"></img>
          </Link>
        </div>
        <div>
          <Link to="/topics/coding">
            <h4>coding</h4>
          </Link>
          <Link to="/topics/football">
            <h4>football</h4>
          </Link>
          <Link to="/topics/cooking">
            <h4>cooking</h4>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
