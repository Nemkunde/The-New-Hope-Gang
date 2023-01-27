import React from 'react'
import { Link } from 'react-router-dom';
let charNamesList = [];
let tableNum = 1; // 1 6 11 16 21 26 31
let listAmount;
const CharacterList = () => {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(json => {
        listAmount = json.count;
    })
    .catch(error => {
      console.error(error);
    });
    for (let i = 0; i < listAmount; i++) {
        fetch('https://swapi.dev/api/people/' + i)
         .then(response => response.json())
         .then(json => {
            charNamesList[i] = json.name;
        })
        .catch(error => {
        console.error(error);
        });
    }
    function NextPage(){
        if(tableNum < listAmount-5){
            tableNum = tableNum + 5
        }
        else{
            tableNum = 1
        }
    }
    function PrevPage(){
        if(tableNum > 5){
            tableNum = tableNum - 5
        }
        else{
            tableNum = listAmount-5
        }
    }
    return (
        <>
            <h1>Characters</h1>
            <Link to={"/CharacterList/" + charNamesList[tableNum]}>{charNamesList[tableNum]}</Link>
            <br />
            <Link to={"/CharacterList/" + charNamesList[tableNum+1]}>{charNamesList[tableNum+1]}</Link>
            <br />
            <Link to={"/CharacterList/" + charNamesList[tableNum+2]}>{charNamesList[tableNum+2]}</Link>
            <br />
            <Link to={"/CharacterList/" + charNamesList[tableNum+3]}>{charNamesList[tableNum+3]}</Link>
            <br />
            <Link to={"/CharacterList/" + charNamesList[tableNum+4]}>{charNamesList[tableNum+4]}</Link>
            <br />
            <button onClick={NextPage}>prev</button>
            <button onClick={PrevPage}>next</button>
            <br />
            <br />
            <Link to="../">Back</Link>
        </>
    );
};
export default CharacterList;
