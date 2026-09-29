import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Header from "./Header";

function Html() {
  
    async function updateProducts(category) {
      try {
        const response = await axios.get(
          `http://localhost:4000/${category === ""? `products`:`products/filter?category=${category}`}`
        );
        console.log("Product:", response.data);
        setProducts(response.data.products);
        setError("");
      } catch (error) {
        console.log(error);
        setProducts([]);
        setError("Product not found");
      }
    }
    async function getProductsByName(productName) {
      if(!productName){
        setError(`Cant Find The Product ${productName}`)
      }
      try {
        const response = await axios.get(
          `http://localhost:4000/${productName === ""? `products`:`products/filter?name=${productName}`}`
        );
        console.log("Product:", response.data);
        setProducts(response.data.products);
        setError("");
      } catch (error) {
        console.log(error);
        setProducts([]);
        setError("Product not found");
      }
    }

  const [cartCount, setcount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProducts(response.data.products);
      } catch {
        setError("Failed to fetch products");
      }
    };
    getProduct();
  }, []);

  function displayProducts(eachProduct) {
    return (
      <ProductCard
        key={eachProduct.id}
        title={eachProduct.name}
        brand={eachProduct.brand}
        stock={eachProduct.stock}
        inStock={eachProduct.instock}
        category={eachProduct.category}
        rating={eachProduct.rating}
        badge="new"
        description="A 20L pack with a padded back panel and water-resistant zips."
        price={eachProduct.price}
        count={cartCount}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
      />
    );
  }
  function addToCart(){
    setcount(pre => pre+1)
  }
  function addToWishlist(){
    setWishlistCount(pre => pre+1)
  }
  return (
    <div className="app">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} onclick={getProductsByName} onchange={updateProducts}/>
      <div className="main">
        <div className="page">
          {error === "" ? products.map(displayProducts) : error}
        </div>
      </div>
    </div>
  );
}

export default Html;
