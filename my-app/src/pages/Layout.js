import { Outlet, Link } from "react-router-dom";
import React from 'react'
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HomePage</Link>
                    </li>
                    <li>
                        <Link to="/CharacterList">Characters</Link>
                    </li>
                    <li>
                        <Link to= "/PlanetList">Planets</Link>
                    </li>
                    <li>
                        <Link to= "/SpeciesList">Species</Link>
                    </li>
                    <li>
                        <Link to= "/StarshipList">Starships</Link>
                    </li>
                    <li>
                        <Link to= "/FilmList">Films</Link>
                    </li>
                    <li>
                        <Link to= "/VehicleList">Vehicles</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;