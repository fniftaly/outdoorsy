import React from "react";
import { formatCurrency } from "../util/FormatCurrency";

const Products = ({ products }) => {
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <a href={"#" + product.id}>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
              </a>
              <div className="product-price">
                Price per night: {formatCurrency(product.price)}
                <label className="button">Add To Cart</label>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
