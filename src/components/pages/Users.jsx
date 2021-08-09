import { useContext, useEffect, useState } from "react";
import { getAllUsers, getLoggedInUser } from "../../utils/api";
import { UserContext } from "../../contexts/User";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers()
      .then((apiUsers) => {
        setUsers(apiUsers);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  const login = (username) => {
    getLoggedInUser(username).then((apiUser) => {
      setUserLoggedIn(apiUser);
    });
  };

  if (isLoading) {
    return (
      <div>
        <h2>Loading data...</h2>
        <Link to="/">
          <button>Return to Home page</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="select-user">Select your username</h1>
      <ul className="user-container">
        {users.map((user) => {
          return (
            <li
              key={user.username + user.avatar_url}
              className="user-result"
              onClick={() => {
                login(user.username);
              }}
            >
              <div>
                <p>{user.username}</p>
                {user.username === userLoggedIn.username
                  ? [
                      <h3>Logged in</h3>,
                      <Link to="/">
                        <button>Back to home screen</button>
                      </Link>,
                      <Link to="/">
                        <button>Manage my comments</button>
                      </Link>,
                      <p> </p>,
                    ]
                  : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
