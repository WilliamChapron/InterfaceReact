import React, { useState, useEffect } from 'react';
import { GetPokemon } from '../api/GetPokemon';
import ColorSchemesExample from '../components/Navbar';
import { CatchPokemon } from '../api/CatchPokemon';
import SimpleForm from '../components/SimpleForm';


export default function Home(){
    
    const [ pokemons, setPokemons ] = useState([]);
    
    useEffect(() => {
        const pokemonsFetched = GetPokemon();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    

     
    return <div className="Main">
      <ColorSchemesExample />
      
      { 
        pokemons.map((pokemon,key) =>{
          return <div class="p-2 bloc-pokemon background">
            <img className="avatar" src={pokemon.img} />
            <h2>{pokemon.name}</h2>
            {
              pokemon.type.map((type,keyType) => <h3>{type.name}</h3>)
            }
      

      <SimpleForm pokemonId = {pokemon._id} valueSubmit = "Attraper" functionName = {CatchPokemon}/>
          </div>
        })

      }
      
    </div>;
}


