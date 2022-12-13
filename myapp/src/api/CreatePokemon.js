export const CreatePokemon = (data) => {
    console.log(data.type1)
    console.log(data.type2)
    console.log(data.name)

    fetch('http://localhost:4444/pokemon/insert',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({choice:data.type1,choice2:data.type2,name:data.name,img:data.img})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}