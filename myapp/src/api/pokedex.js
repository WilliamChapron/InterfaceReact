export const GetPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/read', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokedexs = await response.json()
    return pokedexs
}