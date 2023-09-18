// import { useState, useEffect } from "react";
// import { getProducts, getProduct } from "./helper";
// import "../App.css";

// export default function SingleProduct() {
//   const [product, setProduct] = useState({});
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState({});
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const results = await getProducts();
//         setProducts(results);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <div className="card-containter">
//       <div>
//         {products.map((product, index) => (
//           <div className="card" key={index}>
//             <div className="card-body">
//               <img src={product.image} className="card-img-top" alt="..." />
//               <h5 className="card-title">{product.title}</h5>
//               <h6 className="card-subtitle mb-2 text-muted">
//                 {product.category}
//               </h6>
//               {/* <p className="card-text">{product.description}</p> */}
//               <p className="card-text">${product.price}</p>
//               <div className="add-to-cart">
//                 <a href="#" className="btn btn-primary">
//                   Add to Cart
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function SingleProduct({ product }) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={product.image} className="card-img-top" alt="..." />
        <h5 className="card-title">{product.title}</h5>
        <p className="card-subtitle mb-2 text-muted">{product.category}</p>
        {/* <p className="card-text">{product.description}</p> */}
        <p className="card-text">${product.price}</p>
        <div className="add-to-cart">
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
