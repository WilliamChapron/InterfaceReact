import React, { useState, useEffect } from 'react';
import { GetPokedex } from '../api/GetPokedex';
import ColorSchemesExample from '../components/Navbar';
import SimpleForm from '../components/SimpleForm';
import { RemovePokedex } from "../api/RemovePokedex";

export default function Home(){
    
    const [ pokedexs, setPokedex ] = useState([]);

    const [ count, setCount ] = useState(0);
    const handleRefresh = () => setCount(count+1);
    
    useEffect(() => {
      const pokedexFetched = GetPokedex();
      pokedexFetched
        .then(resultp => setPokedex(resultp))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);

   

     
    return <div className="Main">
      <ColorSchemesExample />
      { 
        pokedexs.map((pokedex,key) =>{
          return <div className="card-list">
            
            <div key={key} className="p-2 bloc-pokemon background">
              <img className="avatar" src={"https://cdn.discordapp.com/attachments/1034093039481786428/1052181679298588692/pokemon.png"} />
              
              {
                pokedex.type.map((type,keyType) => <img className="type" src={"https://cdn.discordapp.com/attachments/1034093039481786428/1052181679298588692/pokemon.png"}/>)
              }        
            </div>

            <SimpleForm pokemonId = {pokedex._id} valueSubmit = "Rejeter" functionName = {RemovePokedex} refreshPage = {handleRefresh}/>

          </div>
        })
      }
      
      
    </div>;
}
