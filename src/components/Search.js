import React, { useState } from "react";

function Search({ listState, setListState }) {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const SearchFilm = (e) => {
    //crear estat i actualitzar
    setSearch(e.target.value);
    console.log(search);
    //filtrar per buscar coinicidències.
    let filmsFound = listState.filter((film) => {
      return film.title.toLowerCase().includes(search.toLowerCase());
    });
    //comprboar si hi ha un resultat
    if (search.length <= 1 || filmsFound <= 0) {
      // console.log(search.length + " longitud!!");
      filmsFound = JSON.parse(localStorage.getItem("films"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    console.log(filmsFound);
    //donar valor de tot el localstorage
    //actualitzar estat del llistat princiapl amb el que he aconseguit filtrar
    setListState(filmsFound);
  };
  return (
    <div className="search">
      <h3 className="title">Buscador: {search}</h3>
      {notFound && search.length > 1 && (
        <span className="not-found">NO COINCIDENCE!</span>
      )}

      <form>
        <input
          type="text"
          id="search_field"
          name="search"
          autoComplete="off"
          value={search}
          onChange={SearchFilm}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
}

export default Search;
