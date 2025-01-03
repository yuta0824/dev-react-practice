import * as React from "react";
import { useState } from "react";
import { TextField } from "./component/TextField";

export const App = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");

  const addTask = (inputValue: string) => {
    console.log("newTask: " + inputValue);
  };

  return (
    <main className="p-4 container mx-auto">
      <TextField label="TODO" type="text" value={newTask} onChange={addTask}></TextField>
      <TextField label="担当者" type="text" value={newPerson} onChange={setNewPerson}></TextField>
      <TextField
        label="閉め切り"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      ></TextField>

      <p>{newTask}</p>
      <p>{newPerson}</p>
      <p>{newDeadline}</p>
    </main>
  );
};
