import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Planets() {
  const [planet, setPlanet] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  let list = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/?search=${name}`);
        const data = await response.json();
        list = data.results
        setPlanet(list[0]);
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
                <h2>Name: {planet.name}</h2>
            </li>
            <li>
                <p>Rotation period: {planet.rotation_period}</p>
            </li>
            <li>
                <p>Orbital period: {planet.orbital_period}</p>
            </li>
            <li>
                <p>Diameter: {planet.diameter}</p>
            </li>
            <li>
                <p>Climate: {planet.climate}</p>
            </li>
            <li>
                <p>Gravity: {planet.gravity}</p>
            </li>
            <li>
                <p>Terrain: {planet.terrain}</p>
            </li>
            <li>
                <p>Population: {planet.population}</p>
            </li>
        </ul>
        )}
        <Link to="../PlanetList">Back</Link>
        </>
    );
};