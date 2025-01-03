import * as React from "react";
import { Todo } from "./TypeTodo";

type Props = {
  id: number;
  task: string;
  person: string;
  deadline: string;
};

export const TodoItem = ({ id, task, person, deadline }: Props) => {
  return (
    <li key={id}>
      <p>タスク:{task}</p>
      <p>担当者:{person}</p>
      <p>締切:{deadline}</p>
    </li>
  );
};
