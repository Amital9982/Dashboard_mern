const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const User = require("./db/users");
const Product = require("./db/Product");
const Jwt = require("jsonwebtoken");
const jwtkey = "e-com";
app.use(express.json());
app.use(cors());
app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      resp.send("something went wrong please try after sometime");
    } else {
      resp.send({ result, auth: token });
    }
  });
});
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtkey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          resp.send("something went wrong please try after sometime");
        } else {
          resp.send({ user, auth: token });
        }
      });
    } else {
      resp.send("no user found");
    }
  } else {
    resp.send("enter both fields");
  }
});
app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});
app.get("/products", async (req, resp) => {
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "no products found" });
  }
});
app.delete("/delete-product/:id", async (req, resp) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});
app.get("/product/:id", async (req, resp) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "no products found" });
  }
});
app.put("/product/:id", async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});
app.listen(4500);
