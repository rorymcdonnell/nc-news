import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Articles from "./components/pages/Articles";
import Header from "./components/common/Header";
import SingleTopic from "./components/pages/SingleTopic";
import { UserContext } from "./contexts/User";

function App() {
  return (
    <Router>
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
