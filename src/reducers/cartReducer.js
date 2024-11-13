export const initialCartState = null

export const cartReducer = (state, action) => {

    switch (action.type) {

        case 'GET_CART' : {
            if( action.payload.user in action.payload.response){
                return action.payload.response[action.payload.user]
            }
            break
        }
        
        case 'ADD_ITEM': {
            if( state.products.find(item => item.id === action.payload.id) ) {
                
                const newItems = state.products.map(item => {
                    if(item.id === action.payload.id){
                        item.quantity = item.quantity + 1
                        item.total = item.quantity * item.price
                    }
                    return item
                })

                let newTotalPrice = 0
                newItems.forEach(item => {
                    newTotalPrice = newTotalPrice + item.total
                })
                newTotalPrice.toFixed(2)

                let newTotalQuantity = 0
                newItems.forEach(item => {
                    newTotalQuantity = newTotalQuantity + item.quantity
                })

                const newCart = {
                    products: newItems,
                    totalQuantity: newTotalQuantity,
                    totalPrice: newTotalPrice
                }
                return newCart
                
            }else{

                console.log("PAYLOAD")
                console.log(action.payload)

                const newItem = {
                    id: action.payload.id,
                    title: action.payload.title,
                    image: action.payload.image,
                    price: action.payload.price,
                    quantity: 1,
                    total: action.payload.price
                }

                console.log("NEW ITEM")
                console.log(newItem)

                /* const newCart = {
                    products: [...state.products, ],
                } */
            }

            return state
        }

        case 'REMOVE_ITEM': {
            const newCart = state.map(item => {
                if(item.id === action.payload.id){
                    item.quantity = item.quantity -1
                    return item
                } else {
                    return item
                }
            }).filter(item => item.quantity !== 0)
            return newCart
        }    
        
        case 'EMPY_CART': {
            state = initialCartState
            break
        }

        default: {
            break
        }
    }    
}