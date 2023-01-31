import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Planets() {
  const [planet, setPlanet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}`);
        const data = await response.json();
        setPlanet(data);
        console.log(data)
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
                <p>Name: {planet.name}</p>
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
        <Link to="../PlanetList">Back</Link>
        </>
    );
};