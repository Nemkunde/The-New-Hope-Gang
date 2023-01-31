import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Films() {
  const [film, setFilm] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/films/${id}`);
        const data = await response.json();
        setFilm(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

    return (
        <>
        <ul>
            <li>
                <p>Title: {film.title}</p>
            </li>
            <li>
                <p>Episode id: {film.episode_id}</p>
            </li>
            <li>
                <p>Opening crawl: {film.opening_crawl}</p>
            </li>
            <li>
                <p>Director: {film.director}</p>
            </li>
            <li>
                <p>Producer: {film.producer}</p>
            </li>
            <li>
                <p>Created: {film.created}</p>
            </li>
            <li>
                <p>Release date: {film.release_date}</p>
            </li>
        </ul>
        <Link to="../FilmList">Back</Link>
        </>
    );
};