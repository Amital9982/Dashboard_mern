import React, { useState, useEffect } from "react";

const Productlist = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:4500/products");
    result = await result.json();
    setProducts(result);
  };
  console.warn("prducts", products);
  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>price</li>
        <li>Category</li>
      </ul>
      {products.map((item, index) => (
        <ul>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
        </ul>
      ))}
    </div>
  );
};

export default Productlist;
