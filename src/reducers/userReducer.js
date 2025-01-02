import {set, ref } from "firebase/database"
import { database } from "../data/useFirebase"

export const initialUserState = null

/*
userReducer has a switch which provides the functionality to manage the userContext.jsx state.
It takes the user state and the correspondent action to update the state.
The action stores:
- type: the type of action (e.g. LOG_IN, LOG_OUT, etc)
- payload: the data needed to update the state (the user data)
*/
export function userReducer(state, action) {

    switch (action.type) {

        // Case used to log in, it means to check if the user exists in Firebase and if the password is correct.
        case 'LOG_IN': {
            if (action.payload.length > 1) {

                if(action.payload[1].userNameData === "" || action.payload[1].userPassData === ""){
                    return "Please write your user and password"
                }

                const usersDataInDB = action.payload[0]
                const userWithUsernameInDB = usersDataInDB[action.payload[1].userNameData]

                if(userWithUsernameInDB) {
                    // eslint-disable-next-line eqeqeq
                    if(userWithUsernameInDB.pass == action.payload[1].userPassData){
                       return {
                            email: userWithUsernameInDB.email,
                            name: action.payload[1].userNameData
                       }
                    }else{
                        return "Incorrect Pasword"
                    }
                }else{
                    return "User not registered"
                }
            }
            return initialUserState
        }

        // Case used to log out, it means to delete the user sate to the initialUserState (null)
        case 'LOG_OUT': {
            return initialUserState
        }

        // Case used to register a user, it means to add one entry to Firebase
        case 'REGISTER': {
            if(action.payload){
                const userDetails = {
                    email: action.payload.email,
                    name: action.payload.name,
                    pass: action.payload.pass
                }
     
                set(ref(database, 'users/' + action.payload.name), userDetails)
                return userDetails
            }
            return initialUserState
        }

        default: {
            break
        }

    }
}