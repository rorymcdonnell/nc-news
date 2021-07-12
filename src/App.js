import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Topics />
    </div>
  );
}

export default App;
