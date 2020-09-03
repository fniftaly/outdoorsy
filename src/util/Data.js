// import React, { useEffect, useState } from "react";
// import firebase from "firebase";

// const Data = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const db = firebase.firestore();
//       const data = await db.collection("products").get();
//       setProducts(data.docs.map((doc) => doc.data()));
//     };
//     fetchData();
//   }, []);
//   return (
//     <ul>
//       {products.map((prod) => (
//         <li>{prod.price}</li>
//       ))}
//     </ul>
//   );
// };

// export default Data;
