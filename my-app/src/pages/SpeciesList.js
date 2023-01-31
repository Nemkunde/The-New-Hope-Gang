import React from 'react'
import { Link } from 'react-router-dom';
let speciesInfoList = [];
let names = []
const SpeciesList = () => {
    fetch('https://swapi.dev/api/species/')
        .then(response => response.json())
        .then(json => {
            speciesInfoList = json.results
            console.log(speciesInfoList)
            for (let i = 0; i < speciesInfoList.length; i++) {
                names[i] = speciesInfoList[i].name
            }
    })
    .catch(error => {
    console.error(error);
    });
    return (
        <>
            <h1>Species</h1>
            <ul>
                <li>
                    <Link to={"/SpeciesList/" + 1}>{names[0]}</Link>
                </li>
                <li>
                    <Link to={"/SpeciesList/" + 2}>{names[1]}</Link>
                </li>
                <li>
                    <Link to={"/SpeciesList/" + 3}>{names[2]}</Link>
                </li>
                <li>
                    <Link to={"/SpeciesList/" + 4}>{names[3]}</Link>
                </li>
                <li>
                    <Link to={"/SpeciesList/" + 5}>{names[4]}</Link>
                </li>
                <li>
                    <Link to={"/SpeciesList/" + 6}>{names[5]}</Link>
                </li>
                <li>
                    <Link to={"/SpeciesList/" + 7}>{names[6]}</Link>
                </li>
                <li>
                    <Link to={"/SpeciesList/" + 8}>{names[7]}</Link>
                </li>
                <li>
                    <Link to={"/SpeciesList/" + 9}>{names[8]}</Link>
                </li>
                <li>
                    <Link to={"/SpeciesList/" + 10}>{names[9]}</Link>
                </li>
            </ul>
            <br />
            <br />
            <Link to="../">Back</Link>
        </>
    );
};
export default SpeciesList;
