const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;
const database = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/book-list";
app.use(express.json());
app.use(cors());

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch(console.error);

mongoose.connection.on("connected", () =>
  console.log(`${database} connected!`)
);

const Wishlist = require("./models/Wishlish");

app.get("/wishlist", async (req, res) => {
  try {
    const wish = await Wishlist.find();
    res.status(200).json({ data: wish });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

app.post("/wishlist", async (req, res) => {
  const { title, thumbnail, author, rating } = req.body;
  try {
    const wish = await Wishlist.findOrCreate({ title, thumbnail, author, rating });
    return res.status(201).json({ data: wish });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

app.delete("/wishlist", async (req, res) => {
  try {
    await Wishlist.deleteMany({});
    return res.status(200).json({ message: "success" });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

app.listen(port, () => console.log("Server started on port 3001"));
