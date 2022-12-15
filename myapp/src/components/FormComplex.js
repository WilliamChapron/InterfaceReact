import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';



export default function FormComplex(props){


    
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        props.functionName(data);
        props.refreshPage();
    }



    return <form className="formSize" onSubmit={handleSubmit(onSubmit)}>
        <p className="white">Create Pokemon</p> <br></br>
        <Form.Control size="lg" type="text" placeholder="Nom du pokemon" {...register("name", {required: true})} /> <br></br>
        <Form.Control size="lg" type="text" placeholder="Img du pokemon" {...register("img", {required: true})} /> <br></br>
        <select className="form-select form-select-sm" aria-label=".form-select-sm type" {...register("type1", {required: true})}>
            {props.types.map((type,keyType) => <option  value={type._id}>{type.name}</option>)}
        </select> <br></br>
        <Form.Control size="lg" type="text" placeholder="Description du type1" {...register("desctype1", {required: true})} /> <br />
        <select className="form-select form-select-sm" aria-label=".form-select-sm type" {...register("type2", {required: true})}>
            {props.types.map((type,keyType) => <option value={type._id}>{type.name}</option>)}
        </select> <br></br>
        <Form.Control size="lg" type="text" placeholder="Description du type2" {...register("desctype2", {required: true})} /> <br />
        <input type="submit" className="btn btn-outline-success buttonin" value={props.valueSubmit}/> <br></br> <br></br> <br></br>
    </form> 
    



}