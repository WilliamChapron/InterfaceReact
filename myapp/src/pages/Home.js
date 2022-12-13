import React, { useState, useEffect } from 'react';
import { GetPokemon } from '../api/GetPokemon';
import ColorSchemesExample from '../components/Navbar';
import { CatchPokemon } from '../api/CatchPokemon';
import SimpleForm from '../components/SimpleForm';
import Card from '../components/Card'


export default function Home(){
    
    const [ pokemons, setPokemons ] = useState([]);

    const [ count, setCount ] = useState(0);
    const handleRefresh = () => setCount(count+1);

    const [isShown, setIsShown] = useState(false);
    
    function showCard(event,pokemon,key) {
      setIsShown(current => !current);
    }
    
    useEffect(() => {
        const pokemonsFetched = GetPokemon();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);
    
    return <div className="Main">
      <ColorSchemesExample />
      <div className="card-list">
      { 
        pokemons.map((pokemon,key) =>{
          return <div className="cardWithform" onClick={(event)=>showCard(event,pokemon,key)}>


            {isShown && <Card pokemonTable = {pokemon} key = {key}/>}


            <SimpleForm refreshPage = {handleRefresh} pokemonId = {pokemon._id} valueSubmit = "" functionName = {CatchPokemon}/>

          </div>
        })
      }
      <div className="background"></div>
      </div>
      
      
    </div>;
}


