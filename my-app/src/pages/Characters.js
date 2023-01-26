import React from 'react'
import { Link, useParams } from 'react-router-dom';
export default function Characters(){
    const { id } = useParams();
    return (
        <>
        <h1>wow! its {id}</h1>
        <Link to="../CharacterList">Back</Link>
        </>
    );
};