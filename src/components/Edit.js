import React from "react";

function Edit({ film, GetFilms, setEdit, setListState }) {
  const titleComponent = "Edit film";
  const SaveEdition = (e, id) => {
    e.preventDefault();
    //conseguir el target de l'event
    let target = e.target;
    //Buscar el índex de l'objecte de la peli a actualitzar.
    const filmsStored = GetFilms();
    console.log(filmsStored);
    //Busquem el índex
    //amb el findInIndex--> busca per una condició un objecte dins d'un array d'objectes. et retorna el índex (0, 1, 2 ...)
    const index = filmsStored.findIndex((film) => film.id === id);
    // console.log("index es " + index);
    //crear objecte amb aquest index trobat
    let film_updated = {
      id,
      title: target.title.value,
      description: target.description.value,
    };

    //console.log("Resultat dedició: " + index + " " + film);
    //console.log(index, film);
    console.log(
      "Resultat dedició: " + index + " " + JSON.stringify(film_updated)
    );

    //actualitzar l'element amb el index
    filmsStored[index] = film_updated;
    console.log(filmsStored);

    //guardar l'arry objectes a l'storage
    localStorage.setItem("films", JSON.stringify(filmsStored));
    //actualitzar estats
    setListState(filmsStored);
    setEdit(0); //tanquem el formulari.
  };
  return (
    <div className="edit_form">
      <h3 className="title">{titleComponent}</h3>
      <form onSubmit={(e) => SaveEdition(e, film.id)}>
        <input
          type="text"
          name="title"
          className="title_edited"
          defaultValue={film.title}
        />
        <textarea
          name="description"
          defaultValue={film.description}
          className="description_edited"
        />
        <input type="submit" className="edit" value="Update" />
      </form>
    </div>
  );
}

export default Edit;
