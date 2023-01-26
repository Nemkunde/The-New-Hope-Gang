import React from 'react'
import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import CharacterList from "./pages/CharacterList";
import PlanetList from "./pages/PlanetList";
import SpecieList from "./pages/SpecieList";
import StarshipList from "./pages/StarshipList";
import TitleList from "./pages/TitleList";
import VehicleList from "./pages/VehicleList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/CharacterList" element={<CharacterList />} />
          <Route path="/PlanetList" element={<PlanetList />} />
          <Route path="/SpecieList" element={<SpecieList />} />
          <Route path="/StarshipList" element={<StarshipList />} />
          <Route path="/TitleList" element={<TitleList />} />
          <Route path="/VehicleList" element={<VehicleList />} />
        </Route>
      </Routes>
  </>
  );
}

export default App;
