import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PlanetList() {
    const [planetList, setPlanetList] = useState([]);
    let listname = [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/planets/');
                const data = await response.json();
                for (let i = 0; i < 10; i++) {
                    listname[i] = data.results[i].name;
                }
                setPlanetList(listname)
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>Planets</h1>
            <ul>
                <li>
                    <Link to="/PlanetList/1">{planetList[0]}</Link>
                </li>
                <li>
                    <Link to="/PlanetList/2">{planetList[1]}</Link>
                </li>
                <li>
                    <Link to="/PlanetList/3">{planetList[2]}</Link>
                </li>
                <li>
                    <Link to="/PlanetList/4">{planetList[3]}</Link>
                </li>
                <li>
                    <Link to="/PlanetList/5">{planetList[4]}</Link>
                </li>
                <li>
                    <Link to="/PlanetList/6">{planetList[5]}</Link>
                </li>
                <li>
                    <Link to="/PlanetList/7">{planetList[6]}</Link>
                </li>
                <li>
                    <Link to="/PlanetList/8">{planetList[7]}</Link>
                </li>
                <li>
                    <Link to="/PlanetList/9">{planetList[8]}</Link>
                </li>
                <li>
                    <Link to="/PlanetList/10">{planetList[9]}</Link>
                </li>
            </ul>
            <Link to="../">Back</Link>
        </>
    );
};

