import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getFilterList = (searchData, vehicleList) =>{
    if (!searchData){ 
        return vehicleList;
    }
    return vehicleList.filter((vehicle) => vehicle.toLowerCase().includes(searchData.toLowerCase()));
}


export default function VehicleList() {
    const[searchData, setSearchData] = useState('')
    const [vehicleList, setVehicleList] = useState([]);
    let listname = [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/vehicles/');
                const data = await response.json();
                for (let i = 0; i < 10; i++) {
                    if (i != 3)
                    listname[i] = data.results[i].name;
                }
                setVehicleList(listname)
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const filterList = getFilterList(searchData, vehicleList)
    return (
        <>
            <h1>Vehicles</h1>
            <input 
            type="text" 
            placeholder="Search..." 
            className="search" 
            value={searchData} 
            onChange={(e) => setSearchData(e.target.value)}
            />
            <ul>
            {filterList.map((name, id) => {
                return (
                    <li key={id}>
                        <Link to={`/VehicleList/${name}`}>{name}</Link>
                    </li>
                );
            })}
            </ul>
            <Link to="../">Back</Link>
        </>
    );
};