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
import TitleList from "./pages/TitleList";
import VehicleList from "./pages/VehicleList";
import Notfound from './pages/Notfound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="CharacterList" element={<CharacterList />} />
          <Route path="CharacterList/:id" element={<Characters />} />
          <Route path="PlanetList" element={<PlanetList />} />
          <Route path="PlanetList/:id" element={<Planets />} />
          <Route path="SpeciesList" element={<SpeciesList />} />
          <Route path="SpeciesList/:id" element={<Species />} />
          <Route path="StarshipList" element={<StarshipList />} />
          <Route path="StarshipList/id" element={<Starships />} />
          <Route path="TitlesList" element={<TitleList />} />
          <Route path="VehiclesList" element={<VehicleList />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
  </>
  );
}

export default App;
