

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const Todo  = require("./database/mongodb/Todomodel");

const Todo = require("./database/mongodb/Todomodel");

const PORT = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());



app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/todos", (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then(() => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new todo failed");
    });
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (err) {
      console.log("error:", err);
    } else {
      res.json(todo);
    }
  });
});

app.delete("/todos", (req, res) => {
  Todo.deletemusic(req.params.id)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.send(error));
});

app.post("/todos/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send("data not found");
    } else {
      todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_priority = req.body.todo_priority;
      todo.todo_completed = req.body.todo_completed;
      todo
        .save()
        .then(() => {
          res.json("Todo updated");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });

});

app.put("/todos/:id", (req, res) => {
  Todo.updateOne({_id:req.params.id},{todo_descripition:req.body.todo_descripition})
    .then((response) => {
      res.send("updated");
    })
    .catch((error) => res.send(error));
});
mongoose.connect("mongodb://127.0.0.1/Todo");

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("database connection established successfully!!!!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

