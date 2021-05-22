import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import "./Contacts.css";

class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>Contact Component</h1>
        <strong>Select Contact Id</strong>
        <ul>
          <li>
            <Link to="/contacts/1">Contact 1</Link>
          </li>
          <li>
            <Link to="/contacts/2">Contact 2</Link>
          </li>
          <li>
            <Link to="/contacts/3">Contact 3</Link>
          </li>
          <li>
            <Link to="/contacts/4">Contact 4</Link>
          </li>
        </ul>
        <Route path="/contacts/:id" component={Contact} />
      </div>
    );
  }
}

export default Contacts;
