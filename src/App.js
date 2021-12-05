import React, { useState } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=fd2d0407";

  const search = (e) => {
    if (e.key === "Enter")
      axios(apiurl + "&s=" + state.s).then((data) => {
        console.log(data);
      });
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Finder</h1>
      </header>
      <main>
        <Searchbar handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
