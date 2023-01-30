import React from 'react'
import { Link, useParams } from 'react-router-dom';
let names, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, language;
export default function Characters(){
    const { id } = useParams();
    fetch('https://swapi.dev/api/species/' + id)
        .then(response => response.json())
        .then(json => {
            names = json.name;
            classification = json.classification;
            designation = json.designation;
            average_height = json.average_height;
            skin_colors = json.skin_colors; 
            hair_colors = json.hair_colors;
            eye_colors = json.eye_colors;
            average_lifespan = json.average_lifespan;
            language = json.language;
    })
    return (
        <>
        <ul>
            <li>
                <p>Name: {names}</p>
            </li>
            <li>
                <p>Classification: {classification}</p>
            </li>
            <li>
                <p>Designation: {designation}</p>
            </li>
            <li>
                <p>Average height: {average_height}</p>
            </li>
            <li>
                <p>Skin colors: {skin_colors}</p>
            </li>
            <li>
                <p>Hair colors: {hair_colors}</p>
            </li>
            <li>
                <p>Eye colors: {eye_colors}</p>
            </li>
            <li>
                <p>Average lifespan: {average_lifespan}</p>
            </li>
            <li>
                <p>Language: {language}</p>
            </li>
        </ul>
        <Link to="../SpeciesList">Back</Link>
        </>
    );
};