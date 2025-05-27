const express = require('express');
const router = express.Router();

let tasks = [
  { 
    id: 1, 
    name: 'Comprar comida', 
    description: 'Ir al supermercado y comprar frutas y verduras' 
  },
  { 
    id: 2, 
    name: 'Estudiar JavaScript', 
    description: 'Repasar promesas, async/await y fetch' 
  },
  { 
    id: 3, 
    name: 'Hacer ejercicio', 
    description: 'Caminar 30 minutos o ir al gimnasio' 
}
];

router.get('/getTasks', (req, res) => {
  res.json(tasks);
});

router.post('/addTask', (req, res) => {
  const { id, name, description, } = req.body;
  const newTask = { id , name, description };
  tasks.push(newTask);
  res.status(201).json({ message: 'Tarea agregada', task: newTask });
});

router.delete('/removeTask', (req, res) => {
  const { id } = req.body;
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: 'Tarea eliminada' });
});

module.exports = router;