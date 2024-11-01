import { child, get } from "firebase/database";
import { createContext, useEffect, useState } from "react";
import { database } from "../../data/useFirebase"

export const TestCartContext = createContext()

export function TestCartProvider({children}){

    const [testCart, setTestCart] = useState(false)

    const getTestCart =()=>{
        get( child (database, "carts/"))
            .then(res => res.val())
            .then(res => setTestCart(res))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getTestCart()
    }, [])

    return(
        <TestCartContext.Provider value={{testCart, setTestCart, getTestCart}}>
            {children}
        </TestCartContext.Provider>
    )

} 