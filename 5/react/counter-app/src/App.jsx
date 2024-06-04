import { useState } from "react";

function App() {
  const [Todos, setTodos] = useState([
    {
      title: "Gym",
      description: "Timings 6 to 8",
      completed: false,
    },
    {
      title: "Learn ML",
      description: "Nueral networks",
      completed: true,
    },
  ]);
  function rantodo() {
    setTodos([
      ...Todos,
      {
        title: "Learn Japanese",
        description: "Hiragana and katagana",
      },
      {
        title: "Random",
        description: "Error 404",
      },
    ]);
  }
  return (
    <div>
      <button onClick={rantodo}>Add a random todo</button>
      {Todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
