import React, { createContext, useReducer } from "react";
import { userReducer, initialUserState } from "../reducers/userReducer";
import { get, ref, child } from "firebase/database";
import { database } from "../data/useFirebase";

export const UserContext = createContext()

/*
This is the context provider for the user data. It uses the useReducer hook to manage the state.
It uses "dispatch" to trigger the respective function to update the state.
*/
export function UserProvider({children}) {

    /* State that saves the user data as:
        userName{
            email, name, pass
        }
    */
    const [state, dispatch] = useReducer(userReducer, initialUserState)

    // This funtion is used to pull the user info from Firebase
    const login = (user) => {
        get( child ( ref(database), "users/") )
            .then(snapshot => snapshot.val())
            .then(response =>{
                // If the user is registered and the pass is correct, the correspondent dispatch is triggered.
                dispatch({
                    type: 'LOG_IN',
                    payload: [response, user]
                })
            })
            .catch(error => console.log(error))
    }

    // Fuintion to log out, it means to delete the data to its initial state (null)
    const logout = () => dispatch({
        type: 'LOG_OUT'
    })

    // Funtion to register a user in Firebase
    const register =(details)=> dispatch({
        type: 'REGISTER',
        payload: details
    })

    return (
        <UserContext.Provider value={{
            user: state,
            login,
            logout,
            register
        }}>
            {children}
        </UserContext.Provider>
    )
}