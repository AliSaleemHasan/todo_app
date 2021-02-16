import "./App.css";
import { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <div className="app__login">
          <Login />
        </div>
      ) : (
        <div className="app_main">
          <Header></Header>
          <TodoList />
        </div>
      )}
    </div>
  );
}

export default App;
