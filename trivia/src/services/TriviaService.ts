export async function getTrivia(){
    try{
        const response = await fetch(`/api.json`)
        return await response.json()
    }
    catch(error){
        console.error(error)
        return undefined
    }
}