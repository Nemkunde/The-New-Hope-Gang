import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Characters() {
  const [character, setCharacter] = useState([]);
  const [planet, setPlanet] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  let list = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
        const data = await response.json();
        list = data.results
        setCharacter(list[0]);
        //console.log(list[0])
        const planetResponse = await fetch(list[0].homeworld);
        const planetData = await planetResponse.json();
        setPlanet(planetData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [name]);
  return (
    <>
      {isLoading ? <p>Loading...</p> : (
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
            <p>Hair color: {character.hair_color}</p>
          </li>
          <li>
            <p>Skin color: {character.skin_color}</p>
          </li>
          <li>
            <p>Gender: {character.gender}</p>
          </li>
          <li>
            <p>Height: {character.height}</p>
          </li>
          <li>
            <p>Mass: {character.mass}</p>
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
        )}
      
      <Link to="../CharacterList">Back</Link>
    </>
  );
}
