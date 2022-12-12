
import ColorSchemesExample from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import { UpdatePokemon } from '../api/UpdatePokemon';
import FormComplex from '../components/FormComplex';
import SimpleForm from '../components/SimpleForm';
import { GetPokemon } from '../api/GetPokemon';
import { DeletePokemon } from '../api/DeletePokemon';
import { CreatePokemon } from '../api/CreatePokemon';
import { useForm } from "react-hook-form";


export default function Manage(){



    const [ pokemons, setPokemons ] = useState([]);
    const { register, handleSubmit } = useForm();

    const [ count, setCount ] = useState(0);
    const handleRefresh = () => setCount(count+1);
    
    useEffect(() => {
        const pokemonsFetched = GetPokemon();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);
    
    return <div className="Main">
      <ColorSchemesExample />
      
    { 
        pokemons.map((pokemon,key) =>{
            
            return <div key={key} className="bloc-pokemon">
                <p>See Pokemon</p>
                <img className="avatar" src={pokemon.img} />
                <h2>{pokemon.name}</h2>
                <h2>{pokemon._id}</h2>
                {
                    pokemon.type.map((type,keyType) => <h3>{type.name}</h3>)
                }
                <p>Update Pokemon</p>
                <FormComplex refreshPage = {handleRefresh} functionName = {UpdatePokemon} valueSubmit = "Modifier" filter = {<select {...register("pokemonupdate")}> {pokemons.map((pokemonChoice,keyChoice) => <option  value={pokemonChoice._id}>{pokemonChoice.name}</option>)}</select>}/>
                <p>Delete Pokemon</p>
                <SimpleForm refreshPage = {handleRefresh} pokemonId = {pokemon._id} valueSubmit = "Supprimer" functionName = {DeletePokemon}/>

            </div>
            })

        
    }

    <p>Create Pokemon</p>
    <FormComplex refreshPage = {handleRefresh} functionName = {CreatePokemon} valueSubmit = "Créer"/>
                
      
    </div>;
     
    

        
        
        

        

    
            
    
}
