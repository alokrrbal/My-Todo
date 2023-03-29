import React, { useEffect, useState } from "react";
import { getTodo } from "../api";
import Todoinput from "./Todoinput";
import "./Todo.css";
import { ShowTodo } from "./ShowTodo";
import { TodoCard } from "./TodoCard";

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodo().then((res) => setTodos(res.data));
  }, [todos]);

  return (
    <div className="mainTododBox">
      <h1 className="titel">TODO APP</h1>
      <hr className="hrr" />
      <Todoinput />

      <div className="todoMainBox">
        {todos.map((itm) => (
          <TodoCard key={itm.id} {...itm} />
        ))}
      </div>
    </div>
  );
};
