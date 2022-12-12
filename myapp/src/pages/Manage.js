
import ColorSchemesExample from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import { UpdatePokemon } from '../api/UpdatePokemon';
import FormComplex from '../components/FormComplex';
import Form from '../components/Form';
import { GetPokemon } from '../api/GetPokemon';
import { DeletePokemon } from '../api/DeletePokemon';
import { CreatePokemon } from '../api/CreatePokemon';
import { useForm } from "react-hook-form";

export default function Manage(){



    const [ pokemons, setPokemons ] = useState([]);
    const { register, handleSubmit } = useForm();
    
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
            <p>See Pokemon</p>
            return <div key={key} className="bloc-pokemon">
            <img className="avatar" src={pokemon.img} />
            <h2>{pokemon.name}</h2>
            <h2>{pokemon._id}</h2>
            {
                pokemon.type.map((type,keyType) => <h3>{type.name}</h3>)
            }

      <p>Update Pokemon</p>
      <FormComplex functionName = {UpdatePokemon} valueSubmit = "Modifier" filter = {<input {...register("pokemonupdate", {required: true})} />} />

      <p>Create Pokemon</p>
      <FormComplex functionName = {CreatePokemon} valueSubmit = "Créer"/>

      <p>Delete Pokemon</p>
      <Form pokemonId = {pokemon._id} valueSubmit = "Supprimer" functionName = {DeletePokemon}/>

    </div>
      
    })
    }
      
    </div>;
     
    

        
        
        

        

    
            
    
}
