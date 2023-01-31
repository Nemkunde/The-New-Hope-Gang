import React from 'react'
import { Link, useParams } from 'react-router-dom';
let names, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables;
export default function Characters(){
    const { id } = useParams();
    fetch('https://swapi.dev/api/starships/' + id)
        .then(response => response.json())
        .then(json => {
            names = json.name;
            model = json.model;
            manufacturer = json.manufacturer;
            cost_in_credits = json.length;
            max_atmosphering_speed = json.max_atmosphering_speed; 
            crew = json.crew;
            passengers= json.passengers;
            cargo_capacity = json.cargo_capacity;
            consumables = json.consumables;
    })
    return (
        <>
        <ul>
            <li>
                <p>Name: {names}</p>
            </li>
            <li>
                <p>Model: {model}</p>
            </li>
            <li>
                <p>Manufacturer: {manufacturer}</p>
            </li>
            <li>
                <p>Cost in credits: {cost_in_credits}</p>
            </li>
            <li>
                <p>Length: {length}</p>
            </li>

            <li>
                <p>Max atmosphering speed: {max_atmosphering_speed}</p>
            </li>
            <li>
                <p>Crew: {crew}</p>
            </li>
            <li>
                <p>Passengers: {passengers}</p>
            </li>
            <li>
                <p>Cargo capacity: {cargo_capacity}</p>
            </li>
            <li>
                <p>Consumables: {consumables}</p>
            </li>
        </ul>
        <Link to="../StarshipList">Back</Link>
        </>
    );
};