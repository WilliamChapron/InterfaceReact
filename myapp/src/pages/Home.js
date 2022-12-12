import React, { useState, useEffect } from 'react';
import { getAll } from '../api/home';
import ColorSchemesExample from '../components/Navbar';
import { InsertPokemon } from '../api/post';
import { GetPokedex } from '../api/pokedex';
import { useForm } from "react-hook-form";

export default function Home(){
    
    const [ pokemons, setPokemons ] = useState([]);
    const [ pokedexs, setPokedex ] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    useEffect(() => {
        const pokemonsFetched = getAll();
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("idvalue")} /> <br></br> <br></br>
              <input type="submit" /> 
            </form>

            
            {/* {
              pokedexs.map((pokedex,keydex) => <h3>{pokedex.key}</h3>)
            } */}


            {/* if pokemon.name in pokedex.name<h2 >Ce pokemon est déja dans le pokedex</h2> */}

            
            

            

            

            
          </div>
        })
      }
    </div>;
}
















