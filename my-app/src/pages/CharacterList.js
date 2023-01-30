import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function CharactersList() {
    const [characterList, setCharacterList] = useState([]);
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
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <h1>Characters</h1>
            <ul>
                <li>
                    <Link to="/CharacterList/1">{characterList[0]}</Link>
                </li>
                <li>
                    <Link to="/CharacterList/2">{characterList[1]}</Link>
                </li>
                <li>
                    <Link to="/CharacterList/3">{characterList[2]}</Link>
                </li>
                <li>
                    <Link to="/CharacterList/4">{characterList[3]}</Link>
                </li>
                <li>
                    <Link to="/CharacterList/5">{characterList[4]}</Link>
                </li>
                <li>
                    <Link to="/CharacterList/6">{characterList[5]}</Link>
                </li>
                <li>
                    <Link to="/CharacterList/7">{characterList[6]}</Link>
                </li>
                <li>
                    <Link to="/CharacterList/8">{characterList[7]}</Link>
                </li>
                <li>
                    <Link to="/CharacterList/9">{characterList[8]}</Link>
                </li>
                <li>
                    <Link to="/CharacterList/10">{characterList[7]}</Link>
                </li>
            </ul>
            <Link to="../">Back</Link>
        </>
    );
}