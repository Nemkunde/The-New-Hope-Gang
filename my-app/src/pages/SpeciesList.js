import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SpeciesList() {
    const [speciesList, setSpeciesList] = useState([]);
    let listname = [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/species/');
                const data = await response.json();
                for (let i = 0; i < 10; i++) {
                    listname[i] = data.results[i].name;
                }
                setSpeciesList(listname)
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <h1>Species</h1>
            <ul>
                <li>
                    <Link to="/SpeciesList/1">{speciesList[0]}</Link>
                </li>
                <li>
                    <Link to="/SpeciesList/2">{speciesList[1]}</Link>
                </li>
                <li>
                    <Link to="/SpeciesList/3">{speciesList[2]}</Link>
                </li>
                <li>
                    <Link to="/SpeciesList/4">{speciesList[3]}</Link>
                </li>
                <li>
                    <Link to="/SpeciesList/5">{speciesList[4]}</Link>
                </li>
                <li>
                    <Link to="/SpeciesList/6">{speciesList[5]}</Link>
                </li>
                <li>
                    <Link to="/SpeciesList/7">{speciesList[6]}</Link>
                </li>
                <li>
                    <Link to="/SpeciesList/8">{speciesList[7]}</Link>
                </li>
                <li>
                    <Link to="/SpeciesList/9">{speciesList[8]}</Link>
                </li>
                <li>
                    <Link to="/SpeciesList/10">{speciesList[9]}</Link>
                </li>
            </ul>
            <Link to="../">Back</Link>
        </>
    );
};

