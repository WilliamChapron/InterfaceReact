export const GetType = async () => {
    const response = await fetch(
        'http://localhost:4444/type/read', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const types = await response.json()
    return types
}