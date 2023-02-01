import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Vehicles() {
  const [vehicle, setVehicles] = useState({});
  const {name } = useParams();
  let list = []

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/vehicles/?search=${name}`);
        const data = await response.json();
        list = data.results
        setVehicles(list[0]);
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
                <h2>Name: {vehicle.name}</h2>
            </li>
            <li>
                <p>Model: {vehicle.model}</p>
            </li>
            <li>
                <p>Manufacturer: {vehicle.manufacturer}</p>
            </li>
            <li>
                <p>Cost in credits: {vehicle.cost_in_credits}</p>
            </li>
            <li>
                <p>Length: {vehicle.length}</p>
            </li>
            <li>
                <p>Max atmosphering speed: {vehicle.max_atmosphering_speed}</p>
            </li>
            <li>
                <p>Crew: {vehicle.crew}</p>
            </li>
            <li>
                <p>Passengers: {vehicle.passengers}</p>
            </li>
            <li>
                <p>Cargo capacity: {vehicle.cargo_capacity}</p>
            </li>
            <li>
                <p>Consumables: {vehicle.consumables}</p>
            </li>
        </ul>
        <Link to="../VehicleList">Back</Link>
        </>
    );
};