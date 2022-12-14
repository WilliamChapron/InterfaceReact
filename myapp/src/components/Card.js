export default function Card(props){

    return <>
        <img className="avatar" src={"https://cdn.discordapp.com/attachments/1034093039481786428/1052181679298588692/pokemon.png"} />
        
        {
        props.pokemonTable.type.map((type,keyType) => <img className="type" src={"https://cdn.discordapp.com/attachments/1034093039481786428/1052181679298588692/pokemon.png"}/>)
        }        
    
    </>




    

}