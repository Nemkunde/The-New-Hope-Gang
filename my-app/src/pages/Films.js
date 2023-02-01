import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Films() {
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { title } = useParams();
  let list = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/films/?search=${title}`);
        const data = await response.json();
        list = data.results
        setFilm(list[0]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [title]);

    return (
        <>
        {isLoading ? <p>Loading...</p> : (
          <ul>
              <li>
                  <h2>Title: {film.title}</h2>
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
        )}
        <Link to="../FilmList">Back</Link>
        </>
    );
};