const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(express.json())
let todos = [];

// POST endpoint to store todo list
app.post('/todos', (req, res) => {
    const newTodos = req.body.todos;
    todos = newTodos;
    console.log('Todo list updated:', todos);
    res.send('Todo list updated on the server.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
