import { useState } from "react";
import Add from "./components/Add";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  const [listState, setListState] = useState([]);
  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MY FAVOURITES FILMS</h1>
      </header>

      {/*Barra de navegación*/}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">START</a>
          </li>
          <li>
            <a href="/#">FILMS</a>
          </li>
          <li>
            <a href="/#">BLOG</a>
          </li>
          <li>
            <a href="/#">CONTACT</a>
          </li>
        </ul>
      </nav>

      {/*Contenido principal*/}
      <section id="content" className="content">
        {/*aqui van las peliculas*/}
        <List listState={listState} setListState={setListState} />
      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
        <Search listState={listState} setListState={setListState} />
        <Add setListState={setListState} />
      </aside>

      {/*Pie de página*/}
      <footer className="footer">
        &copy; MASTER IN REACT -{" "}
        <a href="https://sergimolinafucker.cat">sergimolinafucker.cat</a>
      </footer>
    </div>
  );
}

export default App;
