let listaDeMusicas = [];



function agregarCancion() {
  const nuevaCancion = {
   titulo :  document.getElementById("titulo").value,
   artista :  document.getElementById("artista").value,
   duracion :  document.getElementById("duracion").value,
   genero :  document.getElementById("genero").value,
}
  
  if (!nuevaCancion.titulo || !nuevaCancion.artista || !nuevaCancion.duracion || !nuevaCancion.genero) {
  alert("Por favor, completa todos los campos antes de agregar la canción.");
  }else{
  listaDeMusicas.push(nuevaCancion);
  alert("La nueva cancion ha sido agregada")
  console.log("Lista actual:", listaDeMusicas);
  ["titulo", "artista", "duracion", "genero"].forEach(id => {
      document.getElementById(id).value = "";
  })}
}

function cancionesAñadidas() {
  const contenedor = document.getElementById("listaCompleta");
  contenedor.innerHTML = ""; 

  if (listaDeMusicas.length === 0) {
    contenedor.textContent = "No hay canciones agregadas.";
    return;
  }

  const lista = document.createElement("ul");

  listaDeMusicas.forEach(cancion => {
    const titulo = document.createElement("h3");
  titulo.textContent = `Lista de canciones: ${listaDeMusicas.length}`;
  contenedor.appendChild(titulo);
    const li = document.createElement("li");
    li.textContent = `${cancion.titulo} - ${cancion.artista} (${cancion.duracion} min) [${cancion.genero}]`;
    lista.appendChild(li);})
  contenedor.appendChild(lista);
}


  