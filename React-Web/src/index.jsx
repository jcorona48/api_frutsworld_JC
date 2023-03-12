import React from "react";
import ReactDOM from "react-dom/client";
import User from "./User";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Casado() {
  const married = true;
  return <h1> {married ? "Estoy bien 😄" : "Estoy soltero 😅"} </h1>;
}
function Present() {
  return <h1>{User.Present()}</h1>;
}

function Button() {
  return (
    <button
      onClick={() => {
        fetch('http://localhost:5000/api/Productos')
      .then(response => response.json())
      .then(json => console.log(json))
      }}
    >
      😄 Cargar Datos
    </button>
  );
}
root.render(
  <>
    <Present />
    <Button />
  </>
);
