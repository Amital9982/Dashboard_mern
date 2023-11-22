import React, { useState } from "react";

const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productCompany, setProductCompany] = useState("");
  const [error, setError] = useState(false);
  const addData = async () => {
    console.warn(!productName);
    if (!productName || !productPrice || !productCategory || !productCompany) {
      setError(true);
      return false;
    }
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
      {error && !productName && (
        <span className="invalid">Enter valid name</span>
      )}
      <input
        onChange={(e) => {
          setProductPrice(e.target.value);
        }}
        value={productPrice}
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
      />
      {error && !productPrice && (
        <span className="invalid">Enter valid price</span>
      )}

      <input
        onChange={(e) => {
          setProductCategory(e.target.value);
        }}
        value={productCategory}
        type="text"
        className="inputBox"
        placeholder="Enter Product category"
      />
      {error && !productCategory && (
        <span className="invalid">Enter valid Category</span>
      )}
      <input
        onChange={(e) => {
          setProductCompany(e.target.value);
        }}
        value={productCompany}
        type="text"
        placeholder="Enter Product comapany"
        className="inputBox"
      />
      {error && !productCompany && (
        <span className="invalid">Enter valid company</span>
      )}
      <button onClick={addData} type="submit" className="appbutton">
        ADD
      </button>
    </div>
  );
};

export default AddProducts;
