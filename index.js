const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

const WilderController = require('./controllers/Wilder')



app.use(express.json())
mongoose.set("debug", true);

//Database
mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));


// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route principale
app.get("/", (req, res) => {
  res.send("Hello World");
  
});
// CRUD
app.get('/api/wilders', WilderController.read)
app.post("/api/wilders", WilderController.create)
app.put("/api/wilders", WilderController.update)
app.delete("/api/wilders", WilderController.delete)



//Start Server
app.listen(5000, () => console.log("Server started on 5000"));