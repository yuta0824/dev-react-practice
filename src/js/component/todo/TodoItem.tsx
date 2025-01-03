import * as React from "react";
import { Todo } from "./TypeTodo";

type Props = {
  key: number;
  task: string;
  person: string;
  deadline: string;
};

export const TodoItem = ({ key, task, person, deadline }: Props) => {
  return (
    <li key={key}>
      <p>タスク:{task}</p>
      <p>担当者:{person}</p>
      <p>締切:{deadline}</p>
    </li>
  );
};
