import logo from "./logo.svg";

import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Component/Navbar";
import Mains from "./Component/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mains />
    </div>
  );
}

export default App;
