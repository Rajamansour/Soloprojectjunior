
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Todo = new Schema({
  todo_descripition: {
    type: String,
  },
  todo_responsible: {
    type: String,
  },
  todo_priority: {
    type: String,
  },
  todo_completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Todo", Todo);

// const deleteTodo = (id) => {
//   return Todo.deleteOne({ _id: id });
// };
// const updateTodo = (obj1,obj2) => {
//   return Todo.updateOne(obj1,obj2);
// }
// module.exports = {deleteTodo, updateTodo};

