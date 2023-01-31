import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StarshipList() {
    const [starshipList, setStarshipList] = useState([]);
    let listname = [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/starships/');
                const data = await response.json();
                for (let i = 0; i < 10; i++) {
                    listname[i] = data.results[i].name;
                }
                setStarshipList(listname)
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <h1>Starships</h1>
            <ul>
                <li>
                    <Link to="/StarshipList/1">{starshipList[0]}</Link>
                </li>
                <li>
                    <Link to="/StarshipList/2">{starshipList[1]}</Link>
                </li>
                <li>
                    <Link to="/StarshipList/3">{starshipList[2]}</Link>
                </li>
                <li>
                    <Link to="/StarshipList/4">{starshipList[3]}</Link>
                </li>
                <li>
                    <Link to="/StarshipList/5">{starshipList[4]}</Link>
                </li>
                <li>
                    <Link to="/StarshipList/6">{starshipList[5]}</Link>
                </li>
                <li>
                    <Link to="/StarshipList/7">{starshipList[6]}</Link>
                </li>
                <li>
                    <Link to="/StarshipList/8">{starshipList[7]}</Link>
                </li>
                <li>
                    <Link to="/StarshipList/9">{starshipList[8]}</Link>
                </li>
                <li>
                    <Link to="/StarshipList/10">{starshipList[9]}</Link>
                </li>
            </ul>
            <Link to="../">Back</Link>
        </>
    );
};

