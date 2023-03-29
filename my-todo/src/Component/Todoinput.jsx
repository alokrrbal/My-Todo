import React, { useState } from "react";
import styled from "styled-components";
import { addTodo, getTodo } from "../api";
import "./TodoInput.css";
const Todoinput = () => {
  const initialTodo = {
    title: "",
    priority: "",
    status: false,
  };

  const [todo, setTodo] = useState(initialTodo);

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setTodo((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    addTodo(todo).then(() => {
      alert("New Todo Added Sucessfully");
      getTodo();
    });
    setTodo(initialTodo);
  };

  return (
    <div className="inputBox">
      <h2 className="inpTit">Add New Todo</h2>
      <div className="formInBox">
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            name="title"
            onChange={handelOnChange}
            placeholder="Enter Todo Title"
            value={todo.title}
            required
          />
          <br />
          <select
            value={todo.priority}
            onChange={handelOnChange}
            name="priority"
            required
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <br />
          <button>Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default Todoinput;
