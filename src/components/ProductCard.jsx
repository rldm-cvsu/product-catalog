import { Children } from "react";
import "./ProductCard.css";

function ProductCard({ title, price, category = "General", inStock, onAddToCart, children }) {
  const formattedPrice = price.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className={`product-card ${inStock ? "" : "out-of-stock"}`}>
      {Children.toArray(children).length > 0 && <div className="badge">{children}</div>}
      <h3>{title}</h3>
      <p className="category">{category}</p>
      <p className="price">₱{formattedPrice}</p>
      <p className={inStock ? "status in" : "status out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <button disabled={!inStock} onClick={() => onAddToCart(title)}>
        Add to Cart
      </button>
    </div>
  );
}



export default ProductCard;
