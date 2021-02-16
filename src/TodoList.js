import React, { useEffect } from "react";
import Add from "@material-ui/icons/Add";
import "./TodoList.css";
import Send from "@material-ui/icons/Send";
import { Button, Input } from "@material-ui/core";
import { useState } from "react";
import Task from "./Task";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
function TodoList() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    db.collection("tasks").onSnapshot((snapshot) =>
      setTask(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
          ID: doc.id,
        }))
      )
    );
  }, []);
  const AddTask = (e) => {
    e.preventDefault();
    db.collection("tasks").add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="todoList">
      <div className="todoList__add">
        <Add />
        <form action="">
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            placeholder="Add a task"
          />
          <Button onClick={AddTask} disabled={!input} type="submit">
            <Send />
          </Button>
        </form>
      </div>

      {task.map((t) => (
        <Task
          key={t.ID}
          text={t.data?.text}
          Id={t.ID}
          timestamp={t.data.timestamp}
        />
      ))}
    </div>
  );
}

export default TodoList;
