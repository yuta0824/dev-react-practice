import * as React from "react";
import { useState } from "react";
import { TextField } from "./component/parts/TextField";
import { Todo } from "./component/todo/TypeTodo";
import { ButtonRegister } from "./component/parts/ButtonRegister";

export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");

  const addNewTodo = (): void => {
    setTodoList((prev) => [
      ...prev,
      {
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ]);
  };

  return (
    <>
      <TextField label="TODO" type="text" value={newTask} onChange={setNewTask}></TextField>
      <TextField label="担当者" type="text" value={newPerson} onChange={setNewPerson}></TextField>
      <TextField
        label="閉め切り"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      ></TextField>

      <ButtonRegister text="登録" onClick={addNewTodo}></ButtonRegister>

      <h2>TODOリスト</h2>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <p>タスク:{todo.task}</p>
            <p>担当者:{todo.person}</p>
            <p>締切:{todo.deadline}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
