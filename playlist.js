let listaDeMusicas = [];

function recirbirDatos(){
  let titulo =  document.getElementById("titulo").value;
  let artista =  document.getElementById("artista").value;
  let duracion =  document.getElementById("duracion").value;
  let genero =   document.getElementById("genero").value;
  let cancion = {titulo, artista,duracion,genero}
  return cancion;
}



function agregarCancion () {
    let cancionNueva =
    listaDeMusicas.push(recirbirDatos())
    return ;
}