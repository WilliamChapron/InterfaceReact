import React, { useState, useEffect } from 'react';
import { GetPokedex } from '../api/pokedex';
import ColorSchemesExample from '../components/Navbar';
import Form from '../components/Form';
import { DeletePokemon } from "../api/delete";

export default function Home(){
    
    const [ pokedexs, setPokedex ] = useState([]);
    
    useEffect(() => {
      const pokedexFetched = GetPokedex();
      pokedexFetched
        .then(resultp => setPokedex(resultp))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

   

     
    return <div className="Main">
      <ColorSchemesExample />
      { 
        pokedexs.map((pokedex,key) =>{
          return <div key={key} className="bloc-pokemon">
            <h2>{pokedex.name}</h2>
            <h2>{pokedex._id}</h2>
            {
                pokedex.type.map((type,keyType) => <h3>{type.name}</h3>)
            }

          <Form pokemonId = {pokedex._id} valueSubmit = "Rejeter" functionName = {DeletePokemon}/>

          </div>
        })
      }
    </div>;
}
