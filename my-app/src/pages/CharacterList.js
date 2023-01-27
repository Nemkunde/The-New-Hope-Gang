import React from 'react'
import { Link } from 'react-router-dom';
let carname;
const CharacterList = () => {
    fetch('https://swapi.dev/api/people/1/')
        .then(response => response.json())
        .then(json => {
            carname = json.name;
    })
    .catch(error => {
      console.error(error);
    });
    return (
        <>
            <h1>Characters</h1>
            <Link to={"/CharacterList/" + carname}>{carname}</Link>
            <br />
            <Link to="/CharacterList/Joda">Joda</Link>
            <br />
            <br />
            <Link to="../">Back</Link>
        </>
    );
};
export default CharacterList;
