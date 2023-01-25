import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import HomePage from "./components/HomePage";
import CharacterList from "./components/CharacterList";
import PlanetList from "./components/PlanetList";
import SpeciesList from "./components/SpeciesList";
import StarshipList from "./components/StarshipList";
import TitleList from "./components/TitleList";
import VehicleList from "./components/VehicleList";
import NoPage from ".components/NoPage";
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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