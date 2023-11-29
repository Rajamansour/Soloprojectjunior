import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const TodoList = ({ todo, setRender, render }) => {
  const [inputVal, setInputVal] = useState("");
  const { description, member, priority } = todo || {};
  const [show, setShow] = useState(false);
  const onSubmit = async (id, obj) => {
    try {
      await axios.put(`http://localhost:8080/todos/${id}`, obj);
      setShow(!show);
      setRender(!render)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr>
      <td className={todo.todo_completed ? "completed" : ""}>
        {todo.todo_descripition} <br />
        {show && (
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        )}
      </td>
      <td className={todo.todo_completed ? "completed" : ""}>
        {todo.todo_responsible}
      </td>
      <td className={todo.todo_completed ? "completed" : ""}>
        {todo.todo_priority}
      </td>
      <td>
        {/* {<Link to={`/edit/${todo._id}`}>Edit</Link>} */}
        {!show && <button onClick={() => setShow(!show)}>Edit</button>}
        {show && (
          <button
            onClick={() => onSubmit(todo._id, { todo_descripition: inputVal })}
          >
            submit
          </button>
        )}
      </td>
    </tr>
  );
};

const Todolist = ({Todo}) => {
  const [todos, setTodos] = useState([]);
  const [render,setRender]=useState(false);
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/todos");
      setTodos(response.data);
      // setRender(!render)
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [render]);

  // const Todolist = () => {
  //   return todos.map((currentTodo) => (
  //     <TodoList todo={currentTodo} key={currentTodo._id} />
  //   ));
  // };

  return (
    <div className="nav">

      <div className="text-center pt-3 pb-2">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
          alt="Check"
          width="60"
        />
        <h2 className="my-4">Task List</h2>
      </div>
      <table className="table text-white mb-0">
        <div>
          {todos.map((todo) => (
            <TodoList key={todo.id} todo={todo} setRender={setRender} render={render}/>
          ))}
        </div>

        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Member</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};


export default Todolist;
