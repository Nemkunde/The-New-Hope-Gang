import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function VehicleList() {
    const [vehicleList, setVehicleList] = useState([]);
    let listname = [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/vehicles/');
                const data = await response.json();
                for (let i = 0; i < 10; i++) {
                    listname[i] = data.results[i].name;
                }
                setVehicleList(listname)
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <h1>Vehicles</h1>
            <ul>
                <li>
                    <Link to="/VehicleList/4">{vehicleList[0]}</Link>
                </li>
                <li>
                    <Link to="/VehicleList/6">{vehicleList[1]}</Link>
                </li>
                <li>
                    <Link to="/VehicleList/7">{vehicleList[2]}</Link>
                </li>
                <li>
                    <Link to="/VehicleList/8">{vehicleList[3]}</Link>
                </li>
                <li>
                    <Link to="/VehicleList/14">{vehicleList[4]}</Link>
                </li>
                <li>
                    <Link to="/VehicleList/16">{vehicleList[5]}</Link>
                </li>
                <li>
                    <Link to="/VehicleList/18">{vehicleList[6]}</Link>
                </li>
                <li>
                    <Link to="/VehicleList/19">{vehicleList[7]}</Link>
                </li>
                <li>
                    <Link to="/VehicleList/24">{vehicleList[8]}</Link>
                </li>

            </ul>
            <Link to="../">Back</Link>
        </>
    );
};