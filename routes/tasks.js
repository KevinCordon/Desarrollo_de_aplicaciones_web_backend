const express = require('express');
const router = express.Router();
const verifyApiKey = require('../middleware/auth');

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


router.get('/getTasks', verifyApiKey, (req, res) => {
  res.status(200).json(tasks);
});

router.post('/addTask', verifyApiKey, (req, res) => {
  const { id, name, description } = req.body;

  if (!id || !name || !description) {
    return res.status(400).json({ error: 'Faltan parámetros: id, name o description' });
  }

  const newTask = { id, name, description };
  tasks.push(newTask);
  res.status(200).json({ message: 'Tarea agregada', task: newTask });
});

router.delete('/removeTask', verifyApiKey, (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Falta el parámetro id' });
  }

  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);

  if (tasks.length === initialLength) {
    return res.status(400).json({ error: 'No se encontró la tarea con ese id' });
  }

  res.status(200).json({ message: 'Tarea eliminada' });
});

module.exports = router;
