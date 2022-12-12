
import ColorSchemesExample from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import { UpdatePokemon } from '../api/update';
import FormUpdate from '../components/Form';

export default function Manage(){

    const [ nameEdit, setNameEdit ] = useState("");
    const [ name, setName ] = useState("");
    const [ type1, setType1 ] = useState("");
    const [ type2, setType2 ] = useState("");
    
    return <div className="manageMenu">

        <ColorSchemesExample />
        

        

    </div>
            
    
}
