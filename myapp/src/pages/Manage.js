
import ColorSchemesExample from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import { UpdatePokemon } from '../api/update';

export default function Manage(){

    const [ nameEdit, setNameEdit ] = useState("");
    const [ name, setName ] = useState("");
    const [ type1, setType1 ] = useState("");
    const [ type2, setType2 ] = useState("");
    
    return <div className="manageMenu">

        <ColorSchemesExample />
        

        
        
        <form onSubmit={UpdatePokemon}>
            <br></br> <br></br>
            <label> Nom du pokemon a modifier : </label> <br></br> <br></br>
            <input type="text" value={nameEdit} name="nameEdit" onChange={(event) => setNameEdit(event.target.value)} /> <br></br> <br></br>
            <label> Nom du pokemon : </label> <br></br> <br></br>
            <input type="text" value={name} name="name" onChange={(event) => setName(event.target.value)}/> <br></br> <br></br>
            <label>  Type du pokemon :</label> <br></br> <br></br>
            <input type="text" value={type1} name="type1" onChange={(event) => setType1(event.target.value)}/> <br></br> <br></br>
            <label> Second type du pokemon :</label> <br></br> <br></br>
            <input type="text" value={type2} name="type2" onChange={(event) => setType2(event.target.value)}/> <br></br> <br></br>
            
            <input type="submit" value="Envoyer" />

        </form>

    </div>
            
    
}
