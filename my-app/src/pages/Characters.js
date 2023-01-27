import React from 'react'
import { Link, useParams } from 'react-router-dom';
let names, birth_year, eye;
export default function Characters(){
    const { id } = useParams();
    fetch('https://swapi.dev/api/people/' + id)
        .then(response => response.json())
        .then(json => {
            names = json.name;
            birth_year = json.birth_year;
            eye = json.eye_color;
    })
    return (
        <>
        <ul>
            <li>
                <p>namn: {names}</p>
            </li>
            <li>
                <p>birth_year: {birth_year}</p>
            </li>
            <li>
                <p>eye: {eye}</p>
            </li>
        </ul>
        <Link to="../CharacterList">Back</Link>
        </>
    );
};