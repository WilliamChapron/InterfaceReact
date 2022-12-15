import { useForm } from "react-hook-form";
import { DeletePokemon } from '../api/DeletePokemon';



export default function DeleteForm(props){


    
    const { register, handleSubmit } = useForm();

    const onSubmit = data => { 
        DeletePokemon(data);
        props.refreshPage();
    };


    return <> <form className="formSize" onSubmit={handleSubmit(onSubmit)}>
            <p className="white">Delete Pokemon</p> <br></br>
            <select className="form-select form-select-sm" aria-label=".form-select-sm type" {...register("id")}>
                {props.pokemons.map((pokemon,keyPokemon) => <option  value={pokemon._id}>{pokemon.name}</option>)}
            </select> <br></br>
            <button type="submit" className="btn btn-outline-danger buttonin" value="supprimer">Supprimer</button> 
        </form><br></br><br></br>
    </>




    

}

