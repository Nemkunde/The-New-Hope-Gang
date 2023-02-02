import React, { useState, useEffect } from 'react';
import Characters from '../componens/Character'
const getFilterList = (searchData, characterList) =>{
    if (!searchData){ 
        return characterList;
    }
    return characterList.filter((character) => character.toLowerCase().includes(searchData.toLowerCase()));
}
const HomePage = () => {
    const [CharacterList, setCategoryList] = useState([]);
    const [searchData, setSearchData] = useState('')
    const [clickedName, setclickedname] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    let listname = [];
    let category = 'people'
    useEffect(() => {
        const fetchData = async () => {
            if(category == 'people'){
                try {
                    const response = await fetch('https://swapi.dev/api/people/');
                    const data = await response.json();
                    for (let i = 0; i < 10; i++) {
                        listname[i] = data.results[i].name;
                    }
                    setCategoryList(listname)
                    setIsLoading(false);
                } catch(error){
                    console.error(error);
                }
            }
        };
        fetchData();
    }, []);
    const filterList = getFilterList(searchData, CharacterList)
    return <>
            <h1>{category}</h1>
            <input 
            type="text" 
            placeholder="Search..." 
            className="search" 
            value={searchData} 
            onChange={(e) => setSearchData(e.target.value)}
            />
            {category == 'people' &&
                isLoading ? <p>Loading...</p> : (
                <ul>
                    {filterList.map((name, id) => {
                        return (
                            <li key={id}>
                                <button onClick={() => setclickedname(name)}>{name}</button>
                            </li>
                        );
                    })}
                </ul>
                )
            }
            {clickedName != '' &&
                <Characters name={clickedName}></Characters>
            }
    </>;
};

export default HomePage;

