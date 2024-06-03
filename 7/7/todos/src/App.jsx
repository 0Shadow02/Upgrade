import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { todocomponent } from './Store/Atoms/todocomponent'
import { todofilter } from './Store/Atoms/todofilter'
import { filterinput } from './Store/Atoms/filteratom'



function App() {
  return (
    <RecoilRoot>
      <Todoinput />
    </RecoilRoot>
  );
}

function Todoinput() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const setTodo = useSetRecoilState(todocomponent);
  const todo = useRecoilValue(todocomponent);

  const handleAddTodo = () => {
    if (title.trim() && description.trim()) {
      setTodo([...todo, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /> <br />
      <button onClick={handleAddTodo}>
        Create Todo
      </button> <br />
      <Filter /> <br />
      <RenderTodo />
    </>
  );
}

function RenderTodo() {
  const todo = useRecoilValue(todofilter);

  return (
    <>
      {todo.map((todos, index) => (
        <div key={index}>
          <h1>{todos.title}</h1>
          <h3>{todos.description}</h3>
        </div>
      ))}
    </>
  );
}

function Filter() {
  const setFilter = useSetRecoilState(filterinput);
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleFilterClick = () => {
    setFilter(filterText);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Filter input"
        value={filterText}
        onChange={handleFilterChange}
      /> <br />
      <button onClick={handleFilterClick}>Filter</button>
    </>
  );
}


export default App;