import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import CharacterList from "./pages/CharacterList";
import Characters from "./pages/Characters";
import PlanetList from "./pages/PlanetList";
import SpeciesList from "./pages/SpeciesList";
import StarshipList from "./pages/StarshipList";
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
          <Route path="PlanetsList" element={<PlanetList />} />
          <Route path="SpeciesList" element={<SpeciesList />} />
          <Route path="StarshipsList" element={<StarshipList />} />
          <Route path="TitlesList" element={<TitleList />} />
          <Route path="VehiclesList" element={<VehicleList />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
  </>
  );
}

export default App;
