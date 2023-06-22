import clientPromise from "./mongodb";

let client
let db
let movies


async function init(){
    if(db) return
    try{
        client = await clientPromise
        db = await client.db()
        movies = await db.collection('movies')
    } catch(error){
        throw new Error('Failed to connect to database')
    }
}

;(async () =>{
    await init()
})()

export async function getMovies(){
    try{
        if(!movies) await init()
        const result = await movies
            .find({})
            .limit(20)
            .map( user => ({...user, _id: user._id.toString()}))
            .toArray()
        console.log(movies,  '<------------------------------*')

        return {movies : result}
    }catch(error){
        return {error: 'failed to fetch movies '}
    }
}