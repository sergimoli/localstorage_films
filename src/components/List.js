import React, { useEffect, useState } from "react";
import Edit from "./Edit";

function List({ listState, setListState }) {
  // const [listState, setListState] = useState([]);
  const [edit, setEdit] = useState(0);

  useEffect(() => {
    GetFilms();
  }, []);

  const GetFilms = () => {
    //json.parse per convertir el json string que ve del local storage a un ojbecte usable dins array objectes javascript. Si només agafem 'localstorage.getitems("fims")' objenim : [object Object]
    let films = JSON.parse(localStorage.getItem("films"));
    // console.log("ppipi " + localStorage.getItem("films"));
    setListState(films);

    // console.log("el listate es:" + listState);
    // alert(listState);

    return films;
  };

  const DeleteFilm = (id) => {
    // alert(id);
    //conseguir pelicules enmagatzemades
    let films_saved = GetFilms();
    //filtrar aquestes pelis per que elimini del array la que no vulgui
    let new_array_films = films_saved.filter(
      (film) => film.id !== parseInt(id)
    );

    // console.log(new_array_films);
    //actualitzar state del llistat
    setListState(new_array_films);
    //actualitzar dades del localstorage
    localStorage.setItem("films", JSON.stringify(new_array_films));
  };

  return (
    <>
      {/* {listState != null || !listState.length ? ( */}
      {listState != null ? (
        listState.map((film) => {
          return (
            <article key={film.id} className="peli-item">
              <h3 className="title">{film.title}</h3>
              <p className="description">{film.description}</p>

              <button
                onClick={() => {
                  setEdit(film.id);
                }}
                className="edit"
              >
                Editar
              </button>
              <button onClick={() => DeleteFilm(film.id)} className="delete">
                Borrar
              </button>
              {/* apareix formulari editar */}
              {edit === film.id && (
                <Edit
                  film={film}
                  GetFilms={GetFilms}
                  setEdit={setEdit}
                  setListState={setListState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>THERE ARE NO FILMS TO SHOW YOU, MOTHERFUCKER!!!</h2>
      )}
    </>
  );
}

export default List;
