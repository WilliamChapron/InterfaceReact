
import ColorSchemesExample from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import { UpdatePokemon } from '../api/UpdatePokemon';
import FormComplex from '../components/FormComplex';
import FormUpdate from '../components/FormUpdate';
import { GetPokemon } from '../api/GetPokemon';
import { DeletePokemon } from '../api/DeletePokemon';
import { CreatePokemon } from '../api/CreatePokemon';
import { useForm } from "react-hook-form";


export default function Manage(){



    const [ pokemons, setPokemons ] = useState([]);
    const { register, handleSubmit } = useForm();

    const [ count, setCount ] = useState(0);
    const handleRefresh = () => setCount(count+1);

    const onSubmit = data => {
        DeletePokemon(data);
        handleRefresh();
    }
    
    useEffect(() => {
        const pokemonsFetched = GetPokemon();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);
    
    return <div className="Main">
        <ColorSchemesExample /><br></br><br></br>
        
        <p>Update Pokemon</p>
        <FormUpdate refreshPage = {handleRefresh} functionName = {UpdatePokemon} valueSubmit = "Modifier"/><br></br><br></br>

        <p>Delete Pokemon</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("id")}>
                {pokemons.map((pokemon,keyPokemon) => <option  value={pokemon._id}>{pokemon.name}</option>)}
            </select>
            <input type="submit" value="Supprimer"/> 
        </form><br></br><br></br>

        <p>Create Pokemon</p>
        <FormComplex refreshPage = {handleRefresh} functionName = {CreatePokemon} valueSubmit = "Créer"/>
                
      
    </div>;
     
    

        
        
        

        

    
            
    
}
