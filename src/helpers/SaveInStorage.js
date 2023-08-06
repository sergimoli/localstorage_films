export const SaveInStorage = (key, element) => {
  //conseguir els elemnts que tenim a l'estoage
  let elements = JSON.parse(localStorage.getItem(key));
  console.log(elements);
  //comprobar si es un array
  if (Array.isArray(elements)) {
    console.log("1");
    //afegir un nou element
    elements.push(element);
  } else {
    //crear un array amb la nova peli
    console.log("2");
    elements = [element];
  }
  //guardar en el localstorage
  //localStorage.setItem("films", JSON.stringify([film]));
  localStorage.setItem(key, JSON.stringify(elements));
  //retornar objecte guardat
  return element;
};
