import React from 'react'
import { Link } from 'react-router-dom';
let planetInfoList = [];
let names = []
const PlanetList = () => {
    fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(json => {
            planetInfoList = json.results
            console.log(planetInfoList)
            for (let i = 0; i < planetInfoList.length; i++) {
                names[i] = planetInfoList[i].name
            }
    })
    .catch(error => {
    console.error(error);
    });
    return (
        <>
            <h1>Planets</h1>
            <ul>
                <li>
                    <Link to={"/PlanetList/" + 1}>{names[0]}</Link>
                </li>
                <li>
                    <Link to={"/PlanetList/" + 2}>{names[1]}</Link>
                </li>
                <li>
                    <Link to={"PlanetList/" + 3}>{names[2]}</Link>
                </li>
                <li>
                    <Link to={"PlanetList/" + 4}>{names[3]}</Link>
                </li>
                <li>
                    <Link to={"PlanetList/" + 5}>{names[4]}</Link>
                </li>
                <li>
                    <Link to={"PlanetList/" + 6}>{names[5]}</Link>
                </li>
                <li>
                    <Link to={"PlanetList/" + 7}>{names[6]}</Link>
                </li>
                <li>
                    <Link to={"PlanetList/" + 8}>{names[7]}</Link>
                </li>
                <li>
                    <Link to={"PlanetList/" + 9}>{names[8]}</Link>
                </li>
                <li>
                    <Link to={"PlanetList/" + 10}>{names[9]}</Link>
                </li>
            </ul>
            <br />
            <br />
            <Link to="../">Back</Link>
        </>
    );
};
export default PlanetList;
