const datos = {
  nombre: "Oscar",
  apellido: "Acho",
  edad: 25,
  altura: 165,
  eresDesarrollador: true,
};

let edad = datos.edad
console.log(edad)

const datos2 = {
    nombre: "Daniel",
    apellido: "Bautista",
    edad: 27,
    altura: 170,
    eresDesarrollador: false,
  };

  const datos3 = {
    nombre: "Cristhian",
    apellido: "Valencia",
    edad: 22,
    altura: 168,
    eresDesarrollador: false,
  };

  const lista = [datos,datos2,datos3]
  console.log(lista)

  const newLista = lista.sort((a,b)=>b.edad-a.edad)

  console.log(newLista)