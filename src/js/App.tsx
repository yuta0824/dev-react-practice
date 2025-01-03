import * as React from "react";
import { useState } from "react";
import { TextField } from "./component/parts/TextField";
import { Todo } from "./component/todo/TypeTodo";
import { ButtonRegister } from "./component/parts/ButtonRegister";
import { Heading } from "./component/parts/Heading";
import { TodoList } from "./component/todo/TodoList";

export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");

  const addNewTodo = (): void => {
    setTodoList((prev) => [
      ...prev,
      {
        id: 1,
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ]);
  };

  return (
    <>
      <Heading label={"h1"}>TODOリスト</Heading>
      <Heading label={"h2"}>TODOを追加</Heading>
      <TextField label="TODO" type="text" value={newTask} onChange={setNewTask}></TextField>
      <TextField label="担当者" type="text" value={newPerson} onChange={setNewPerson}></TextField>
      <TextField
        label="閉め切り"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      ></TextField>
      <ButtonRegister onClick={addNewTodo}>登録</ButtonRegister>
      <Heading label={"h2"}>TODO一覧</Heading>
      <TodoList todoList={todoList}></TodoList>
    </>
  );
};
