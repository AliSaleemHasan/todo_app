import React from "react";
import "./Task.css";

import { Button, Checkbox } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "./firebase";
function Task({ text, Id, timestamp }) {
  const deleteTask = () => {
    db.collection("tasks").doc(Id).delete();
  };

  const editTask = () => {
    const editText = prompt("please enter your task");
    db.collection("tasks").doc(Id).set(
      {
        text: editText,
      },
      { merge: true }
    );
  };
  return (
    <div className="task">
      <div className="task__left">
        <Checkbox color="primary" />
      </div>

      <div className="task__info">
        <h4>{text}</h4>
        <p>Set At: {new Date(timestamp?.toDate()).toUTCString()}</p>
      </div>

      <div className="task__right">
        <Button>
          <Edit onClick={editTask} />
        </Button>
        <Button onClick={deleteTask}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}

export default Task;
