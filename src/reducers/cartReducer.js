export const initialCartState = null

/*
cartReducer provides a switch with all the functionality needed to update the cartContext.jsx state.
It takes the cart state and the correspondent action to update the state.
The action stores:
- type: the type of action (e.g. ADD_ITEM, REMOVE_ITEM, etc)
- payload: the data needed to update the state (e.g. the item to add or remove, etc.)
*/
export const cartReducer = (state, action) => {

    switch (action.type) {

        // This case is used to save the cart in the state if there is any in forebase for the current user.
        case 'GET_CART' : {
            if(!action.payload.response || action.payload.response === undefined) {
                return null
            } else if( action.payload.user in action.payload.response){
                return action.payload.response[action.payload.user]
            } else {
                return null
            }
        }

        // This case is used to add 1 item to the cart state.
        case 'ADD_ITEM': {

            // If there is no cart saved up, it add a new cart with the item.
            if(!state){
                const newItem = {
                    id: action.payload.id,
                    title: action.payload.title,
                    image: action.payload.image,
                    price: action.payload.price,
                    quantity: 1,
                    total: action.payload.price
                }

                const newCart = {
                    products: [newItem],
                    totalQuantity: 1,
                    totalPrice: action.payload.price
                }
                return newCart

            // If there is an item with the same id, it add +1 to that item.
            // This also updates the totalPrice and totalQuantity of the cart
            } else if ( state.products.find(item => item.id === action.payload.id) ) {
                
                const newItems = state.products.map(item => {
                    if(item.id === action.payload.id){
                        const newProdQuantity = item.quantity + 1
                        const newProdTotal = newProdQuantity * item.price
                        item.quantity = newProdQuantity
                        item.total = newProdTotal
                    }
                    return item
                })

                let newTotalPrice = 0
                newItems.forEach(item => {
                    newTotalPrice = newTotalPrice + item.total
                })
                newTotalPrice = newTotalPrice.toFixed(2)

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
                
            // If the item is not in the cart, it adds it to the state.
            // This also updates the totalPrice and totalQuantity of the cart state.
            }else{
                const newItem = {
                    id: action.payload.id,
                    title: action.payload.title,
                    image: action.payload.image,
                    price: action.payload.price,
                    quantity: 1,
                    total: action.payload.price
                }

                const newItemList = [...state.products, newItem]

                let newTotalPrice = 0
                newItemList.forEach(item => {
                    newTotalPrice = newTotalPrice + item.total
                })
                newTotalPrice = newTotalPrice.toFixed(2)

                let newTotalQuantity = 0
                newItemList.forEach(item => {
                    newTotalQuantity = newTotalQuantity + item.quantity
                })

                const newCart = {
                    products: [...state.products, newItem],
                    totalQuantity: newTotalQuantity,
                    totalPrice: newTotalPrice
                }

                return newCart
            }
        }

        // This case is used to remove one item from the cart list.
        // This also updates the totalPrice and totalQuantity of the cart state.
        case 'REMOVE_ITEM': {
            
            const newProdList = state.products.map(item => {
                if(item.id === action.payload.id){
                    item.quantity = item.quantity - 1
                }
                // If the quantity of the product reaches 0, it is added as null and then removed.
                if(item.quantity === 0){
                    return null
                }
                return item
            })
            const newCleanProdList = newProdList.filter(item => item !== null)

            let newTotalPrice = 0
            newCleanProdList.forEach(item => {
                newTotalPrice = newTotalPrice + item.total
            })
            newTotalPrice = newTotalPrice.toFixed(2)

            let newTotalQuantity = 0
            newCleanProdList.forEach(item => {
                newTotalQuantity = newTotalQuantity + item.quantity
            })

            const newCart = {
                products: newCleanProdList,
                totalQuantity: newTotalQuantity,
                totalPrice: newTotalPrice
            }

            // If the totalQuantity of products reaches 0, then the cart state is deleted to the initialCartState (null)
            if(newCart.products.length === 0) return initialCartState
            return newCart
        }    
        
        // Funtion to delete all of the products from the cart to the initialCartState (null)
        case 'EMPTY_CART': {
            return initialCartState
        }

        default: {
            break
        }
    }    
}