const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const Todo = require("./models/todo");


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/docker-node-mongo", {
  useNewUrlParser: true,
});



app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/addtodos", async (req, res) => {
  const payload = req.body;
  const todo = new Todo(payload);
  await todo.save();
  res.status(200).end();
});

app.get("/gettodos", async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
});



app.listen(8000, () => {
  console.log("server running on 8000");
});
