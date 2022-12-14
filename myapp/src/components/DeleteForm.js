import { useForm } from "react-hook-form";



export default function DeleteForm(props){


    
    const { register, handleSubmit } = useForm();

    const onSubmit = data => { 
        props.functionName(data);
        props.refreshPage();
    };


    return <> <form className="formSize" onSubmit={handleSubmit(onSubmit)}>
            <p>Delete Pokemon</p> <br></br>
            <select className="form-select form-select-sm" aria-label=".form-select-sm type" {...register("id")}>
                {props.pokemons.map((pokemon,keyPokemon) => <option  value={pokemon._id}>{pokemon.name}</option>)}
            </select> <br></br>
            <button type="submit" className="btn btn-outline-danger buttonin" value="supprimer">Supprimer</button> 
        </form><br></br><br></br>
    </>




    

}

