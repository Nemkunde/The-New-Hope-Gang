import React from 'react'
import { Link } from 'react-router-dom';
const CharacterList = () => {
    return (
        <>
            <h1>Characters</h1>
            <Link to="/CharacterList/Lok Skajvalker">Lok skajvalker</Link>
            <br />
            <Link to="/CharacterList/Joda">Joda</Link>
            <br />
            <br />
            <Link to="../">Back</Link>
        </>
    );
};

export default CharacterList;
