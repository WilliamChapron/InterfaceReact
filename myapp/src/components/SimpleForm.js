import { useForm } from "react-hook-form";



export default function SimpleForm(props){


    
    const { register, handleSubmit } = useForm();

    const onSubmit = data => { 
        props.functionName(data);
        props.refreshPage();
    };


    return <form onSubmit={handleSubmit(onSubmit)}> 
        <input type="hidden" {...register("id", {required: true})} value={props.pokemonId}/> <br></br> <br></br>
        <input type="submit" value={props.valueSubmit} className="btn btn-outline-success buttonin buttonManage" /> 
    </form>


    

}

