import ColorSchemesExample from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import { UpdatePokemon } from '../api/UpdatePokemon';
import FormComplex from '../components/FormComplex';
import FormUpdate from '../components/FormUpdate';
import { GetPokemon } from '../api/GetPokemon';
import { DeletePokemon } from '../api/DeletePokemon';
import { CreatePokemon } from '../api/CreatePokemon';
import { useForm } from "react-hook-form";
import { GetType } from "../api/GetType";
import DeleteForm from '../components/DeleteForm';


export default function Manage(){



    const [ pokemons, setPokemons ] = useState([]);
    const [ types, setTypes ] = useState([]);

    const { register, handleSubmit } = useForm();



    const [ count, setCount ] = useState(0);
    const handleRefresh = () => setCount(count+1);

    const onSubmit = data => {
        DeletePokemon(data);
    }
    
    useEffect(() => {
        const pokemonsFetched = GetPokemon();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));

        const typesFetched = GetType();
        typesFetched
            .then(result => setTypes(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);
    
    return <div className="Main">
        <ColorSchemesExample /><br></br><br></br>
        <FormUpdate pokemons = {pokemons} types={types} refreshPage = {handleRefresh} functionName = {UpdatePokemon} valueSubmit = "Modifier"/><br></br><br></br>
        <DeleteForm pokemons = {pokemons} types={types} refreshPage = {handleRefresh} functionName = {CreatePokemon} valueSubmit = "Delete"/>
        <FormComplex pokemon = {pokemons} types={types} refreshPage = {handleRefresh} functionName = {CreatePokemon} valueSubmit = "Créer"/>
    </div>;
     
    

        
        
        

        

    
            
    
}