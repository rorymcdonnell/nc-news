import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-nc-news.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";

const Header = () => {
  const { userLoggedIn } = useContext(UserContext);

  return (
    <div>
      <nav>
        <div>
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo"></img>
          </Link>
          <Link to="#">
            <span>{userLoggedIn.username}</span>
            <img
              className="default-user-img"
              src={userLoggedIn.avatar_url}
              alt="user-img"
            ></img>
          </Link>
        </div>
        <div className="navebar">
          <Link to="/topics/all">
            <h4>All Articles</h4>
          </Link>
          <Link to="/topics/coding">
            <h4>Coding</h4>
          </Link>
          <Link to="/topics/cooking">
            <h4>Cooking</h4>
          </Link>
          <Link to="/topics/football">
            <h4>Football</h4>
          </Link>
          <Link to="/users">
            <h4>Users</h4>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
