import { useForm } from "react-hook-form";
import { UpdatePokemon } from "../api/UpdatePokemon";
import Form from 'react-bootstrap/Form';


export default function FormUpdate(props){


    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        UpdatePokemon(data);
        props.refreshPage();
    }

    return <form className="formSize" onSubmit={handleSubmit(onSubmit)}>
        <p>Update Pokemon</p> <br></br>
        <select className="form-select form-select-sm" aria-label=".form-select-sm type" {...register("pokemonupdate", {required: true})}> 
            {props.pokemons.map((pokemon,keyChoice) => <option  value={pokemon._id}>{pokemon.name}</option>)} 
        </select>  <br></br>
        <Form.Control size="lg" type="text" placeholder="Nom du pokemon" {...register("name", {required: true})} /> <br />
        <Form.Control size="lg" type="text" placeholder="Img du pokemon" {...register("img", {required: true})} /> <br />
        <select className="form-select form-select-sm" aria-label=".form-select-sm type" {...register("type1")}>
            {props.types.map((type,keyType) => <option  value={type._id}>{type.name}</option>)}
        </select> <br></br>
        <Form.Control size="lg" type="text" placeholder="Description du type1" {...register("desctype1")} /> <br />
        <select className="form-select form-select-sm" aria-label=".form-select-sm type" {...register("type2")}>
            {props.types.map((type,keyType) => <option value={type._id}>{type.name}</option>)}
        </select> <br></br>
        <Form.Control size="lg" type="text" placeholder="Description du type2" {...register("desctype2")} /> <br />
        <input type="submit" className="btn btn-outline-success buttonin" value={props.valueSubmit}/>  
    </form>



}













