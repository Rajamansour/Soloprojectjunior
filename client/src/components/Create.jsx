import React, { useState } from "react";
import axios from "axios";
// import { fetchTodos } from "./TodoList"
// import "./Create.css"; // Import the CSS file


const Create = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const [todoResponsible, setTodoResponsible] = useState("");
  const [todoPriority, setTodoPriority] = useState("Low");
  const [todoCompleted, setTodoCompleted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({
      todo_descripition: todoDescription,
      todo_responsible: todoResponsible,
      todo_priority: todoPriority,
      todo_completed: todoCompleted,
    });

    axios
      .post("http://localhost:8080/todos", {
        todo_descripition: todoDescription,
        todo_responsible: todoResponsible,
        todo_priority: todoPriority,
        todo_completed: todoCompleted,
      })
      .then((res) => {
        // Fetch the updated list of Todos
        fetchTodos();
      })
      .catch((error) => console.error("Error creating todo:", error));

    setTodoDescription("");
    setTodoResponsible("");
    setTodoPriority("Low");
    setTodoCompleted(false);
  };

  return (
    <div className="create-container">
      <h3>Create New Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="create-form-group">
          <label className="create-label">Description:</label>
          <input
            type="text"
            className="form-control"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          />
        </div>
        <div className="create-form-group">
          <label className="create-label">Responsible: </label>
          <input
            type="text"
            className="form-control"
            value={todoResponsible}
            onChange={(e) => setTodoResponsible(e.target.value)}
          />
        </div>
        <div className="create-form-group">
          <label className="create-label">Priority:</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input create-radio"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={todoPriority === "Low"}
              onChange={() => setTodoPriority("Low")}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input create-radio"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={todoPriority === "Medium"}
              onChange={() => setTodoPriority("Medium")}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input create-radio"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={todoPriority === "High"}
              onChange={() => setTodoPriority("High")}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="create-form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
