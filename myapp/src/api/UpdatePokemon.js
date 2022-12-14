export const UpdatePokemon = (data) => {
    fetch('http://localhost:4444/pokemon/update',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({pokemonupdate:data.pokemonupdate,choice:data.type1,choice2:data.type2,name:data.name,img:data.img,desctype1:data.desctype1,desctype2:data.desctype2})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}