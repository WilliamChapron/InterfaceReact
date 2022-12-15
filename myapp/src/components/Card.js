export default function Card(props){

    return <>
        <h4 className="title">{props.pokemonTable.name}</h4>
        <img className="avatar" src={props.pokemonTable.img} />
        <p className="three">{props.pokemonTable.desctype1}</p>
        <p className="four">{props.pokemonTable.desctype2}</p>
        {
        props.pokemonTable.type.map((type,keyType) => <img className="type" src={type.img} />)
        
        }        
    
    </>




    

}