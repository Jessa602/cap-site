// import { useState, useEffect } from "react";
// import { getProducts } from "./helper";
// import SingleProduct from "./SingleProduct";
// import ProductDetails from "./ProductDetails";

// export default function AllProducts() {
//   const [products, setProducts] = useState([]);
//   const [product, setProduct] = useState({});
//   const [selectedProduct, setSelectedProduct] = useState({});
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = async () => {
//     try {
//       const results = await getProducts();
//       setProducts(results);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return (
//     <div className="card-container">
//       {selectedProduct.name ? (
//         <ProductDetails product={selectedProduct} />
//       ) : (
//         products.map((product, index) => (
//           <div key={index}>
//             <SingleProduct
//               key={index}
//               productData={product}
//               setSelectedProduct={setSelectedProduct}
//             />
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { getProducts } from "./helper";
import SingleProduct from "./SingleProduct";
import ProductDetails from "./ProductDetails";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const results = await getProducts();
        setProducts(results);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="card-container">
      {products.map((product, index) => (
        <SingleProduct key={index} product={product} />
      ))}
    </div>
  );
}
