import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { ITodo } from "../constants/type";
import { getTodos, postTodo } from "../service/todo";
export function Todo() {
  const { isLoading, isError, data, error } = useQuery("todos", getTodos);
  // useQuery("todo", () => postTodo(todo));

  if (isLoading) {
    return <h2>...loading</h2>;
  }

  if (isError) {
    return <div>{{ error }}</div>;
  }

  return (
    <div className="todo-cointainer">
      {data?.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
}
