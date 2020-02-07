import React from "react";
import BasicForm from "./BasicForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "#61dafb" }}>Super Monster Creator!</h1>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          backgroundColor: "#FAFAFA",
          maxWidth: "600px"
        }}
      >
        <BasicForm></BasicForm>
      </div>
    </div>
  );
}

export default App;
