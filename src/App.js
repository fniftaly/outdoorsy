import React, { useState } from "react";
import data from "./data.json";
import Products from "./components/Products";
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
        <div className="header-div">
          Filter By Brand:
          <input className="input" type="text" name="search" value="" />
          <button type="GO" className="btn-go">
            GO
          </button>
        </div>
      </header>
      <main>
        <div className="content">
          <Products products={state.products} />
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}

export default App;
