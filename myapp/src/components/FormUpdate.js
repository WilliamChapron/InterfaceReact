import { useForm } from "react-hook-form";
import { GetType } from "../api/GetType";
import { UpdatePokemon } from "../api/UpdatePokemon";
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { GetPokemon } from '../api/GetPokemon';



export default function FormUpdate(props){


    
    const [ pokemons, setPokemons ] = useState([]);
    const [ types, setTypes ] = useState([]);

    const { register, handleSubmit } = useForm();
    const [ count, setCount ] = useState(0);
    const handleRefresh = () => setCount(count+1);

    const onSubmit = data => {
        UpdatePokemon(data);
        handleRefresh();
    }
    
    useEffect(() => {
        const typesFetched = GetType();
        typesFetched
            .then(result => setTypes(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
        const pokemonsFetched = GetPokemon();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);

    return <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("pokemonupdate")}> 
            {pokemons.map((pokemonChoice,keyChoice) => <option  value={pokemonChoice._id}>{pokemonChoice.name}</option>)}
        </select>
        <Form.Control size="lg" type="text" placeholder="Nom du pokemon" {...register("name", {required: true})} /> <br />
        <Form.Control size="lg" type="text" placeholder="Img du pokemon" {...register("img", {required: true})} /> <br />
        <select {...register("type1",{required: true})}>
            {types.map((type,keyType) => <option  value={type._id}>{type.name}</option>)}
        </select>
        <select {...register("type2",{required: true})}>
            {types.map((type,keyType) => <option value={type._id}>{type.name}</option>)}
        </select>
        <input type="submit" value={props.valueSubmit}/> 
    </form>



}













