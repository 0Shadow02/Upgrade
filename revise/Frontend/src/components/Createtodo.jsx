import React, { useState } from "react";

export function Createtodo() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        onChange={function (e) {
          const value = e.target.value;
          settitle(value);
        }}
      />{" "}
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        onChange={function (e) {
          const value = e.target.value;
          setdescription(value);
        }}
      />{" "}
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "post",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "content-type": "application/json",
            },
          }).then(async function (response) {
            const json = await response.json();
            alert("todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
