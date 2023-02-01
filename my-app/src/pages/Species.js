import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Species() {
  const [species, setSpecies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  let list = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/species/?search=${name}`);
        const data = await response.json();
        list = data.results
        setSpecies(list[0]);
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
                <h2>Name: {species.name}</h2>
            </li>
            <li>
                <p>Classification: {species.classification}</p>
            </li>
            <li>
                <p>Designation: {species.designation}</p>
            </li>
            <li>
                <p>Average height: {species.average_height}</p>
            </li>
            <li>
                <p>Skin colors: {species.skin_colors}</p>
            </li>
            <li>
                <p>Hair colors: {species.hair_colors}</p>
            </li>
            <li>
                <p>Eye colors: {species.eye_colors}</p>
            </li>
            <li>
                <p>Average lifespan: {species.average_lifespan}</p>
            </li>
            <li>
                <p>Language: {species.language}</p>
            </li>
        </ul>
        )}
        <Link to="../SpeciesList">Back</Link>
        </>
    );
};