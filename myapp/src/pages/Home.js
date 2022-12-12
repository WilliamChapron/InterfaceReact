import React, { useState, useEffect } from 'react';
import { GetPokemon } from '../api/GetPokemon';
import ColorSchemesExample from '../components/Navbar';
import { CatchPokemon } from '../api/CatchPokemon';
import { GetPokedex } from '../api/GetPokedex';
import Form from '../components/Form';


export default function Home(){
    
    const [ pokemons, setPokemons ] = useState([]);
    const [ pokedexs, setPokedex ] = useState([]);
    
    useEffect(() => {
        const pokemonsFetched = GetPokemon();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
        
        const pokedexFetched = GetPokedex();
          pokedexFetched
            .then(resultp => setPokedex(resultp))
            .catch(errorr=>console.error("Erreur avec notre API :",errorr.message));
    },[]);
    

     
    return <div className="Main">
      <ColorSchemesExample />
      
      { 
        pokemons.map((pokemon,key) =>{
          return <div key={key} className="bloc-pokemon">
            <img className="avatar" src={pokemon.img} />
            <h2>{pokemon.name}</h2>
            <h2>{pokemon._id}</h2>
            {
              pokemon.type.map((type,keyType) => <h3>{type.name}</h3>)
            }
      

      <Form pokemonId = {pokemon._id} valueSubmit = "Attraper" functionName = {CatchPokemon}/>
          </div>
        })

      }
      
    </div>;
}
















