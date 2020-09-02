import React, { useState } from "react";
import { formatCurrency } from "../util/FormatCurrency";
import Modal from "react-modal";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const Products = ({ products }) => {
  const [product, setProduct] = useState(null);

  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(null);
  };

  return (
    <div>
      <Fade bottom>
        <ul className="products">
          {products.map((product) => (
            <li key={product.id}>
              <div className="product">
                <a href={"#" + product.id} onClick={() => openModal(product)}>
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
      </Fade>
      {product && (
        <Modal
          isOpen={true}
          onRequestClose={closeModal}
          contentLabel="Modal"
          appElement={document.getElementById("root")}
        >
          <Zoom>
            <div>Modal View</div>
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <div style={styles.modalInfo}>
              <img
                style={styles.modalImg}
                src={product.image}
                alt={product.name}
              />
              <div>
                <p>
                  <strong>Type {product.type}</strong>
                </p>
                <p>
                  <strong>{product.name}</strong>
                </p>
                <p>{product.description}</p>
                <p>Sleep Size {product.sleeps}</p>
                <p>Brand: {product.brand}</p>
                <div>
                  <div>
                    Price per night{"  "}
                    {formatCurrency(product.price)}
                  </div>
                  <button style={styles.modalBtn}>For some action</button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

const styles = {
  modalImg: {
    width: 200,
    height: 200,
    display: "flex",
  },
  modalInfo: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  modalBtn: {
    padding: 0,
    height: 30,
    width: 150,
    marginTop: 20,
  },
};

export default Products;
