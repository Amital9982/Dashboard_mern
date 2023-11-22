import React, { useState } from "react";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const addData = async () => {
    console.warn(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:4500/add-product", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        category,
        company,
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
          setName(e.target.value);
        }}
        value={name}
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
      />
      {error && !name && <span className="invalid">Enter valid name</span>}
      <input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
      />
      {error && !price && <span className="invalid">Enter valid price</span>}

      <input
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
        type="text"
        className="inputBox"
        placeholder="Enter Product category"
      />
      {error && !category && (
        <span className="invalid">Enter valid Category</span>
      )}
      <input
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
        type="text"
        placeholder="Enter Product comapany"
        className="inputBox"
      />
      {error && !company && (
        <span className="invalid">Enter valid company</span>
      )}
      <button onClick={addData} type="submit" className="appbutton">
        ADD
      </button>
    </div>
  );
};

export default AddProducts;
