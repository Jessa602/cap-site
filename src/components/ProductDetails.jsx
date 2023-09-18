import AllProducts from "./AllProducts";

export default function ProductDetails({ selectedProduct }) {
  return (
    <div className="detail">
      <ProductDetails selectedProduct={selectedProduct} />
    </div>
  );
}
