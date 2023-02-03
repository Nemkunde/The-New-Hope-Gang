import React, { useState, useEffect } from 'react';
import Data from '../componens/Data'
const getFilterList = (searchData, categoryList) =>{
    if (!searchData){ 
        return categoryList;
    }
    return categoryList.filter((character) => character.toLowerCase().includes(searchData.toLowerCase()));
}
const HomePage = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [searchData, setSearchData] = useState('')
    const [clickedName, setclickedname] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState(['people', 'films', 'vehicles', 'starships', 'species', 'planets'])
    const [categoryListPos, setCategoryListPos] = useState(0)
    let listname = [];
    
    useEffect(() => {
        const fetchData = async () => {
            if(category[categoryListPos] === 'films'){
                try {
                    const response = await fetch('https://swapi.dev/api/' + category[categoryListPos]);
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
                    const response = await fetch('https://swapi.dev/api/' + category[categoryListPos]);
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
    }, [categoryListPos]);
    const filterList = getFilterList(searchData, categoryList)
    return <>
            <h1>{category[categoryListPos]}</h1>
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
            <button onClick={() => {
                setSearchData('')
                setclickedname('')
                let nextpos = categoryListPos - 1;
                if(nextpos == -1){
                    setCategoryListPos(5)
                } else{
                    setCategoryListPos(nextpos)
                }
                setIsLoading(true);
            }}>back</button>

            <button onClick={() => {
                setSearchData('')
                setclickedname('')
                let nextpos = categoryListPos + 1;
                if(nextpos == 6){
                    setCategoryListPos(0)
                } else{
                    setCategoryListPos(nextpos)
                }
                setIsLoading(true);
            }}>next</button>
            
            {clickedName !== '' &&
                <Data name={clickedName} category={category[categoryListPos]}></Data>
            }
    </>;
};

export default HomePage;

