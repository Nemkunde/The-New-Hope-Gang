import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getFilterList = (searchData, speciesList) =>{
    if (!searchData){ 
        return speciesList;
    }
    return speciesList.filter((species) => species.toLowerCase().includes(searchData.toLowerCase()));
}

export default function SpeciesList() {
    const[searchData, setSearchData] = useState('')
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

    const filterList = getFilterList(searchData, speciesList)
    return (
        <>
            <h1>Species</h1>
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
                        <Link to={`/SpeciesList/${name}`}>{name}</Link>
                    </li>
                );
            })}
            </ul>
            <Link to="../">Back</Link>
        </>
    );
};

