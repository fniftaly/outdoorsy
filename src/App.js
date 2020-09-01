import React, { useState } from "react";
import data from "./data.json";0
// testing reopo
function App() {
  const [state, setState] = useState({
    products: data.products,
    sleeps: 0,
    sort: "",
  });
  return (
    <div className="grid-container">
      <header>
        <h5>Header</h5>
      </header>
      <main>
        <div className="content"></div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}

export default App;
