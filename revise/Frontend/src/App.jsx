import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Createtodo } from "./components/Createtodo";
import { Todos } from "./components/Todo";

function App() {
  const [todos, settodo] = useState([]);
  fetch("http://localhost:3000/todos").then(async function (response) {
    const json = await response.json();
    settodo(json);
    // console.log(json);
  });

  return (
    <div>
      <Createtodo></Createtodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
