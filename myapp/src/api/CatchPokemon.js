export const CatchPokemon = async (data) => {
    fetch('http://localhost:4444/pokedex/insert', {
            method: 'POST', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({choice:data.id})
    })
    .then(response => response.json())
    .catch(error => (console.log(error)));


    
}




