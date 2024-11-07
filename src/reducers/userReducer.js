import { child, get } from "firebase/database"
import { database } from "../data/useFirebase"

export const initialCartState = false

export function userReducer(state, action) {
    //console.log(action)
    switch (action.type) {

        case 'LOG_IN': {
            
            async function getData() {
                try{
                    const response = await get( child (database, "users/") )
                    const dataSnapshot = response.val()
                    const data = [dataSnapshot, action.payload.user]
                    action.payload.setAsyncRes(data)

                } catch (error) {
                    console.log("ERROR! ," + error)
                }
            }
            
            // THIS DOESN'T WORK BECAUSE THE ASYNC FUNCTION ALWAYS RETURNS A PROMISE
            // IF WE STORE THE RESPONSE OF A PROMISE OUTSIDE THE ASYNC FUNCTION IN A VARIABLE IT WON'T WORK EITHER...
            // BECAUSE THE JAVASCRIPT EXCUSTION DOESN'T STOP OUTSIDE THE FUNCTION SO THE VARIBLE'S VALUE WILL BE CALLED...
            // DEFORE THE COMPLETION OF THE PROMISE, THIS THE VARIABLE WLL BE UNDEFINED.
            // CHECK IF REDUX // USEDISPATCH // STORE WILL RESOLVE IT SINCE IT STORES ASYNC DATA IN AN ASYC STORE 
            // CHECK ALSO REDUCE-THUNK MIDDLEWARE

            getData()
            return 
        }

        case 'LOG_OUT': {
            return false
        }

        case 'OTHER': {

            // If there is info in action.payload from the Database
            if (action.payload.length > 1) {

                // Get the database info stored in the first position of the array from the payload
                const usersDataInDB = action.payload[0]

                // Get the info of the user in the database with the details of the user typed in the log in form ( payload[1] )
                const userWithUsernameInDB = usersDataInDB[action.payload[1].userNameData]
   

                if(userWithUsernameInDB) {
                    // eslint-disable-next-line eqeqeq
                    if(userWithUsernameInDB.pass == action.payload[1].userPassData){
                       return userWithUsernameInDB.email
                    }else{
                        return "Incorrect Pasword"
                    }
                }else{
                    return "User not registered"
                }
            }
            return
        }

        default: {
            break
        }
    }
}