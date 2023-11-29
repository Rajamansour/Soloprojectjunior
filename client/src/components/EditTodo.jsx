// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EditTodo = (props) => {
//   const [todoDescription, setTodoDescription] = useState("");
//   const [todoResponsible, setTodoResponsible] = useState("");
//   const [todoPriority, setTodoPriority] = useState("");
//   const [todoCompleted, setTodoCompleted] = useState(false);

//   useEffect(() => {
//     const todoId = props.match?.params?.id;

//     if (todoId) {
//       axios
//         .get("http://localhost:8080/todos/" + todoId)
//         .then((res) => {
//           setTodoDescription(res.data.todo_descripition);
//           setTodoResponsible(res.data.todo_responsible);
//           setTodoPriority(res.data.todo_priority);
//           setTodoCompleted(res.data.todo_completed);
//         })
//         .catch((err) => {
//           console.log("error: ", err);
//         });
//     }
//   }, [props.match?.params?.id]);

//   const onChangeTodoDescription = (event) => {
//     setTodoDescription(event.target.value);
//   };

//   const onChangeTodoResponsible = (event) => {
//     setTodoResponsible(event.target.value);
//   };

//   const onChangeTodoPriority = (event) => {
//     setTodoPriority(event.target.value);
//   };

//   const onChangeTodoCompleted = () => {
//     setTodoCompleted(!todoCompleted);
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();

//     const updatedTodo = {
//       todo_descripition: todoDescription,
//       todo_responsible: todoResponsible,
//       todo_priority: todoPriority,
//       todo_completed: todoCompleted,
//     };

//     axios
//       .post(
//         "http://localhost:8080/todos/update/" + props.match.params.id,
//         updatedTodo
//       )
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log("error: ", err);
//       });

//     props.history.push("/");
//   };

//   return (
//     <div style={{ marginTop: 40 }}>
//       <h3>Update Todo</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label>Description: </label>
//           <input
//             type="text"
//             className="form-control"
//             value={todoDescription}
//             onChange={onChangeTodoDescription}
//           />
//         </div>
//         <div className="form-group">
//           <label>Responsible: </label>
//           <input
//             type="text"
//             className="form-control"
//             value={todoResponsible}
//             onChange={onChangeTodoResponsible}
//           />
//         </div>
//         <div className="form-group">
//           <label>Priority: </label>
//           <br />
//           <div className="form-check form-check-inline">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="priorityOptions"
//               id="priorityLow"
//               value="Low"
//               checked={todoPriority === "Low"}
//               onChange={onChangeTodoPriority}
//             />
//             <label className="form-check-label">Low</label>
//           </div>
//           <div className="form-check form-check-inline">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="priorityOptions"
//               id="priorityMedium"
//               value="Medium"
//               checked={todoPriority === "Medium"}
//               onChange={onChangeTodoPriority}
//             />
//             <label className="form-check-label">Medium</label>
//           </div>
//           <div className="form-check form-check-inline">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="priorityOptions"
//               id="priorityHigh"
//               value="High"
//               checked={todoPriority === "High"}
//               onChange={onChangeTodoPriority}
//             />
//             <label className="form-check-label">High</label>
//           </div>
//           <br />
//           <br />
//         </div>
//         <div className="form-group">
//           <br />
//           <div className="form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="completedCheckBox"
//               name="completedCheckBox"
//               onChange={onChangeTodoCompleted}
//               checked={todoCompleted}
//             />
//             <label className="form-check-label" htmlFor="completedCheckBox">
//               Completed
//             </label>
//           </div>
//           <br />
//         </div>
//         <div className="form-group">
//           <input
//             type="submit"
//             value="Update Todo"
//             className="btn btn-primary"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditTodo;
