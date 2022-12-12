export const UpdatePokemon = (event) => {
    event.PreventDefault();
    const bodySend = {
        nameEdit:"shit",
        name:"dsdfs",
        type1:"azeaf",
        type2:"azdadz"
    }

    fetch('http://localhost:4444/pokemon/update',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(bodySend)
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}