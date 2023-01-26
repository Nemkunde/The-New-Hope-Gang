import './App.css';
import { Link, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import CharacterList from "./pages/CharacterList";
import PlanetList from "./pages/PlanetList";
import SpeciesList from "./pages/SpeciesList";
import StarshipList from "./pages/StarshipList";
import TitleList from "./pages/TitleList";
import VehicleList from "./pages/VehicleList";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/Characters">Characters</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/Characters" element={<CharacterList />} />
          <Route path="/Planets" element={<PlanetList />} />
          <Route path="/Species" element={<SpeciesList />} />
          <Route path="/Starships" element={<StarshipList />} />
          <Route path="/Titles" element={<TitleList />} />
          <Route path="/Vehicles" element={<VehicleList />} />
        </Route>
      </Routes>
  </>
  );
}

export default App;
