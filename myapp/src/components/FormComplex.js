import { useForm } from "react-hook-form";
import { GetType } from "../api/GetType";
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';



export default function FormComplex(props){


    
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        props.functionName(data);
    }

    const [ types, setTypes ] = useState([]);

    useEffect(() => {
        const typesFetched = GetType();
        typesFetched
            .then(result => setTypes(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control size="lg" type="text" placeholder="Nom du pokemon" {...register("name", {required: true})} /> <br />
        <Form.Control size="lg" type="text" placeholder="Img du pokemon" {...register("img", {required: true})} /> <br />
        <select {...register("type1")}>
            {types.map((type,keyType) => <option  value={type._id}>{type.name}</option>)}
        </select>
        <select {...register("type2")}>
            {types.map((type,keyType) => <option value={type._id}>{type.name}</option>)}
        </select>
        <input type="submit" value={props.valueSubmit}/> 
    </form>



}