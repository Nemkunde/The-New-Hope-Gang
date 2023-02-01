import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Starships() {
  const [starship, setStarships] = useState({});
  const { name} = useParams();
  let list = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/starships/?search=${name}`);
        const data = await response.json();
        list = data.results
        setStarships(list[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [name]);

    return (
        <>
        <ul>
            <li>
                <h2>Name: {starship.name}</h2>
            </li>
            <li>
                <p>Model: {starship.model}</p>
            </li>
            <li>
                <p>Manufacturer: {starship.manufacturer}</p>
            </li>
            <li>
                <p>Cost in credits: {starship.cost_in_credits}</p>
            </li>
            <li>
                <p>Length: {starship.length}</p>
            </li>

            <li>
                <p>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
            </li>
            <li>
                <p>Crew: {starship.crew}</p>
            </li>
            <li>
                <p>Passengers: {starship.passengers}</p>
            </li>
            <li>
                <p>Cargo capacity: {starship.cargo_capacity}</p>
            </li>
            <li>
                <p>Consumables: {starship.consumables}</p>
            </li>
        </ul>
        <Link to="../StarshipList">Back</Link>
        </>
    );
};