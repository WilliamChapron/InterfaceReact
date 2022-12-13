export const UpdatePokemon = (data) => {
    console.log(data.pokemonupdate)
    console.log(data.type1)
    console.log(data.type2)
    console.log(data.name)
    console.log(data.img)


    fetch('http://localhost:4444/pokemon/update',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({pokemonupdate:data.pokemonupdate,type1:data.type1,type2:data.type2,name:data.name,img:data.img})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}