import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getFilterList = (searchData, filmList) =>{
    if (!searchData){ 
        return filmList;
    }
    return filmList.filter((film) => film.toLowerCase().includes(searchData.toLowerCase()));
}
export default function FilmList() {
    const[searchData, setSearchData] = useState('')
    const [filmList, setFilmList] = useState([]);
    let listname = [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/films/');
                const data = await response.json();
                for (let i = 0; i < 6; i++) {
                    listname[i] = data.results[i].title;
                }
                setFilmList(listname)
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, []);
    console.log(listname)

    const filterList = getFilterList(searchData, filmList)

    return (
        <>
            <h1>Films</h1>
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
                        <Link to={`/FilmList/${name}`}>{name}</Link>
                    </li>
                );
            })}

       
            </ul>
            <Link to="../">Back</Link>
        </>
    );
};
