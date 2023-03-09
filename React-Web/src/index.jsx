import React from "react";
import ReactDOM from "react-dom/client";
import User from './User'
const root = ReactDOM.createRoot(document.getElementById("root"));

function Casado() {
  const married = true;
  return <h1> {married ? "Estoy bien 😄" : "Estoy soltero 😅"} </h1>;
}

function Present() {


  return <h1>{User.Present()}</h1>
}

root.render(<Present/>);
