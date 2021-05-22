import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contacts from "./Components/Contacts/Contacts";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={{ color: "red" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" exact activeStyle={{ color: "green" }}>
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={{ color: "magenta" }}>
            About
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
