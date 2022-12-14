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
    
    function showCard(event) {
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
        <button onClick={(event)=>showCard(event)}>Afficher les cartes</button>
      { 
        pokemons.map((pokemon,key) =>{
          // if id in list of setIsShown is in pokemon id because i send pokemon id and i set it in table to verify if clicked
          
          return <div className={isShown ? 'cardWithform-On' : 'cardWithform-Off'}>


            {isShown && <Card pokemonTable = {pokemon} key = {key}/>}

            
            

          </div>

          //<SimpleForm refreshPage = {handleRefresh} pokemonId = {pokemon._id} valueSubmit = "Attraper" functionName = {CatchPokemon}/>
          

        })
      }
      </div>
      
      
    </div>;
}


