import React from "react";
import "./Contact.css";

const Contact = (props) => (
  <p
    style={{
      width: "80%",
      border: "1px solid #eee",
      boxShadow: "0 2px 3px #ccc",
      padding: "10px",
      margin: "10px auto",
      boxSizing: "border-box",
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold",
    }}
  >
    You are Clicked: {props.match.params.id}
  </p>
);

export default Contact;
