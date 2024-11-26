import React, { createContext, useReducer } from "react";
import { userReducer, initialCartState } from "../reducers/userReducer";
import { get, ref, child } from "firebase/database";
import { database } from "../data/useFirebase";

export const UserContext = createContext()

export function UserProvider({children}) {

    const [state, dispatch] = useReducer(userReducer, initialCartState)
    //const [asyncRes, setAsyncRes] = useState(false)
    
    /* useEffect(() => {
        dispatch({
            type: 'OTHER',
            payload: asyncRes
        })
    }, [asyncRes]) */

    /* const login = (user) => dispatch({
        type: 'LOG_IN',
        payload: {user, setAsyncRes}
        // user has userName and pass inside it
        // users log in with username and pass
        // If there is a user registered with the username, it returns an object: username {email, pass}
        
        // The setter setAsync was created so when the async function inside the case "LOG_IN" is resolved it will...
        // return the value to the "asyncRes" state at the top of this context, so the useEffect will be triggered...
        // with the value of the response from the promise. This was made this way because it was impossible to return...
        // a value with a async function, since async functions only return promises and not the response.
        // It can be made with a useDispatch, or a middleware like react-thunk with a global state
    }) */

    const login = (user) => {
        get( child ( ref(database), "users/") )
            .then(snapshot => snapshot.val())
            .then(response =>{
                dispatch({
                    type: 'LOG_IN',
                    payload: [response, user]
                })
            })
            .catch(error => console.log(error))
    }

    // Fuintion to log out
    const logout = () => dispatch({
        type: 'LOG_OUT'
    })

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