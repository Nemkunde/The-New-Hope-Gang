import React from 'react'
import { Link, useParams } from 'react-router-dom';
let names, height, mass, hair_color, skin_color, eye_color, birth_year, gender ;
export default function Characters(){
    const { id } = useParams();
    fetch('https://swapi.dev/api/people/' + id)
        .then(response => response.json())
        .then(json => {
            names = json.name;
            height = json.height;
            mass = json.mass;
            hair_color = json.hair_color;
            skin_color = json.skin_color; 
            eye_color = json.eye_color;
            birth_year = json.birth_year;
            gender = json.gender;
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
        </ul>
        <Link to="../CharacterList">Back</Link>
        </>
    );
};