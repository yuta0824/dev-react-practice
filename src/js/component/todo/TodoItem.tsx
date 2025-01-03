import * as React from "react";
import { Todo } from "./TypeTodo";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  return (
    <li key={todo.id}>
      <p>タスク:{todo.task}</p>
      <p>担当者:{todo.person}</p>
      <p>締切:{todo.deadline}</p>
    </li>
  );
};
