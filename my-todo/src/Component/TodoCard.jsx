import React from "react";
import { deleteTodo, getTodo, toggleTodo } from "../api";
import "./Todo.css";
export const TodoCard = ({ id, title, priority, status }) => {
  const handelDelete = () => {
    deleteTodo(id).then(() => {
      alert("Todo Deleted Sucessfully");
      getTodo();
    });
  };

  const handelToggle = ()=>{
    toggleTodo(id,status);
  };

  return (
    <div className="todoCard">
      <p>Task-Id-{id}</p>
      <h4 className="todoTitle">{title}</h4>
      <h5> Priority - {priority}</h5>
      <div className="staDiv">
        {status ? <h4 className="stComp">Completed</h4> : <h4 className="stPen">Pending</h4>}
      </div>
      <button className="togBtn" onClick={handelToggle}>
        Toggle
      </button>
      <button className="dltBtn" onClick={handelDelete}>
        Delete
      </button>
    </div>
  );
};
