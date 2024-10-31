import { child, get } from "firebase/database";
import { createContext, useState } from "react";
import { database } from "../../data/useFirebase"

export const TestCartContext = createContext()

export function TestCartProvider({children}){

    const [testCart, setTestCart] = useState(["HOLA"])

    const getTestCart =()=>{
        get( child (database, "carts/"))
            .then(res => res.val())
            .then(res => setTestCart(res.products.prod1))
            .catch(error => console.log(error))
    }

    getTestCart()

    return(
        <TestCartContext.Provider value={{testCart, setTestCart, getTestCart}}>
            {children}
        </TestCartContext.Provider>
    )

} 