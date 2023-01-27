import React from 'react'
import { Link } from 'react-router-dom';
let peopleInfoList = [];
let names = []
const CharacterList = () => {
    fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(json => {
            peopleInfoList = json.results
            console.log(peopleInfoList)
            for (let i = 0; i < peopleInfoList.length; i++) {
                names[i] = peopleInfoList[i].name
            }
    })
    .catch(error => {
    console.error(error);
    });
    return (
        <>
            <h1>Characters</h1>
            <ul>
                <li>
                    <Link to={"/CharacterList/" + 1}>{names[0]}</Link>
                </li>
                <li>
                    <Link to={"/CharacterList/" + 2}>{names[1]}</Link>
                </li>
                <li>
                    <Link to={"/CharacterList/" + 3}>{names[2]}</Link>
                </li>
                <li>
                    <Link to={"/CharacterList/" + 4}>{names[3]}</Link>
                </li>
                <li>
                    <Link to={"/CharacterList/" + 5}>{names[4]}</Link>
                </li>
                <li>
                    <Link to={"/CharacterList/" + 6}>{names[5]}</Link>
                </li>
                <li>
                    <Link to={"/CharacterList/" + 7}>{names[6]}</Link>
                </li>
                <li>
                    <Link to={"/CharacterList/" + 8}>{names[7]}</Link>
                </li>
                <li>
                    <Link to={"/CharacterList/" + 9}>{names[8]}</Link>
                </li>
                <li>
                    <Link to={"/CharacterList/" + 10}>{names[9]}</Link>
                </li>
            </ul>
            <br />
            <br />
            <Link to="../">Back</Link>
        </>
    );
};
export default CharacterList;
