import React from "react";

import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";




function App() {
  return (
    <div>
      <NavBar link = "Home"/>
      <NavBar link = "About"/>
      <Home />
      <About />
    </div>
  );
}

export default App;
