import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getFilterList = (searchData, characterList) =>{
    if (!searchData){ 
        return characterList;
    }
    return characterList.filter((character) => character.toLowerCase().includes(searchData.toLowerCase()));
}

export default function CharactersList() {

    
    const [searchData, setSearchData] = useState('')
    const [characterList, setCharacterList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let listname = [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/people/');
                const data = await response.json();
                for (let i = 0; i < 10; i++) {
                    listname[i] = data.results[i].name;
                }
                setCharacterList(listname)
                setIsLoading(false);
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const filterList = getFilterList(searchData, characterList)
    return (
        <>
            <h1>Characters</h1>
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
                            <Link to={`/CharacterList/${name}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
            )}
            <Link to="../">Back</Link>
        </>
    );
}