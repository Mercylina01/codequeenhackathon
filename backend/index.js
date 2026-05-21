const express = require("express")
const app = express();
app.use(express.json());

const PORT=5000;
app.get("/", (req,res) => {
  res.send("Welcome to our backend")  
});
app.listen(PORT, () => {
console.log("Server is listening to the PORT", PORT)
});