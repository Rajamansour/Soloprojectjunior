import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/create";
import Todolist from "./components/ToDoList";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import logo from "./logo.jpg";

const App = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [deleted, setDeleted] = useState(false);

  const navigateTo = (newPath) => {
    window.history.pushState({}, "", newPath);
    setPath(newPath);
  };

  const deletetodo = (music) => {
    let id = music._id;
    let newUrl = url + "/" + id;
    axios
      .delete(newUrl)
      .then((response) => setDeleted(!deleted))
      .catch((error) => console.log(error));
  };

  const renderComponent = () => {
    if (path === "/") {
      return <Todolist />;
    }

    if (path === "/create") {
      return <Create />;
    }

    return <Todolist deleted={deleted} />;
  };
  return (
    <Router>
      <div className="background-video">
        <iframe
          width="560"
          height="315"
          src="https://www.milktruckfilms.com/"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <img src={logo} width="30" height="30" alt="logo" /> */}
          {/* <span className="navbar-brand" onClick={() => navigateTo("/")}>
            Todo App
          </span> */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <button className="nav-item" onClick={() => navigateTo("/")}>
                AllTodos
              </button>
              <button
                className="nav-item"
                onClick={() => navigateTo("/create")}
              >
                Create Todo
              </button>
            </ul>
          </div>
        </nav>

        {renderComponent()}
      </div>
    </Router>
  );
};

export default App;