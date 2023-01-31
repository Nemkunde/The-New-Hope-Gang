import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FilmList() {
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

    return (
        <>
            <h1>Films</h1>
            <ul>
                <li>
                    <Link to="/FilmList/1">{filmList[0]}</Link>
                </li>
                <li>
                    <Link to="/FilmList/2">{filmList[1]}</Link>
                </li>
                <li>
                    <Link to="/FilmList/3">{filmList[2]}</Link>
                </li>
                <li>
                    <Link to="/FilmList/4">{filmList[3]}</Link>
                </li>
                <li>
                    <Link to="/FilmList/5">{filmList[4]}</Link>
                </li>
                <li>
                    <Link to="/FilmList/6">{filmList[5]}</Link>
                </li>
            </ul>
            <Link to="../">Back</Link>
        </>
    );
};
