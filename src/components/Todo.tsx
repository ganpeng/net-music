import React from "react";
import { useQuery } from "react-query";
import { getTodos } from "../service/todo";
export function Todo() {
  const { data } = useQuery("todos", getTodos);
  return (
    <div className="todo-cointainer">
      {data?.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
}
