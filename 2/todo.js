let todos = []; // Initialize an empty array to store todos
const apiUrl = 'http://localhost:3000/'; // Replace this with your API URL

todoadd = function(add){
    if(!todos.includes(add)){
        todos.push(add);
    }
}

remove = function(rm){
    if (todos[rm] !== undefined && todos[rm] !== null) {
        todos.splice(rm, 1);
    }
}

getall = function(add, rm){
    todoadd(add);
    remove(rm);
    
    // Send the todos array to the server
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ todos: todos }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Todo list saved on the server.');
        } else {
            console.error('Failed to save todo list on the server.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Test the function
getall("Buy groceries", 0); // Add "Buy groceries" to the todo list and send to server
