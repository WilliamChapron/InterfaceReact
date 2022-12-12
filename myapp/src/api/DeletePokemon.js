export const DeletePokemon = async (data) => {
    fetch('http://localhost:4444/pokemon/delete', {
            method: 'DELETE', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({pokedemondelete:data.id})
    })
    .then(response => response.json())
    .catch(error => (console.log(error)));
}
