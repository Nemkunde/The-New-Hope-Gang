import React from 'react'
import { Link } from 'react-router-dom';
let starshipInfoList = [];
let names = []
const StarshipList = () => {
    fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(json => {
            starshipInfoList = json.results
            console.log(starshipInfoList)
            for (let i = 0; i < starshipInfoList.length; i++) {
                names[i] = starshipInfoList[i].name
            }
    })
    .catch(error => {
    console.error(error);
    });
    return (
        <>
            <h1>Starships</h1>
            <ul>
                <li>
                    <Link to={"/StarshipList/" + 1}>{names[0]}</Link>
                </li>
                <li>
                    <Link to={"/StarshipList/" + 2}>{names[1]}</Link>
                </li>
                <li>
                    <Link to={"/StarshipList/" + 3}>{names[2]}</Link>
                </li>
                <li>
                    <Link to={"/StarshipList/" + 4}>{names[3]}</Link>
                </li>
                <li>
                    <Link to={"/StarshipList/" + 5}>{names[4]}</Link>
                </li>
                <li>
                    <Link to={"/StarshipList/" + 6}>{names[5]}</Link>
                </li>
                <li>
                    <Link to={"/StarshipList/" + 7}>{names[6]}</Link>
                </li>
                <li>
                    <Link to={"/StarshipList/" + 8}>{names[7]}</Link>
                </li>
                <li>
                    <Link to={"/StarshipList/" + 9}>{names[8]}</Link>
                </li>
                <li>
                    <Link to={"/StarshipList/" + 10}>{names[9]}</Link>
                </li>
            </ul>
            <br />
            <br />
            <Link to="../">Back</Link>
        </>
    );
};
export default StarshipList;
