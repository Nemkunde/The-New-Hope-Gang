import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage";
import CharacterList from "./Components/CharacterList";
import PlanetList from "./Components/PlanetList";
import SpeciesList from "./Components/SpeciesList";
import StarshipList from "./Components/StarshipList";
import TitleList from "./Components/TitleList";
import VehicleList from "./Components/VehicleList";
import NoPage from ".Components/NoPage";
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="Characters" element={<CharacterList />} />
          <Route path="Planets" element={<PlanetList />} />
          <Route path="Species" element={<SpeciesList />} />
          <Route path="Starships" element={<StarshipList />} />
          <Route path="Titles" element={<TitleList />} />
          <Route path="Vehicles" element={<VehicleList />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



