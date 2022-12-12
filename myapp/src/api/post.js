export const InsertPokemon = async (idvalue) => {
    console.log(idvalue)
    fetch('http://localhost:4444/pokedex/insert', {
            method: 'POST', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({choice:{idvalue}})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})

    
}




