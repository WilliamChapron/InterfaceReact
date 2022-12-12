import { Redirect } from "react-router-dom";

export const DeletePokemon = async (data) => {
    fetch('http://localhost:4444/pokedex/delete', {
            method: 'DELETE', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({pokedexdelete:data.id})
    })
    .then(response => response.json())
    .catch(error => (console.log(error)));

}
