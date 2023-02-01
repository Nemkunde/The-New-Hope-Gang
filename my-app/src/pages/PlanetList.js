import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getFilterList = (searchData, planetList) =>{
    if (!searchData){ 
        return planetList;
    }
    return planetList.filter((planet) => planet.toLowerCase().includes(searchData.toLowerCase()));
}

export default function PlanetList() {
    const[searchData, setSearchData] = useState('')
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

    const filterList = getFilterList(searchData, planetList)
    return (
        <>
            <h1>Planets</h1>
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
                        <Link to={`/PlanetList/${name}`}>{name}</Link>
                    </li>
                );
            })}
            </ul>
            <Link to="../">Back</Link>
        </>
    );
};

