import React, { useState, useEffect } from 'react';
import Data from '../components/Data'
let listname = [];
const getFilterList = (searchData, categoryList) =>{
    if (!searchData){ 
        return categoryList;
    }
    return categoryList.filter((character) => character.name.toLowerCase().includes(searchData.toLowerCase()));
}
const HomePage = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [searchData, setSearchData] = useState('')
    const [clickedName, setclickedname] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState(['people', 'films', 'vehicles', 'starships', 'species', 'planets'])
    const [categoryListPos, setCategoryListPos] = useState(0)
    let listnamepos = 0;
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch('https://swapi.dev/api/' + category[categoryListPos]);
            let data = await response.json();
            let resultsDataList = data.results
            while(data.next != null){
                response = await fetch(data.next);
                data = await response.json();
                resultsDataList = resultsDataList.concat(data.results)
            }

            setCategoryList(resultsDataList)
            setIsLoading(false);
            /*
            try {
                
                const r = await fetch('https://swapi.dev/api/' + category[categoryListPos]);
                const d = await r.json();
                listname = []
                listnamepos = 0;
                let i = 0;
                for (i = 1; i <= Math.ceil(d.count / 10); i++) {
                    console.log(i)
                    const response = await fetch('https://swapi.dev/api/' + category[categoryListPos] + '/?page=' + i);
                    const data = await response.json();
                    for (let anka = 0; anka < data.results.length; anka++) {
                        listname[listnamepos] = data.results[anka].name
                        if(listnamepos == d.count){
                            setCategoryList(listname)
                            setIsLoading(false);
                        }
                        else{
                            listnamepos++;
                        }
                    }
                }
            } catch(error){
                console.error(error);
            }
            */
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
                    {filterList.map(result => {
                        if(category[categoryListPos] == 'films'){
                            return (
                                <li key={result.name}>
                                    <button onClick={() => setclickedname(result.title)}>{result.title}</button>
                                </li>
                            );
                        }
                        else{
                            return (
                                <li key={result.name}>
                                    <button onClick={() => setclickedname(result.name)}>{result.name}</button>
                                </li>
                            );
                        }
                        
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

