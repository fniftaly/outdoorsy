import React, { useState, useMemo } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

function App() {
  const [state, setState] = useState({
    products: data.products,
    sleeps: "",
    sort: "",
    brand: "",
  });
  const handleInput = (e) => {
    console.log("IN: " + e.target.value);
    if (e.target.value === "") {
      setState({
        brand: e.target.value.toLowerCase(),
        products: data.products,
      });
    } else {
      setState({
        brand: e.target.value.toLowerCase(),
        products: data.products.filter(
          (product) =>
            product.brand.toLowerCase() === e.target.value.toLowerCase()
        ),
        // products: data.products.filter((product) => {
        //   return product.brand.indexOf(state.brand.toLowerCase()) !== -1;
        // }),
      });
    }
  };

  const handleSelectSs = (e) => {
    console.log("IN: " + e.target.value);
    if (e.target.value === "") {
      setState({ sleeps: e.target.value, products: data.products });
    } else {
      setState({
        sleeps: e.target.value,
        products: data.products.filter(
          (product) => product.sleeps == e.target.value
        ),
      });
    }
  };

  return (
    <div className="grid-container">
      <header>
        <Filter
          input={state.input}
          handleInput={handleInput}
          sleeps={state.sleeps}
          handleSelectSs={handleSelectSs}
        />
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
