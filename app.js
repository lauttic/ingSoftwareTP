const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Servir archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Datos en memoria
let tareas = [
  { id: 1, titulo: "Aprender Docker", completada: false },
  { id: 2, titulo: "Subir el TP a GitHub", completada: true }
];

// Endpoints de la API
app.get("/api/tareas", (req, res) => res.json(tareas));

app.post("/api/tareas", (req, res) => {
  const { titulo } = req.body;
  if (!titulo) return res.status(400).json({ error: "Falta el título" });
  const nueva = { id: Date.now(), titulo, completada: false };
  tareas.push(nueva);
  res.status(201).json(nueva);
});

app.delete("/api/tareas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const antes = tareas.length;
  tareas = tareas.filter(t => t.id !== id);
  if (tareas.length === antes) return res.status(404).json({ error: "No encontrada" });
  res.json({ mensaje: "Eliminada correctamente" });
});

app.put("/api/tareas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) return res.status(404).json({ error: "No encontrada" });
  tarea.completada = !tarea.completada;
  res.json(tarea);
});

app.listen(port, () => {
  console.log(`✅ API y frontend corriendo en http://localhost:${port}`);
});
