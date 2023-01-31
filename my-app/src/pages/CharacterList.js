import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getFilterCharacterList = (searchData, characterList) =>{
    if (!searchData){
        return characterList;
    }
    return characterList.filter((character) => character.toLowerCase().includes(searchData.toLowerCase()));
}

export default function CharactersList() {

    const [characterList, setCharacterList] = useState([]);
    const [searchData, setSearchData] = useState('')

    let listname = [];
    //shouldComponentUpdate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/people/');
                const data = await response.json();
                for (let i = 0; i < 10; i++) {
                    listname[i] = data.results[i].name;
                }
                setCharacterList(listname)
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, []);


    const filterCharacterList = getFilterCharacterList(searchData, characterList)

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
            <ul>
            {filterCharacterList.map((name, id) => (
                <li key={id}>
                    <Link to={`/CharacterList/${id + 1}`}>{name}</Link>
                </li>
            ))}
            </ul>
            <Link to="../">Back</Link>
        </>
    );
}