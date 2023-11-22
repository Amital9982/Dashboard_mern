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
  const deleteProducts = async (id) => {
    let result = await fetch(`http://localhost:4500/delete-product/${id}`, {
      method: "Delete",
    });

    result = await result.json();
    if (result) {
      getProducts();
      alert("Record deleted Successfully");
    }
  };
  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>price</li>
        <li>Category</li>
        <li>Action</li>
      </ul>
      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>
            <button className="" onClick={() => deleteProducts(item._id)}>
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Productlist;
