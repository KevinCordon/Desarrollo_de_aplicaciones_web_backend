const express = require('express');
const router = express.Router();
const verifyApiKey = require('../middleware/auth');

let goals = [
  {
    id: 1,
    name: "Aprender Node.js",
    description: "Completar un curso básico de Node.js para backend"
  },
  {
    id: 2,
    name: "Hacer ejercicio",
    description: "Ir al gimnasio al menos 3 veces por semana"
  },
  {
    id: 3,
    name: "Leer un libro",
    description: "Terminar de leer un libro de desarrollo personal este mes"
  },
  {
    id: 4,
    name: "Ahorrar dinero",
    description: "Ahorrar al menos Q1000 al mes durante 6 meses"
  },
  {
    id: 5,
    name: "Crear un portafolio",
    description: "Diseñar y publicar un sitio web personal para mostrar mis proyectos"
  }
];

router.get('/getGoals', verifyApiKey, (req, res) => {
  res.status(200).json(goals);
});

router.post('/addGoal', verifyApiKey, (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Faltan parámetros: name o description' });
  }

  const newGoal = { id: Date.now(), name, description, dueDate };
  goals.push(newGoal);
  res.status(201).json({ message: 'Meta agregada', goal: newGoal });
});

router.delete('/removeGoal', verifyApiKey, (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID requerido' });
  }

  const initialLength = goals.length;
  goals = goals.filter(goal => goal.id !== id);

  if (goals.length === initialLength) {
    return res.status(400).json({ error: 'Meta no encontrada' });
  }

  res.status(200).json({ message: 'Meta eliminada' });
});

module.exports = router;
