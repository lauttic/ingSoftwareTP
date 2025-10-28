const tareasDiv = document.getElementById("tareas");
const form = document.getElementById("form");
const input = document.getElementById("titulo");

async function cargarTareas() {
  const res = await fetch("/api/tareas");
  const tareas = await res.json();
  tareasDiv.innerHTML = "";

  tareas.forEach(t => {
    const div = document.createElement("div");
    div.className = "tarea";
    div.innerHTML = `
      <span>${t.completada ? "✅" : "⬜"} ${t.titulo}</span>
      <div>
        <button class="completar" onclick="toggleTarea(${t.id})">${t.completada ? "Desmarcar" : "Completar"}</button>
        <button class="eliminar" onclick="eliminarTarea(${t.id})">Eliminar</button>
      </div>
    `;
    tareasDiv.appendChild(div);
  });
}

async function agregarTarea(titulo) {
  await fetch("/api/tareas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo })
  });
  cargarTareas();
}

async function eliminarTarea(id) {
  await fetch(`/api/tareas/${id}`, { method: "DELETE" });
  cargarTareas();
}

async function toggleTarea(id) {
  await fetch(`/api/tareas/${id}`, { method: "PUT" });
  cargarTareas();
}

form.addEventListener("submit", e => {
  e.preventDefault();
  agregarTarea(input.value);
  input.value = "";
});

cargarTareas();
