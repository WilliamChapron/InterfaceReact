import React, { useState, useEffect } from 'react';
import { GetPokedex } from '../api/GetPokedex';
import ColorSchemesExample from '../components/Navbar';
import Card from '../components/Card'

export default function Home(){
    
    const [ pokedexs, setPokedex ] = useState([]);

    const [ count, setCount ] = useState(0);
    const handleRefresh = () => setCount(count+1);

    const [isShown, setIsShown] = useState(false);
    
    function showCard(event) {
      setIsShown(current => !current);
    }
    
    useEffect(() => {
      const pokedexFetched = GetPokedex();
      pokedexFetched
        .then(resultp => setPokedex(resultp))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);

   

     
    return <div className="Main">
      <ColorSchemesExample />
      <div className="card-list">
      { 
        pokedexs.map((pokedex,key) =>{
          // if id in list of setIsShown is in pokemon id because i send pokemon id and i set it in table to verify if clicked
          return <div className={isShown ? 'cardWithform-On' : 'cardWithform-Off'} onClick={(event)=>showCard(event)}>


            {isShown && <Card pokemonTable = {pokedex} key = {key}/>}

            
            

          </div>

          //<SimpleForm pokemonId = {pokedex._id} valueSubmit = "Rejeter" functionName = {RemovePokedex} refreshPage = {handleRefresh}/>
          

        })
      }
      </div>
      
      
    </div>;
}
