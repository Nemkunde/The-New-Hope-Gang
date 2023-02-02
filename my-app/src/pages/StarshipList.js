import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getFilterList = (searchData, starshipList) =>{
    if (!searchData){ 
        return starshipList;
    }
    return starshipList.filter((starship) => starship.toLowerCase().includes(searchData.toLowerCase()));
}

export default function StarshipList() {
    const[searchData, setSearchData] = useState('')
    const [starshipList, setStarshipList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let listname = [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/starships/');
                const data = await response.json();
                for (let i = 0; i < 10; i++) {
                    listname[i] = data.results[i].name;
                }
                setStarshipList(listname);
                setIsLoading(false);
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const filterList = getFilterList(searchData, starshipList)
    return (
        <>
            <h1>Starships</h1>
            <input 
            type="text" 
            placeholder="Search..." 
            className="search" 
            value={searchData} 
            onChange={(e) => setSearchData(e.target.value)}
            />
            {isLoading ? <p>Loading...</p> : (
            <ul>
                {filterList.map((name, id) => {
                    return (
                        <li key={id}>
                            <Link to={`/StarshipList/${name}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
            )}
            <Link to="../">Back</Link>
        </>
    );
};

