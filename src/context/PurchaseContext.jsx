import React, { createContext, useReducer } from "react";
import { purchaseReducer, initialCartState } from "../reducers/purchaseReducer";

export const PurchaseContext = createContext()

export function PurchaseProvider ({children}) {

    const [state, dispatch] = useReducer(purchaseReducer, initialCartState)

    return (
        <PurchaseContext.Provider value={{
            purchase: state
        }}>
            {children}
        </PurchaseContext.Provider>
    )
}