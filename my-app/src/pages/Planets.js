import React from 'react'
import { Link, useParams } from 'react-router-dom';
let names, rotation_period, orbital_period, diameter, climate, gravity, terrain, population ;
export default function Characters(){
    const { id } = useParams();
    fetch('https://swapi.dev/api/planets/' + id)
        .then(response => response.json())
        .then(json => {
            names = json.name;
            rotation_period = json.rotation_period;
            orbital_period = json.orbital_period;
            diameter = json.diameter;
            climate = json.climate; 
            gravity = json.gravity;
            terrain = json.terrain;
            population = json.population;
    })
    return (
        <>
        <ul>
            <li>
                <p>Name: {names}</p>
            </li>
            <li>
                <p>Rotation period: {rotation_period}</p>
            </li>
            <li>
                <p>Orbiatal period: {orbital_period}</p>
            </li>
            <li>
                <p>Diameter: {diameter}</p>
            </li>
            <li>
                <p>Climate: {climate}</p>
            </li>
            <li>
                <p>Gravity: {gravity}</p>
            </li>
            <li>
                <p>Terrain: {terrain}</p>
            </li>
            <li>
                <p>Population: {population}</p>
            </li>
        </ul>
        <Link to="../PlanetList">Back</Link>
        </>
    );
};