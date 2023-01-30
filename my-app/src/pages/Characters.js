import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Characters() {
  const [character, setCharacter] = useState({});
  const [planet, setPlanet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await response.json();
        setCharacter(data);
        const planetResponse = await fetch(data.homeworld);
        const planetData = await planetResponse.json();
        setPlanet(planetData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <ul>
        <li>
          <h2>Name: {character.name}</h2>
        </li>
        <li>
          <p>Birth year: {character.birth_year}</p>
        </li>
        <li>
          <p>Eye color: {character.eye_color}</p>
        </li>
        <li>
          <h2>Home planet: {planet.name}</h2>
        </li>
        <li>
          <p>Climate: {planet.climate}</p>
        </li>
        <li>
          <p>Diameter: {planet.diameter}</p>
        </li>
        <li>
          <p>Orbital period: {planet.orbital_period}</p>
        </li>
        <li>
          <p>Rotation period: {planet.rotation_period}</p>
        </li>
        <li>
          <p>Surface water: {planet.surface_water}</p>
        </li>
        <li>
          <p>Terrain: {planet.terrain}</p>
        </li>
        <li>
          <p>Gravity: {planet.gravity}</p>
        </li>
      </ul>
      <Link to="../CharacterList">Back</Link>
    </>
  );
}
