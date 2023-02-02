import React, { useState, useEffect } from 'react';
import Data from '../componens/Data'
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
    let category = 'films'
    useEffect(() => {
        const fetchData = async () => {
            if(category == 'films'){
                try {
                    const response = await fetch('https://swapi.dev/api/' + category);
                    const data = await response.json();
                    for (let i = 0; i < 6; i++) {
                        listname[i] = data.results[i].title;
                    }
                    setCategoryList(listname)
                    setIsLoading(false);
                } catch(error){
                    console.error(error);
                }
            }else{
                try {
                    const response = await fetch('https://swapi.dev/api/' + category);
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
            {isLoading ? <p>Loading...</p> : (
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
                <Data name={clickedName} category={category}></Data>
            }
    </>;
};

export default HomePage;

