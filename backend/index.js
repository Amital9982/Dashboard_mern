const express = require("express");
const app = express();

app.get("/", async (req, resp) => {
  resp.send("app is working");
});
app.listen(4500);
