import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./components/pages/Home";
import Articles from "./components/pages/Articles";
import Header from "./components/common/Header";
import SingleTopic from "./components/pages/SingleTopic";
import { UserContext } from "./contexts/User";
import defaultUserImg from "./images/rory-user.JPG";
import SingleArticle from "./components/pages/SingleArticle";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({
    username: "rorymcdonnell95",
    avatar_url: defaultUserImg,
    name: "Rory",
  });

  return (
    <Router>
      <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
        <div className="App">
          <Switch>
            <Route path="/topics/all">
              <Header />
              <Articles />
            </Route>
            <Route path="/topics/:topic_slug">
              <Header />
              <SingleTopic />
            </Route>
            <Route path="/articles/:article_id">
              <Header />
              <SingleArticle />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
