export const UpdatePokemon = (data) => {
    event.PreventDefault();

    fetch('http://localhost:4444/pokemon/update',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}