import axios from "axios";
import { ITodo } from "../constants/type";

const apiRoot = process.env.REACT_APP_API_ROOT;

console.log(process.env);

export function getTodos(): Promise<ITodo[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiRoot}/todoss`)
      .then((response) => {
        resolve(response.data());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function postTodo(todo: ITodo) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiRoot}/todos`, todo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        resolve(response);
      });
  });
}
