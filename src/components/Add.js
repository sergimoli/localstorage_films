import React, { useState } from "react";
import { SaveInStorage } from "../helpers/SaveInStorage";

function Add({ setListState }) {
  const [filmState, setFilmState] = useState({
    title: "",
    description: "",
  });

  const { title, description } = filmState; //faig una destructuració

  const titleComponent = "Add film";
  const GetFormValues = (e) => {
    //evitar carregui sempre la pantalla (pels formularis.)
    e.preventDefault();

    //conseguir dades del formulari
    let target = e.target;
    let title = e.target.title.value;
    let description = e.target.description.value;

    alert(title + " " + description);

    //crear objecte de la pelicula
    let film = {
      id: new Date().getTime(),
      title,
      description,
    };
    //guardar estat
    setFilmState(film);

    //Actualitzar l'estat del llistat principal
    //afegim als elements que teniem el nou element
    setListState((element) => {
      return [...element, film];
    });

    //guardar enmagatzament local
    SaveInStorage("films", film);
    // console.log(filmState);
  };

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>
      <strong>
        {title &&
          description &&
          "you have been created the following film:" + title}
      </strong>

      <form onSubmit={GetFormValues}>
        <input type="text" id="title" placeholder="Titulo" name="title" />
        <textarea id="description" placeholder="Descripción"></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
}

export default Add;
