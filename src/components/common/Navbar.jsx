import { Link } from "react-router-dom";
import { showMenu } from "../../utils/showMenu";

const NavBar = () => {
  return (
    <div className="navbar" id="navbar">
      <span className="toggle-button" onClick={showMenu}>
        ☰
      </span>

      <ul>
        <li>
          <Link to="/topics/all" style={{ textDecoration: "none" }}>
            Articles
          </Link>
        </li>
        <li>
          <Link to="/topics/coding" style={{ textDecoration: "none" }}>
            Coding
          </Link>
        </li>
        <li>
          <Link to="/topics/cooking" style={{ textDecoration: "none" }}>
            Cooking
          </Link>
        </li>
        <li>
          <Link to="/topics/football" style={{ textDecoration: "none" }}>
            Football
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
