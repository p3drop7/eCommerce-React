import { child, get, ref } from "firebase/database"
import { database } from "../data/useFirebase"

export const initialCartState = null

export function purchaseReducer(state, action) {

    switch (action.type) {

        case 'LOG_IN': {
            return
        }

        case 'OTHER': {

           return
        }

        default: {
            break
        }
    }
}