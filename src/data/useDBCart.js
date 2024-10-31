import { child, get, getDatabase, onValue, ref } from "firebase/database"

/*
export function GetCart(){
    let db
    const database = getDatabase()
    const dbRef = ref(database, "carts/")
    onValue(dbRef, snapshot => {
        db = snapshot.val()
    })
    console.log(db  )
    return db
}   */

/* export function getCart(){
    const database = ref(getDatabase())
    const value = get( child( database, "carts/"))
        .then(snapshot => {
            const val = snapshot.val()
            return val.products.prod1
        })
    console.log(value) 
}*/

export function getCart(){
    return async () => {

    
    try {
        const response = await fetch(`https://rcs-react-clothing-store-default-rtdb.europe-west1.firebasedatabase.app/carts.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const res = await response.json()

        return res
    
    }catch(error){
        console.log(error)
    }
    }  
}