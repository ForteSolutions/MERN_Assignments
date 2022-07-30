import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';

function App() {

    const [pokemons, setPokemons] = useState({});
    const [sendRequest, setSendRequest] = useState(false);

    useEffect(() => {
        if(sendRequest){
            axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
                .then(response => {
                    setPokemons(response.data.results)
                })
                .catch()
            setSendRequest(false);
        }
    }, [sendRequest]);

    const onClick = (e) => {
        setSendRequest(true)
    }

    return (
        <div className="App bg-light p-3">
        <div className="w-25 mt-2 mx-auto">
            <button className="btn btn-secondary mb-3" onClick={onClick}> Fetch Pokemon</button>
            <p className="mb-1">List of Pokemons: </p>
            <ol>
                {pokemons.length > 0 && pokemons.map((pokemon, index)=>
                    <li key={index}>{pokemon.name}</li>
                )}
            </ol>
        </div>
    </div>
    );
}

export default App;