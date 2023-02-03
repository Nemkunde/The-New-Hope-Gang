import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import CharacterList from "./pages/CharacterList";
import Characters from "./pages/Characters";
import PlanetList from "./pages/PlanetList";
import Planets from "./pages/Planets";
import SpeciesList from "./pages/SpeciesList";
import Species from "./pages/Species";
import StarshipList from "./pages/StarshipList";
import Starships from "./pages/Starships";
import FilmList from "./pages/FilmList";
import Films from "./pages/Films";
import Notfound from './pages/Notfound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="CharacterList" element={<CharacterList />} />
          <Route path="CharacterList/:name" element={<Characters />} />
          <Route path="PlanetList" element={<PlanetList />} />
          <Route path="PlanetList/:name" element={<Planets />} />
          <Route path="SpeciesList" element={<SpeciesList />} />
          <Route path="SpeciesList/:name" element={<Species />} />
          <Route path="StarshipList" element={<StarshipList />} />
          <Route path="StarshipList/:name" element={<Starships />} />
          <Route path="FilmList" element={<FilmList />} />
          <Route path="FilmList/:title" element={<Films />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
  </>
  );
}

export default App;
