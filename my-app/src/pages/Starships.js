import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Starships() {
  const [starship, setStarships] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/starships/${id}`);
        const data = await response.json();
        setStarships(data);
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
                <p>Name: {starship.name}</p>
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