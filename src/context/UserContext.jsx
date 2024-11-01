import React, { createContext, useReducer } from "react";
import { userReducer, initialCartState } from "../reducers/userReducer";
//import { database } from "../data/useFirebase";
//import { child, get } from "firebase/database";

export const UserContext = createContext()

export function UserProvider({children}) {

    const [state, dispatch] = useReducer(userReducer, initialCartState)

    // Function to call the user database
    /*function getDB () {
        return get( child (database, "users/") )
            .then(res => res.val())
            .then(res => res)
            .catch(error => console.log(error))
    }*/

    // Function to check if there is a user logged in
    // CREAR ESTA FUNCION UNA VEZ QUE HAYAMOS AGREGADO LA FUNCIONALIDAD DE PERSISTIR LA SESION EN LAS COOKIES (LOCAL STORAGE)
    /* const checkUser = () => dispatch({
        type: 'CHECK_USER',
        payload: 
    }) */

    // Function to log in
    //const login = (user) => console.log(user)
  const login = (user) => dispatch({
        type: 'LOG_IN',
        // user has userName and pass inside it
        // users log in with username and pass
        // IF there is a user registered with the username, it returns an object: username {email, pass}
        //payload: {user, getDB}
        payload: user
    })

    // Fuintion to log out
    const logout = () => dispatch({
        type: 'LOG_OUT'
    })

    return (
        <UserContext.Provider value={{
            user: state,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}