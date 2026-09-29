import Button from "./Button";
import "./ProductCard.css"
export default function ProductCard(props) {
    return (
        <div className="product-card" >
            <div className="product-header">
                <div className="card-header">
                <h2>{props.title}</h2>
                <Button text= "♡" onclick={props.addtowishlist} id="wishlist-icon"/>
                </div>
                <span className="category">{props.category}</span>
                <p className="description">{props.description}</p>
            </div>
            <div className="product-info">
                <div className="info-row">
                <span>Brand</span>
                <strong>{props.brand}</strong>
                </div>
                <div className="info-row">
                <span>Price</span>
                <strong>₹{props.price}</strong>
                </div>
                <div className="info-row">
                <span>Rating</span>
                <strong>⭐ {props.rating}</strong>
                </div>
                <div className="info-row">
                <span>Stock</span>
                <strong>{props.stock} units</strong>
                </div>
            </div>
            <div className="product-status">
                <span
                className={props.inStock ? "in-stock" : "out-stock"}
                >
                ● {props.inStock ? "In Stock" : "Out of Stock"}
                </span>
            </div>
            <button onClick={props.addtocart}className="cart-btn">
                Add to Cart
            </button>
        </div>
    );
}