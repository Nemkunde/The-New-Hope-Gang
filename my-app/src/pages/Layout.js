import { Outlet, NavLink } from "react-router-dom";
import React from 'react'
const Layout = () => {
    return (
        <> <header>
            <nav className="nav">
                <a href="/" className= "nav-title">Star Wars API</a>
                <ul className="nav-categories">
                    <li>
                        <NavLink className= "nav-bar-link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-bar-link" to="/CharacterList" >Characters</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-bar-link" to= "/PlanetList" >Planets</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-bar-link" to= "/SpeciesList">Species</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-bar-link" to= "/StarshipList" >Starships</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-bar-link" to= "/FilmList" >Films</NavLink>
                    </li>
                    <li>
                        <NavLink className= "nav-bar-link" to= "/VehicleList" >Vehicles</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
        </>
    )
};

export default Layout;