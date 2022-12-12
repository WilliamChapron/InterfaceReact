import { useForm } from "react-hook-form";
import { useHistory } from 'react-router'


export default function Form(props){


    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => { props.functionName(data);  history => history.go(0)};


    return <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("id" )} value={props.pokemonId} /> <br></br> <br></br>
        <input type="submit" value={props.valueSubmit}/> 
    </form>

}