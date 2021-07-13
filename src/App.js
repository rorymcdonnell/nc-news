import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Articles from "./components/pages/Articles";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/articles">
            <Articles />
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
