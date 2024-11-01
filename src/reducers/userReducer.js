import { child, get } from "firebase/database"
import { database } from "../data/useFirebase"

export const initialCartState = false

export function userReducer(state, action) {
    switch (action.type) {

       /* case 'LOG-IN': {
            console.log("AQUI")
            async function getData() {

                

                const db = await action.payload.getDB()

                if (action.payload.user.username in db) {
                    if (action.payload.user.pass === db.username.pass) {
                        return db.username
                    } else {
                        return "Password is incorrect"
                    }
                } else {
                    return "The user is not registered"
                }
            }
            return getData()
        } */


        case 'LOG_IN': {

            async function getDB(){
                let db
                await get( child (database, "users/") )
                    .then(res => res.val())
                    .then(res => db = res)
                    .catch(error => console.log(error))
                return db
            }
            
            const db = getDB()

            /*const async db =()=>{
                let hh
                get( child (database, "users/") )
                    .then(res => res.val())
                    .then(res => hh = res)
                    .catch(error => console.log(error))
                console.log(hh)
            }
            console.log(db())*/
            
            if (action.payload.userNameData in db) {
                if (action.payload.userPassData === db.userName.pass) {
                    return db.username
                } else {
                    return "Password is incorrect"
                }
            } else {
                return "The user is not registered"
            }
        }

        case 'LOG_OUT': {
            return false
        }

        default: {
            break
        }
    }
}