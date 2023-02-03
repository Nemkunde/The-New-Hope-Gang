import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Planets() {
  const [planet, setPlanet] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  let list = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/?search=${name}`);
        const data = await response.json();
        list = data.results
        setPlanet(list[0]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [name]);

    return (
        <>
        
        <Link to="../PlanetList">Back</Link>
        </>
    );
};