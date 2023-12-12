import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar.js";
import ItemList from "./Components/ItemList.js";
import Multicards from "./Components/Multicards.js";
import "./Components/Card-style.css";
import "./Components/Navbar-style.css";
import Text from "./Components/Text";
import "./Components/ItemList-style.css";
import "./Components/Text.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemList />
      <Multicards />
      <Text />
    </>
  );
}

export default App;
