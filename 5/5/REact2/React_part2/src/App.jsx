import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, settodos] = useState([
    {
      title: "Workout",
      description: "Timings are 6pm to 8pm",
    },
    {
      title: "Study",
      description: "Timings are 3pm to 7:30pm",
    },
    {
      title: "Japanese",
      description: "learn katagana",
    },
  ]);

  return <Mytodorender todos={todos} settodos={settodos}></Mytodorender>;
}
function Mytodorender(props) {
  function randomtodo() {
    props.settodos([
      ...props.todos,
      {
        title: "Study",
        description: "Timings from 3pm to 7pm",
      },
    ]);
  }

  return (
    <div>
      {props.todos.map((todo) => (
        <div key={todo.title}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
      <button onClick={randomtodo}>Random</button>
    </div>
  );
}

export default App;
