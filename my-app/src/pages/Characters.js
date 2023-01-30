import React from 'react'
import { Link, useParams } from 'react-router-dom';
let names, height, mass, hair_color, skin_color, eye_color, birth_year, gender ;
let planetName, climate, diameter, gravity, orbitalPeriod, population, rotationPeriod, surfaceWater, terrain;
export default function Characters(){
    const { id } = useParams();
    fetch('https://swapi.dev/api/people/' + id)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            names = json.name;
            height = json.height;
            mass = json.mass;
            hair_color = json.hair_color;
            skin_color = json.skin_color; 
            eye_color = json.eye_color;
            birth_year = json.birth_year;
            gender = json.gender;
            eye = json.eye_color;
            fetch(json.homeworld)
                .then(responseH => responseH.json())
                .then(jsonH => {
                    //console.log(jsonH);
                    planetName = jsonH.name
                    climate = jsonH.climate
                    diameter = jsonH.diameter
                    gravity = jsonH.gravity
                    orbitalPeriod = jsonH.orbital_period
                    population = jsonH.population
                    rotationPeriod = jsonH.rotation_period
                    surfaceWater = jsonH.rotation_period
                    terrain = jsonH.terrain
            })
    })
    return (
        <>
        <ul>
            <li>
                <p>Name: {names}</p>
            </li>
            <li>
                <p>Height: {height}</p>
            </li>
            <li>
                <p>Mass: {mass}</p>
            </li>
            <li>
                <p>Hair color: {hair_color}</p>
            </li>
            <li>
                <p>Skin color: {skin_color}</p>
            </li>
            <li>
                <p>Eye color: {eye_color}</p>
            </li>
            <li>
                <p>Birth year: {birth_year}</p>
            </li>
            <li>
                <p>Gender: {gender}</p>
            </li>
            <li>
                <h2>Homeplanet: {planetName}</h2>
            </li>
            <li>
                <p>Climate: {climate}</p>
            </li>
            <li>
                <p>Diameter: {diameter}</p>
            </li>
            <li>
                <p>Orbital period: {orbitalPeriod}</p>
            </li>
            <li>
                <p>Rotation period: {rotationPeriod}</p>
            </li>
            <li>
                <p>Surface water: {surfaceWater}</p>
            </li>
            <li>
                <p>Terrain: {terrain}</p>
            </li>
            <li>
                <p>Gravity: {gravity}</p>
            </li>
        </ul>
        <Link to="../CharacterList">Back</Link>
        </>
    );
};