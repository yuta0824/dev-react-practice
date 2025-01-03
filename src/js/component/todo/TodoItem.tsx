import * as React from "react";
import { Todo } from "./TypeTodo";

type Props = {
  task: string;
  person: string;
  deadline: string;
};

export const TodoItem = ({ task, person, deadline }: Props) => {
  return (
    <li className="py-4">
      <p>タスク:{task}</p>
      <p>担当者:{person}</p>
      <p>締切:{deadline}</p>
    </li>
  );
};
