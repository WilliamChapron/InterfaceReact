import React, { useState, useEffect } from 'react';
import { GetPokedex } from '../api/GetPokedex';
import ColorSchemesExample from '../components/Navbar';
import Card from '../components/Card'
import SimpleForm from '../components/SimpleForm';
import { RemovePokedex } from "../api/RemovePokedex";

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

   
    function Draw(){
      console.log(pokedexs)
      if (pokedexs.length != 0){ 
        return ( <>
        <ColorSchemesExample />
        <button className="buttonPos"onClick={(event)=>showCard(event)}>Afficher les cartes</button>
        <div className="card-list">
          { 
            pokedexs.map((pokedex,key) =>{
              return  <div>
                <div className={isShown ? 'cardWithform-On' : 'cardWithform-Off'}>
                {isShown && <Card pokemonTable = {pokedex} key = {key}/>}
                </div>
                <SimpleForm pokemonId = {pokedex._id} valueSubmit = "Rejeter" functionName = {RemovePokedex} refreshPage = {handleRefresh}/> 
              </div>
            })
          }
          </div></>)
      }
      if (pokedexs.length < 5 && pokedexs.length > 0){ 
        return ( <>
        <ColorSchemesExample />
        <button className="buttonPos"onClick={(event)=>showCard(event)}>Afficher les cartes</button>
        <div className="card-list">
          { 
            pokedexs.map((pokedex,key) =>{
              return  <div>
                <div className={isShown ? 'cardWithform-On' : 'cardWithform-Off'}>
                {isShown && <Card pokemonTable = {pokedex} key = {key}/>}
                </div>
                <SimpleForm pokemonId = {pokedex._id} valueSubmit = "Rejeter" functionName = {RemovePokedex} refreshPage = {handleRefresh}/> 
              </div>
            })
          }
          </div></>)
      }
      if (pokedexs.length == 0){ 
        return <> <ColorSchemesExample />
        <h1>Pas de Pokemon dans le pokedex</h1> </>
      }
    }
    
    return <div className="Main">
      <>
      <Draw /> </>
      
    </div>;
}
