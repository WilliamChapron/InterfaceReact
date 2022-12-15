export const CreatePokemon = (data) => {

    fetch('http://localhost:4444/pokemon/insert',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({name:data.name,img:data.img,choice:data.type1,choice2:data.type2,desctype1:data.desctype1,desctype2:data.desctype2})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}
