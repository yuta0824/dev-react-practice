import * as React from "react";
import { Todo } from "./TypeTodo";
import { TodoItem } from "./TodoItem";

type Props = {
  todoList: Todo[];
};

export const TodoList = ({ todoList }: Props) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          id={todo.id}
          task={todo.task}
          person={todo.person}
          deadline={todo.deadline}
        ></TodoItem>
      ))}
    </ul>
  );
};
