const express = require('express');
const app = express();
const PORT = 3000; // You can use any available port number

app.use(express.json()); // To parse JSON data in requests

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

// In-memory tasks data (for demonstration purposes, you should use a database in a production environment)
let tasks = [];

// API endpoints to handle tasks
app.get('/tasks', (req, res) => {
  // Return all tasks as JSON
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  // Create a new task from the request body
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:taskId', (req, res) => {
  // Update the completed status of a task
  const taskId = parseInt(req.params.taskId);
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      task.completed = req.body.completed;
    }
    return task;
  });
  
  res.json({ message: 'Task updated successfully' });
});

app.delete('/tasks/:taskId', (req, res) => {
  // Delete a task based on its ID
  const taskId = parseInt(req.params.taskId);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.json({ message: 'Task deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


