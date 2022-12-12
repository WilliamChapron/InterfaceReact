import React, { useState, useEffect } from 'react';
import { GetPokedex } from '../api/GetPokedex';
import ColorSchemesExample from '../components/Navbar';
import Form from '../components/Form';
import { RemovePokedex } from "../api/RemovePokedex";

export default function Home(){
    
    const [ pokedexs, setPokedex ] = useState([]);

    const [ count, setCount ] = useState(0);
    const handleRefresh = () => setCount(count+1);
    
    useEffect(() => {
      console.log("submitttt");
      const pokedexFetched = GetPokedex();
      pokedexFetched
        .then(resultp => setPokedex(resultp))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);

   

     
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

          <Form pokemonId = {pokedex._id} valueSubmit = "Rejeter" functionName = {RemovePokedex} refreshPage = {handleRefresh}/>

          </div>
        })
      }
    </div>;
}
