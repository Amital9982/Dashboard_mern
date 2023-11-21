import React, { useState } from "react";

const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productCompany, setProductCompany] = useState("");
  const addData = async () => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:4500/add-product", {
      method: "POST",
      body: JSON.stringify({
        productName,
        productPrice,
        productCategory,
        productCompany,
        userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <div class="product">
      <h1>Add products</h1>
      <input
        onChange={(e) => {
          setProductName(e.target.value);
        }}
        value={productName}
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
      />
      <input
        onChange={(e) => {
          setProductPrice(e.target.value);
        }}
        value={productPrice}
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
      />

      <input
        onChange={(e) => {
          setProductCategory(e.target.value);
        }}
        value={productCategory}
        type="text"
        className="inputBox"
        placeholder="Enter Product category"
      />
      <input
        onChange={(e) => {
          setProductCompany(e.target.value);
        }}
        value={productCompany}
        type="text"
        placeholder="Enter Product comapany"
        className="inputBox"
      />
      <button onClick={addData} type="submit" className="appbutton">
        ADD
      </button>
    </div>
  );
};

export default AddProducts;
