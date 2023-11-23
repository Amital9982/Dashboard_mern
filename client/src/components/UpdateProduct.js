import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  useEffect(() => {
    getProductDetail();
  }, []);
  const getProductDetail = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:4500/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };
  const updateData = () => {
    console.warn(name, price, category, company);
  };
  return (
    <div className="product">
      <h3>Update Product</h3>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
      />

      <input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
      />

      <input
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
        type="text"
        className="inputBox"
        placeholder="Enter Product category"
      />

      <input
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
        type="text"
        placeholder="Enter Product comapany"
        className="inputBox"
      />
      <button onClick={updateData} type="submit" className="appbutton">
        Update
      </button>
    </div>
  );
};

export default UpdateProduct;
